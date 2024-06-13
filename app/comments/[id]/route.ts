// comments/[id]/route.ts
import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (parseInt(params.id) > comments.length) {
    return redirect("/comments");
  }
  const comment = comments.find((c) => c.id === parseInt(params.id));
  return new Response(JSON.stringify(comment));
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { text } = body;
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  comments[index].text = text;
  return new Response(JSON.stringify(comments[index]));
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments.splice(index, 1);
  return new Response(JSON.stringify(deletedComment));
}
