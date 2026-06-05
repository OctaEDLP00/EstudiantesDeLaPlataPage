import type { APIRoute } from 'astro'
import fakePartner from '~/database/fake-database-partner.json'

export const GET: APIRoute = async () => {
  // hacer llamada a la bbdd y enviarlos a la API
  return new Response(JSON.stringify(fakePartner))
}
