const tape = require('tape')
const svelte = require('svelte')

window.PanelClick = require('./dist/PanelClick.cjs.js')

const clearBrowser = () => {
	document.write(`
	<html>
		<head>
			<title>Testing yo</title>
		</head>
		<body>
			<div id="outside-target">wat</div>
			<div id="component-target"></div>
		</body>
	</html>
	`)
	document.close()
}

const createComponent = () => svelte.create(`
<h1>Check it</h1>
<p>
	<PanelClick
		on:clickInternal="fire('inside')"
		on:clickExternal="fire('outside')"
	>
		<h2 id="totally-clickable">You can click me</h2>
	</PanelClick>
</p>

<script>
export default {
	components: { PanelClick }
}
<\/script>
`, {
	dev: true
})

const test = (description, fn) => tape(description, t => {
	clearBrowser()
	try {
		fn(t)
	} catch (e) {
		t.error(e)
		t.end()
	}
})

test(`Clicking inside the component`, t => {
	t.timeoutAfter(1000)
	t.plan(1)

	const TestComponent = createComponent()

	const component = new TestComponent({
		target: document.getElementById('component-target')
	})

	component.on('inside', () => t.pass(`Clicked inside`))
	component.on('outside', () => t.fail(`Clicked outside`))

	document.getElementById('totally-clickable').click()
})

test(`Clicking outside the component`, t => {
	t.timeoutAfter(1000)
	t.plan(1)

	const TestComponent = createComponent()

	const component = new TestComponent({
		target: document.getElementById('component-target')
	})

	component.on('inside', () => t.fail(`Clicked inside`))
	component.on('outside', () => t.pass(`Clicked outside`))

	document.getElementById('outside-target').click()
})
