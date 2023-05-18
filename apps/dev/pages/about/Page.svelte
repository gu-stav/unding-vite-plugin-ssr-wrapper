<script context="module">
    import { client } from '@unding/studio/trpc';

    export async function load(pageContext) {
        const user = await client.userById.query('test 123');

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
                    user,
                    ...page
                }
            }
        }
    }
</script>

<script>
    export let title;
    export let body;
    export let user;
</script>

<h1>{title}</h1>
<p>{body}</p>

<p>Hello {user.name}</p>

<a href="/about/nested">Go to nested page</a>

<style>
    h1 {
        color: darkgreen;
    }

    p {
        color: green;
    }
</style>
