// import { resolve } from 'node:path';
import { unding } from './vite/index.js';

export default {
  plugins: [unding()],
  // ssr: {
  //   external: [
  //       '#unding-config'
  //     ]
  // },
  // resolve: {
  //     alias: {
  //         '#unding-config': resolve(process.cwd(), './unding.config.js')
  //     }
  // },
}
