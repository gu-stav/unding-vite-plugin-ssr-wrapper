<script>
    export let as;
    export let id;
</script>

<svelte:element this={as} popover {id} class="popover" {...$$restProps}>
    <slot />
</svelte:element>

<style>
    .popover {
        background: white;
        border: none;
        border-radius: 0.4rem;
        box-shadow: 0 0 0.4rem var(--color-grey-200);
        padding: 1rem;
    }
</style>
