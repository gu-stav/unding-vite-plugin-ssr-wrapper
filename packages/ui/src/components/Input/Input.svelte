<script>
    export let align = 'left';
    export let error = false;
</script>

<div class={`input ${error ? 'input-error' : ''}`}>
    <slot name="start" />
    <input class={`align-${align}`} {...$$props} />
    <slot name="end" />
</div>

<style>
    .input {
        align-items: center;
        border: 1px solid var(--color-grey-300);
        border-radius: 0.4rem;
        display: inline-flex;
        justify-content: stretch;
        overflow: hidden;
    }

    .input:focus-within {
        outline: 2px solid var(--color-grey-600);
    }

    .input-error {
        background-color: var(--color-red-100);
        border-color: var(--color-red-700);
    }

    .input-error:focus-within {
        border-color: var(--color-red-700);
    }

    input {
        background: none;
        border: none;
        flex-grow: 1;
        font-size: var(--font-size-2);
        outline: none;
        padding: calc(1rem - 2px) 1rem;
    }

    .align-right {
        text-align: right;
    }
</style>
