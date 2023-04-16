<script>
    export let pageProps;
</script>

<h1>{pageProps.title}</h1>
<p>{pageProps.body}</p>

<style>
    h1 {
        color: darkgreen;
    }

    p {
        color: green;
    }
</style>
