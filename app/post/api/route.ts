// app/post/api/route.ts
import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();
  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme"); // get cookie from request
  console.log(theme);

  cookies().set("resultPerPage", "20"); // set cookie in response using cookies helper
  console.log(cookies().get("resultPerPage")); // get cookie from response

  return new Response("<h1>Check the console</h1>", {
    headers: { 
        "Content-Type": "text/html", 
        "Set-Cookie": "theme=light;" // set cookie an response to client
    },
  });
}
