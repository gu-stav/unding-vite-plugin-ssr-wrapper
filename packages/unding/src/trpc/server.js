import { z } from 'zod';

import { t } from './context.js';

export const appRouter = t.router({
  userById: t.procedure.input(z.string()).query(async (opts) => {
    return { id: 1, name: opts.input };
  }),
});
