const API_KEY = 'r8_QVtw5j9iuBiSyFwHneSC2BGucYTI2vM2x3bpg';

export default async (request) => {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      }
    });
  }

  try {
    const body = await request.json();

    const res = await fetch('https://api.replicate.com/v1/models/cuuupid/idm-vton/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
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

export const config = { path: '/api/tryon' };
