/**
 * Endpoint del HEALTHCHECK del contenedor. Se sirve estático: no hay nada que
 * consultar, sólo confirma que el server de Next está en pie y respondiendo.
 * Antes el healthcheck pedía `/`, que renderizaba la home entera cada 30 s.
 */
export const dynamic = "force-static";

export function GET() {
  return Response.json({ ok: true });
}
