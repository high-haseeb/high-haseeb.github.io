export async function GET(req){
  const res = 'hello world';
  // const resJson = await res.toJSON();
  return new Response('hello there i am under the water')
}
