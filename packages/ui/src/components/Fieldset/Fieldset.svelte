<script>
    import { Text } from '../Text';

    export let legend;
</script>

<fieldset>
    <legend>
        <slot name="legend">
            {#if legend}
                <Text size={3} weight="bold">
                    {legend}
                </Text>
            {/if}
        </slot>
    </legend>

    <slot />
</fieldset>

<style>
    fieldset {
        border: none;
    }

    legend {
        display: block;
        margin-bottom: 2rem;
    }
</style>
