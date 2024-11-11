# Node & TypeScript - Edge Functions (Serverless)

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

En esta sección trabajaremos creando pequeñas funciones que nos permitan desplegarlas en la nube, y así evitar tener que crear todo un servidor que se encuentre corriendo el 100% del tiempo a la espera de peticiones http esporádicas.

Lo que veremos es muy utilizado para abaratar costos y desplegar procedimientos en la nube. Hay muchos servicios que ofrecen este tipo de funciones en la nube (edge functions) que nos permitirán realizar lo que necesitemos, pero en esta sección lo haremos con Netlify por su capa gratuita y funcional.

En este proyecto vamos a realizar lo que utilizamos en el proyecto anterior node-typescript-webhooks pero sacaremos todo lo que no usaremos como express, no necesitamos toda la lógica con tantos archivos y solo utilizaremos lo que necesitamos y la convertiremos en una función y esa función la desplegaremos en Netlify, en la parte de edge functions, para luego decirle a github que se comunique con nuestra edge function y realice el proceso de la comunicación con discord cuando se disparen los webhooks por la parte de github.

NOTA: Todo esto lo haremos en producción pero usando la capa gratuita de Netlify que tenemos hasta 1,000,000 de invocaciones de nuestro edge function por mes, luego de esa cantidad, vamos a tener la opción de pagar.

NOTA: En el proyecto anterior nos creamos un servidor que está corriendo en un puerto y si nosotros desplegáramos eso en la nube entonces nos van a cobrar por el tiempo que esté corriendo en la nube, es decir, si está 24/7 entonces nos cobrarán ese 24/7, así sucedan muchas o pocas cosas con las acciones o eventos de los webhooks. Por eso sería mucho más facil y económico para nosotros que creáramos una función que haga el mismo trabajo y que solo cuando se invoca, ahí nos van a empezar a tomar la cuota, en este caso hasta 1,000,000 de invocaciones de nuestro edge function por mes,

### \* PASOS A REALIZAR:

1. ejemplo
2. ejemplo
3. ejemplo

### \* RECURSOS A USAR:

- Paquete `Netlify CLI` usando `https://docs.netlify.com/cli/get-started/` desde `npm install netlify-cli -g`

- Paquete `Edge Functions` usando `https://docs.netlify.com/functions/get-started/?fn-language=ts` desde `npm install @netlify/functions`

- Paquete `nombre_paquete` usando `comando_paquete` desde `url_paquete`

### \* NOTAS:

- Documentación utilizada:

  - https://www.netlify.com/
  - https://docs.netlify.com/cli/get-started/

- Posiblemente nos dará error y no nos mostrará nada o como un "404 not found", pero para mandar a llamar a las funciones por ejemplo a la de "hello". Hay que recordar que los nombres de los archivos son los nombres de las funciones, es decir, si la carpeta se llama "hello" entonces el archivo igual, entonces al url que vamos a apuntar sería "/.netlify/functions/hello" que sería algo así "http://localhost:8888/.netlify/functions/hello" y ahí veremos nuestra respuesta pero ejecutado como una edge function. Esto nos da la posibilidad de tener una función o endpoint corriendo sin la necesidad de un servidor (en realidad sería sí está en un servidor pero en este caso de Netlify y no en uno nuestro)

- Para probar en desarrollo podemos usar "netlify dev" porque ya lo tenemos instalado de manera global, aunque también se puede usar un script y tenerlo como una documentación.

- Para desplegar funciones a producción "netlify deploy --prod" para iniciar el proceso de deployment (el cual se tendría que hacer cada que se hagan modificaciones) y con eso nos saldrán algunas opciones como:

  - Si queremos linkear este proyecto a un proyecto ya existente
  - Si queremos crear y configurar un nuevo proyecto

  - Seleccionar el team de trabajo

  - Colocar el nombre del sitio (se puede cambiar después pero cuando se está referenciando en otro sitio entonces ya resulta un poco más complicado para actualizar, no tanto por Netlify sino porque vamos a tener que actualizar los lugares donde lo estoy llamando)

    - Si el nombre está correcto y es único, entonces nos darán algunas url como la de Admin URL para configurarlo, URL que se usará para realizar las llamadas, Site ID que es el id del sitio.

  - Cual es el directorio a publicar (presionar enter para que tome el actual y que se suba todo aunque también se puede colocar el "public" o "dist" en caso tengamos alguno de esos)

- Para realizar configuraciones podemos ir al Admin URL que nos dan y vamos al Site Configuration -> Environment variables

---
