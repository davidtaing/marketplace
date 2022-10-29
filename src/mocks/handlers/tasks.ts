import { rest } from "msw";

import Tasks from "../data/tasks.json";

export const taskHandlers = [
  rest.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/tasks`, (req, res, ctx) => {
    return res(ctx.json(Tasks));
  }),
];
