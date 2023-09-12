<script>
    import { createEventDispatcher } from 'svelte';

    import { Text } from '../Text';

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

<dialog bind:this={node} on:close={(event) => dispatch('close', event)} {...$$props}>
    <header class="header">
        <slot name="header">
            <Text size="3" weight="bold">
                {title}
            </Text>
        </slot>
    </header>

    <div class="body">
        <Text color="grey-500">
            <slot />
        </Text>
    </div>

    <footer class="footer">
        <slot name="footer" />
    </footer>
</dialog>

<style>
    dialog {
        border: 1px solid var(--color-grey-200);
        border-radius: 0.8rem;
        box-shadow: 0 0 0.4rem var(--color-grey-200);
        margin: auto;
        max-width: 65rem;
        padding: 2rem 3rem;
    }

    dialog::backdrop {
        background-color: rgba(255, 255, 255, .35);
        backdrop-filter: blur(0.4rem);
    }

    .body,
    .header,
    .footer {
        padding: 1rem 0;
    }

    .footer {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: flex-end;
    }
</style>
