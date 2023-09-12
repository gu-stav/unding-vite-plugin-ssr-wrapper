export default onRenderClient

import Layout from '../components/Layout.svelte'

function onRenderClient(pageContext) {
  const target = document.getElementById('app')

  const { Page, pageProps } = pageContext

  new Layout({
    target,
    hydrate: true,
    props: {
      pageProps: pageProps,
      Page
    }
  })
}
