import { initTRPC } from '@trpc/server';

export const createContext = ({ req, res }) => ({ req, res });
export const t = initTRPC.context().create();
