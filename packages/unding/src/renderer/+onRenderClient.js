export default async function onRenderClient({ Page }) {
  const target = document.getElementById('app');

  new Page({
    target,
    hydrate: true,
    props: {
      pageProps: pageContext.pageProps
    }
  })
}
