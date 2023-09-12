export default {
  onRenderHtml: 'import:@unding/renderer/renderer/onRenderHtml',
  onRenderClient: 'import:@unding/renderer/renderer/onRenderClient',
  passToClient: ['pageProps'],
  clientRouting: true,
  hydrationCanBeAborted: true,
};
