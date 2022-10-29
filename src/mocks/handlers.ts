import { rest } from "msw";
import Stripe from "stripe";
import { taskHandlers } from "./handlers/tasks";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
  apiVersion: "2022-08-01",
});

export const handlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/operations/releasepayment`,
    async (req, res, ctx) => {
      const { client_secret } = await stripe.paymentIntents.create({
        amount: 30000,
        currency: "aud",
        application_fee_amount: 123,
        customer: "cus_Me9Lz7memmLIEB",
        transfer_data: {
          destination: "acct_1Lur4rIWxYvLVjGY",
        },
        metadata: { taskId: "6350d76580c58772355d7613" },
      });

      return res(
        ctx.json({
          status: "success",
          data: {
            client_secret,
          },
        })
      );
    }
  ),
  ...taskHandlers,
];
