<script>
    import { Text } from '../Text';
</script>

<li>
    <Text>
        <slot />
    </Text>
</li>

<style>
    li {
        padding: 1rem 1.5rem;
    }

    li:not(:last-child) {
        border-bottom: 1px solid var(--color-grey-100);
    }
</style>
