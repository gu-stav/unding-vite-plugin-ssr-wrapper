<script>
    import Popover from "../Popover/Popover.svelte";

    export let label;
</script>

<Popover.Trigger id="menu">
    <slot name="label">
        {label}
    </slot>
</Popover.Trigger>

<Popover anchor={`trigger-menu`} as="ol" id="menu">
    <slot />
</Popover>
