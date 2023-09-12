<script>
    export let as = 'p';
    export let align;
    export let color;
    export let family;
    export let weight = 'normal';
    export let size = 2;
</script>

<svelte:element class={`text size-${size} weight-${weight} family-${family} align-${align}`} this={as} style={`--text-color: var(--color-${color})`} {...$$restProps}>
    <slot />
</svelte:element>

<style>
    .text {
        color: var(--text-color);
    }

    .size-6 {
        font-size: var(--font-size-6);
    }

    .size-5 {
        font-size: var(--font-size-5);
    }

    .size-4 {
        font-size: var(--font-size-4);
    }

    .size-3 {
        font-size: var(--font-size-3);
    }

    .size-2 {
        font-size: var(--font-size-2);
    }

    .size-1 {
        font-size: var(--font-size-1);
    }

    .weight-normal {
        font-weight: normal;
    }

    .weight-bold {
        font-weight: bold;
    }

    .family-monospace {
        font-family: var(--font-family-monospace);
    }

    .align-center {
        text-align: center;
    }
</style>
