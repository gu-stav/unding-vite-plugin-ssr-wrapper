<script>
    export let error = false;
</script>

<div class={`textarea ${error ? 'textarea-error' : ''}`}>
    <slot name="start" />
    <textarea {...$$props} />
    <slot name="end" />
</div>

<style>
    .textarea {
        align-items: center;
        border: 1px solid var(--color-grey-300);
        border-radius: 0.4rem;
        display: inline-flex;
        justify-content: stretch;
        overflow: hidden;
    }

    .textarea:focus-within {
        outline: 2px solid var(--color-grey-600);
    }

    .textarea-error {
        background-color: var(--color-red-100);
        border-color: var(--color-red-700);
    }

    .textarea-error:focus-within {
        outline-color: var(--color-red-700);
    }

    textarea {
        background: none;
        border: none;
        flex-grow: 1;
        font-family: inherit;
        font-size: var(--font-size-2);
        height: 10rem;
        outline: none;
        padding: calc(1rem - 2px) 1rem;
    }
</style>
