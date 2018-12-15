require('register-svelte-require')(require('svelte'))
const fs = require('fs')
const test = require('tape')
const { JSDOM } = require('jsdom')

const PanelClickTest = require('./PanelClickTest.html')

const dom = new JSDOM()
global.window = dom.window
global.document = dom.window.document

test('clicking inside and outside the panel', t => {
	t.plan(2)

	const component = new PanelClickTest({ target: global.document.body })

	component.on('inside', () => {
		t.pass('an internal click happened')
		component.on('outside', () => {
			t.pass('an external click happened')
			t.end()
		})

		dom.window.document.querySelector('#external').click()
	})

	dom.window.document.querySelector('#internal').click()
})
