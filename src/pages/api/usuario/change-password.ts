import type { APIRoute } from 'astro'

export const POST: APIRoute = async () => {
  // obtener los datos del formulario
  // y enviarlos a la ddbb para cambiar la contraseña del usuario
  return new Response(JSON.stringify({}))
}
