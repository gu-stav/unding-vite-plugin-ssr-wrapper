<script>
    import { Spinner } from '../Spinner';

    export let isLoading = false;
    export let variant = 'primary';
</script>

<button class={`variant-${variant}`} on:click {...$$props}>
    {#if isLoading}
        <Spinner />
    {/if}

    <slot />
</button>

<style>
    button {
        align-items: center;
        background: transparent;
        border: 1px solid transparent;
        border-radius: calc(0.4rem - 1px);
        cursor: pointer;
        display: inline-flex;
        font-weight: 500;
        gap: 0.75rem;
        padding: 0.85rem 1.25rem;
    }

    .variant-primary {
        background-color: var(--color-green-400);
        border: 1px solid var(--color-green-500);
    }

    .variant-primary:hover {
        background-color: var(--color-green-500);
    }

    .variant-secondary {
        background-color: var(--color-grey-200);
        border: 1px solid var(--color-grey-300);
        color: black;
    }

    .variant-secondary:hover {
        background-color: var(--color-grey-300);
    }

    .variant-destructive {
        background-color: var(--color-red-200);
        border: 1px solid var(--color-red-300);
    }

    .variant-destructive:hover {
        background-color: var(--color-red-300);
    }

    .variant-outline {
        border: 1px solid var(--color-grey-200);
    }

    .variant-outline:hover {
        background-color: var(--color-grey-100);
    }

    .variant-ghost {
        border: 1px solid transparent;
    }

    .variant-ghost:hover {
        background-color: var(--color-grey-100);
        border-color: var(--color-grey-100);
    }

    button:focus-visible {
        outline-color: var(--color-grey-600);
        outline-offset: 0.2rem;
    }
</style>
