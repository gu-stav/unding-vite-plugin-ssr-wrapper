export default async function onRenderClient({ pageProps, Page }) {
  const target = document.getElementById('app');

  new Page({
    target,
    hydrate: true,
    props: {
      pageProps: pageProps
    }
  })
}
