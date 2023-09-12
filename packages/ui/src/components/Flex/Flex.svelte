<script>
    export let as = 'div';
    export let direction = 'row';
    export let gap = 0;
    export let wrap = '';
</script>

<svelte:element class={`flex direction-${direction} gap-${gap} wrap-${wrap}`} this={as}>
    <slot />
</svelte:element>

<style>
    .flex {
        display: flex;
    }

    .direction-column {
        flex-direction: column;
    }

    .gap-1 {
        gap: 0.5rem;
    }

    .gap-2 {
        gap: 1rem;
    }

    .gap-3 {
        gap: 2rem;
    }

    .wrap-wrap {
        flex-wrap: wrap;
    }
</style>
