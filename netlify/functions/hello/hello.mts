import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  /* para tener en cuenta que las edge functions se ejecutan rápido pero los logs se pueden demorar un poco en aparecer */
  console.log("Console log from hello");

  return new Response(JSON.stringify("Hello, world!"), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
