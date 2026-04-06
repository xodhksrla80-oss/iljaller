export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.hostname === 'www.iljaller.kr') {
      return Response.redirect('https://iljaller.kr' + url.pathname + url.search, 301);
    }

    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response('Not found', { status: 404 });
    }
  },
};
