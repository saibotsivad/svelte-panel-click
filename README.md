# svelte-panel-click

Small web component to determine if clicks occur inside or outside a panel.

## install

The normal way: `npm install --save svelte-panel-click`

## use

As a Svelte component:

```html
<PanelClick
	on:clickExternal="click handler for external clicks"
	on:clickInternal="click handler for internal clicks"
>
	<p>Inner panel text.</p>
</PanelClick>
<script>
import PanelClick from 'svelte-panel-click'
export default {
	components: { PanelClick }
}
</script>
```

## api

Any time a click event happens within the `window`, this component
emits one of two events:

* `clickInternal` - When the click event happens *inside* the
	component element.
* `clickExternal` - When the click event happens *outside* the
	component element.

## example

This component might be used for a modal popup that is hidden
when click events outside the modal happen:

```html
<p>Normal body text.</p>
{#if visible}
	<PanelClick
		on:clickExternal="externalClickHandler(event)"
		on:clickInternal="internalClickHandler(event)"
	>
		<p>Text inside the panel.</p>
		<button on:click="set({ visible: false })">
			Hide Panel
		</button>
	</PanelClick>
{/if}
<p>More normal body text.</p>
<button
	ref:button
	on:click="set({ visible: true })"
>
	Show Panel
</button>

<script>
import PanelClick from 'svelte-panel-click'
export default {
	components: { PanelClick },
	methods: {
		externalClickHandler(event) {
			if (event.target !== this.refs.button) {
				// the click was *not* on the "Show Panel" button
				this.set({ visible: false })
			}
		}
	}
}
</script>
```

## license

Published and released under the [Very Open License](http://veryopenlicense.com).
