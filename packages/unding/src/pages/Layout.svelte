<script>
    export let Page;
    export let pageProps;
</script>

<a href="/">Index</a>
<a href="/about">About</a>

<hr />

<svelte:component this={Page} {...pageProps} />
