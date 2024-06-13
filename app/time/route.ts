// app/time/route.ts
export const dynamic = "force-dynamic"; // make this route no cache
export async function GET() {
    return Response.json({ time: new Date().toLocaleTimeString() });
}