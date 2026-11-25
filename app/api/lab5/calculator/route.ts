import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const operation = params.get("operation") ?? "add";
  const aText = params.get("a");
  const bText = params.get("b");
  const a = aText === null || aText.trim() === "" ? NaN : Number(aText);
  const b = bText === null || bText.trim() === "" ? NaN : Number(bText);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return Response.json(
      { error: "Parameters a and b must both be valid numbers" },
      { status: 400 },
    );
  }
  let result: number;
  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      if (b === 0) {
        return Response.json(
          { error: "Cannot divide by zero" },
          { status: 400 },
        );
      }
      result = a / b;
      break;
    default:
      return Response.json(
        { error: `Invalid operation: ${operation}` },
        { status: 400 },
      );
  }
  return Response.json({ a, b, operation, result });
}
