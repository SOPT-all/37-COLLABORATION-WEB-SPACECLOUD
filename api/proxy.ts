import type { VercelRequest, VercelResponse } from '@vercel/node';

const BASE_URL = process.env.API_URL;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const backendUrl = BASE_URL + req.url;

  const headers: Record<string, string> = {};

  if (req.headers['content-type']) {
    headers['content-type'] = req.headers['content-type'] as string;
  }

  const response = await fetch(backendUrl, {
    method: req.method,
    headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
  });

  const data = await response.text();
  res.status(response.status).send(data);
}
