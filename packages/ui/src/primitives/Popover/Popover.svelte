<script>
    export let as;
    export let id;
</script>

<svelte:element this={as} anchor={`trigger-${id}`} popover {id} {...$$restProps}>
    <slot />
</svelte:element>
