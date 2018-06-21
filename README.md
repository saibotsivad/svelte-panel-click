# svelte-panel-click

Small web component to determine if clicks occur inside or outside a panel.

## install

The normal way: `npm install --save svelte-panel-click`

## use

As a Svelte component (see the [demo here](https://svelte.technology/repl?version=2.8.0&gist=57609eb9f4c2d64f510e30e3e2c846e2)):

```html
<SveltePanelClick
	on:clickExternal="set({ lastClick: 'outside' })"
	on:clickInternal="set({ lastClick: 'inside' })"
>
	<p class="inside-the-panel">
		Click anywhere inside this box to trigger an internal click, or
		outside the box to trigger an external click.
	</p>
</SveltePanelClick>

{#if lastClick}
	<p>You last clicked {lastClick}.</p>
{/if}

<script>
	import SveltePanelClick from 'svelte-panel-click@1.0.0'
	export default {
		components: {
			SveltePanelClick
		}
	}
</script>

<style>
	p.inside-the-panel {
		border: 1px solid black;
		padding: 15px;
	}
</style>
```

## api

Any time *any* click event happens within the DOM `window`, this
component emits one of two events:

* `clickInternal` - When the click event happens *inside* the
	component element.
* `clickExternal` - When the click event happens *outside* the
	component element.

## example

This component might be used for a modal popup that is hidden
when click events outside the modal happen (see
[the demo](https://svelte.technology/repl?version=2.8.0&gist=45704f9c9abdc261489d43628f3a931c)):

```html
<p>This text is not inside the panel.</p>
<p>If you click the button, it will reveal the panel.</p>

<PanelClick
    on:clickExternal="externalClickHandler(event)"
    on:clickInternal="internalClickHandler(event)"
>
    {#if visible}
        <div class="panel">
            <p>This text is inside the panel.</p>
            <p>
                If you click the button or outside the panel it
                will hide, but if you click elsewhere inside the
                panel, it won't hide.
            </p>
            <button on:click="set({ visible: false })">
                Hide the Panel
            </button>
        </div>
    {/if}
</PanelClick>

<button
    ref:button
    on:click="set({ visible: true })"
>
    Show the Panel
</button>

<script>
import PanelClick from 'svelte-panel-click@1.0.0'
export default {
    components: { PanelClick },
    methods: {
        externalClickHandler(event) {
            if (event.target !== this.refs.button) {
                // the click was *not* on the "Show Panel" button
                this.set({ visible: false })
            }
        },
        internalClickHandler(event) {
            // the click happened inside the panel
        }
    }
}
</script>

<style>
div.panel {
    border: 1px solid black;
    padding: 15px;
}
</style>
```

## license

Published and released under the [Very Open License](http://veryopenlicense.com).
