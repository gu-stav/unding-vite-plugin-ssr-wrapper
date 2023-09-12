<script>
    import { createEventDispatcher } from 'svelte';

    import { Button } from '../Button';
    import Title from './Title.svelte';

    const dispatch = createEventDispatcher();

    export let isOpen = false;
    export let node;
    export let title;

    $: {
        if (node) {
            if (isOpen) {
                node.showModal();
            } else {
                node.close();
            }
        }
    }
</script>

<dialog bind:this={node} on:close={(event) => dispatch('close', event)} {...$$restProps}>
    <header class="header">
        <slot name="header">
            <Title>
                {title}
            </Title>
        </slot>

        <Button type="button" on:click={(event) => dispatch('close', event)} aria-label="Close" variant="outline">
            <Button.Icon name="warning" />
        </Button>
    </header>

    <div class="body">
        <slot />
    </div>

    <footer class="footer">
        <slot name="footer" />
    </footer>
</dialog>

<style>
    dialog {
        border: none;
        border-radius: 0.4rem;
        box-shadow: 0 0 0.4rem var(--color-grey-200);
        margin: auto;
        max-width: 75%;
        padding: 0;
    }

    dialog::backdrop {
        background-color: rgba(255, 255, 255, .35);
        backdrop-filter: blur(0.4rem);
    }

    .header {
        align-items: center;
        border-bottom: 1px solid var(--color-grey-100);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 2rem;
    }

    .body {
        padding: 2rem;
    }

    .footer {
        background-color: var(--color-grey-100);
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: flex-end;
        padding: 2rem;
    }
</style>
