<script context="module">
    export async function load(pageContext) {
        // await api data here
        const page = {
            title: "About",
            body: "Sample API prefetch page with a fixed path (ie, not a catch-all route)."
        };

        // pageProps is listed in server's passToClient list, so we put all of our
        // props into that, and just use that one prop.
        return {
            pageContext: {
                pageProps: {
                    ...page
                }
            }
        }
    }
</script>

<script>
    export let title;
    export let body;
</script>

<h1>{title}</h1>
<p>{body}</p>

<style>
    h1 {
        color: blue;
    }

    p {
        color: green;
    }
</style>
