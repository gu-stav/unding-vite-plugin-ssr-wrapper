<script>
    import { Text } from '../Text';

    export let variant;
</script>

<span class={`badge badge--${variant}`}>
    <Text size={1}>
        <slot />
    </Text>
</span>

<style>
    .badge {
        align-items: center;
        background-color: red;
        border-radius: 4px;
        display: inline-flex;
        gap: 0.5rem;
        line-height: 1;
        padding: 0.3rem 1rem;
    }

    .badge--info {
        background-color: var(--color-green-200);
        border: 1px solid var(--color-green-500);
    }

    .badge--success {
        background-color: var(--color-green-200);
        border: 1px solid var(--color-green-500);
    }

    .badge--warning {
        background-color: var(--color-yellow-200);
        border: 1px solid var(--color-yellow-300);
    }
</style>
