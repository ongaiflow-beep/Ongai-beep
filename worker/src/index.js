const ALLOWED_TYPES = new Set([
  'image/jpeg', 'image/png', 'image/gif',
  'image/webp', 'image/svg+xml', 'image/avif',
]);
const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

const EXT_MAP = {
  'image/jpeg':   'jpg',
  'image/png':    'png',
  'image/gif':    'gif',
  'image/webp':   'webp',
  'image/svg+xml':'svg',
  'image/avif':   'avif',
};

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '*';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method not allowed' }, 405, origin);
    }

    // Auth — Bearer token must match UPLOAD_SECRET env var
    const auth = request.headers.get('Authorization') || '';
    if (!env.UPLOAD_SECRET || auth !== `Bearer ${env.UPLOAD_SECRET}`) {
      return jsonResponse({ error: 'Unauthorized' }, 401, origin);
    }

    let formData;
    try {
      formData = await request.formData();
    } catch {
      return jsonResponse({ error: 'Invalid multipart body' }, 400, origin);
    }

    const file = formData.get('file');
    if (!file || typeof file === 'string') {
      return jsonResponse({ error: 'No file field in form data' }, 400, origin);
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return jsonResponse({ error: `File type not allowed: ${file.type}` }, 400, origin);
    }

    if (file.size > MAX_BYTES) {
      return jsonResponse({ error: 'File exceeds 10 MB limit' }, 400, origin);
    }

    // Unique key: uploads/epoch-uuid12.ext
    const ext = EXT_MAP[file.type] || file.name.split('.').pop().slice(0, 5).toLowerCase() || 'bin';
    const uid = crypto.randomUUID().replace(/-/g, '').slice(0, 12);
    const key = `uploads/${Date.now()}-${uid}.${ext}`;

    try {
      await env.BUCKET.put(key, file.stream(), {
        httpMetadata: { contentType: file.type },
      });
    } catch (e) {
      return jsonResponse({ error: 'R2 upload failed: ' + e.message }, 500, origin);
    }

    const base = (env.PUBLIC_R2_URL || '').replace(/\/$/, '');
    const url  = `${base}/${key}`;
    return jsonResponse({ url, key }, 200, origin);
  },
};

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin':  origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Max-Age':       '86400',
  };
}

function jsonResponse(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}
