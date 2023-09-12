<script>
    export let orientation = 'horizontal';
</script>

<div class={`separator orientation-${orientation}`} />

<style>
    .separator {
        background-color: var(--color-grey-100);
    }

    .orientation-horizontal {
        height: 1px;
        width: 100%;
    }

    .orientation-vertical {
        height: 100%;
        width: 1px;
    }
</style>
