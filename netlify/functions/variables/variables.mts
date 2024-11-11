import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  /* para tener en cuenta que las edge functions se ejecutan rápido pero los logs se pueden demorar un poco en aparecer */
  console.log("Console log from variables");

  /* Netlify viene preconfigurado para leer variables de entorno */
  const myImportantVariables = process.env.MY_IMPORTANT_VARIABLE;

  if (!myImportantVariables) {
    /* si colocamos con el "new Error(......)" entonces se muestra el stack trace (informe de los elementos activos en la pila de ejecución en un momento determinado durante la ejecución de un programa) y también le damos más información a quien lo esté usando cosa que no sería conveniente, por eso lo mandamos solo con el "throw" y con eso se daría menos información del error y ya lo podemos manejar de forma interna nosotros */
    // throw new Error("Missing MY_IMPORTANT_VARIABLE")

    throw "MY_IMPORTANT_VARIABLE";
  }

  return new Response(JSON.stringify(myImportantVariables), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
