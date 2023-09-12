<script>
    import { Text } from '../Text';
</script>

<th>
    <Text color="grey-600" size="1" weight="bold">
        <slot />
    </Text>
</th>

<style>
    th {
        padding: 1rem;
        text-align: left;
    }
</style>
