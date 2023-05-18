import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import fetch, {
    Blob,
    blobFrom,
    blobFromSync,
    File,
    fileFrom,
    fileFromSync,
    FormData,
    Headers,
    Request,
    Response,
  } from 'node-fetch'

if (!globalThis.fetch) {
    globalThis.fetch = fetch
    globalThis.Headers = Headers
    globalThis.Request = Request
    globalThis.Response = Response
}

export const client = createTRPCProxyClient({
    links: [
      httpBatchLink({
        url: 'http://localhost:4000/trpc',
      }),
    ],
  });
