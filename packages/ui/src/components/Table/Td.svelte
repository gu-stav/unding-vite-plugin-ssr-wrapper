<script>
    import { Text } from '../Text';
</script>

<td>
    <Text size="2" {...$$props}>
        <slot />
    </Text>
</td>

<style>
    td {
        padding: 1rem;
    }
</style>
