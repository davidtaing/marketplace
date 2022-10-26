import { loadStripe } from "@stripe/stripe-js";

export const joinClassNames = (...classes: string[]) => {
  return classes.join(" ");
};

export const initStripe = () =>
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "");
