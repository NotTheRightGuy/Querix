type Params = {
    info: string
  }
   
export async function GET(request: Request, context: { params: Params }) {
const info = context.params.info // '1'
// databse functoin

return Response.json({info})
// return Response.redirect('http://localhost:3000/workspace', 301)
}