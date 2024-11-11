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
- Paquete `nombre_paquete` usando `comando_paquete` desde `url_paquete`
- Paquete `nombre_paquete` usando `comando_paquete` desde `url_paquete`

### \* NOTAS:

- Documentación utilizada:

  - https://www.netlify.com/
  - https://docs.netlify.com/cli/get-started/

- ejemplo
- ejemplo

---
