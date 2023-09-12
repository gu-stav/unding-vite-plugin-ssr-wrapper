<script>
    export let id;
</script>

<button {...$$restProps} id={`trigger-${id}`} popovertarget={id}>
    <slot />
</button>
