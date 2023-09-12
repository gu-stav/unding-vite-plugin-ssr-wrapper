<script>
    import { Text } from '../Text';
</script>

<div class={`input-unit input-unit--slot-${$$props.slot}`}>
    <Text family="monospace" size={1}>
        <slot />
    </Text>
</div>

<style>
    .input-unit {
        user-select: none;
    }

    .input-unit--slot-start {
        padding-left: 1rem;
    }

    .input-unit--slot-end {
        padding-right: 1rem;
    }
</style>
