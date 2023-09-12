<script>
    import Hint from './Hint.svelte';
    import { Label } from '../Label';
    import { Text } from '../Text';

    export let id;
    export let label;
    export let error;
    export let hint;
</script>

<div class="field">
    <div class="header">
        <slot name="label">
            <Label for={id}>
                {label}
            </Label>
        </slot>

        <slot name="meta" />
    </div>

    <slot name="hint">
        {#if hint}
            <Hint>{hint}</Hint>
        {/if}
    </slot>

    <slot />

    <slot name="error">
        {#if error}
            <Text color="red-700" size="1">
                {error}
            </Text>
        {/if}
    </slot>
</div>

<style>
    .field {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
    }

    .header {
        display: flex;
        justify-content: space-between;
    }
</style>
