<script>
    import { Text } from "../Text";

    export let level = 2;
</script>

<Text as={`h${level}`} size={7 - level}>
    <slot />
</Text>
