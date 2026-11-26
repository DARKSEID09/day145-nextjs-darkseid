
export async function GET() {
  return Response.json({
    message: "Hello Manoj!",
    course: "Next.js",
    day: 147,
    status: "Learning API Routes",
  });
}
export async function POST(request: Request) {
  const data = await request.json();

  return Response.json({
    message: "Data received successfully!",
    receivedData: data,
  });
}