export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // www → non-www 리다이렉트 (iljaller.kr 통일)
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
