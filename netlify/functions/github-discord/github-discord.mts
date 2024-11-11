import type { Context } from "@netlify/functions";

const notify = async (message: string) => {
  const body = {
    content: message,
    // embeds: [
    //   {
    //     image: {
    //       url: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMncxMTZseDAwM2RpdzN6d2w1aXNva2lsNGw1N2V2bWRleHMydjBjYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JIX9t2j0ZTN9S/giphy.gif",
    //     },
    //   },
    // ],
  };

  const response = await fetch(process.env.DISCORD_WEBHOOK_URL ?? "", {
    method: "POST", // casi siempre al trabajar con webhooks es en método POST
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.log("Error sending message to Discord");
    return false;
  }

  return true;
};

export default async (req: Request, context: Context) => {
  /* para tener en cuenta que las edge functions se ejecutan rápido pero los logs se pueden demorar un poco en aparecer */
  console.log("Console log from github-discord");

  await notify("Hola Mundo desde Netlify DEV");

  return new Response(JSON.stringify("edge function github-discord done"), {
    /* importante mandar un status 200 o al rango de 200 como 201, 202, etc, porque si se coloca 400 o 404 o 500 entonces eso detectará que algo salió mal en el llamado */
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
