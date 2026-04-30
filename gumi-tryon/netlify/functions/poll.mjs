const API_KEY = process.env.REPLICATE_API_KEY;

export default async (request) => {
  const url = new URL(request.url);
  const id  = url.searchParams.get('id');

  if (!id) {
    return Response.json({ error: 'id is required' }, { status: 400 });
  }

  try {
    const res  = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
      headers: { 'Authorization': `Bearer ${API_KEY}` }
    });
    const data = await res.json();

    return Response.json(data, {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  } catch (err) {
    return Response.json({ error: err.message }, {
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
};

export const config = { path: '/api/poll' };
