const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://iljaller.pages.dev/</loc><lastmod>2026-03-22</lastmod><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>https://iljaller.pages.dev/about.html</loc><lastmod>2026-03-22</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/privacy.html</loc><lastmod>2026-03-13</lastmod><changefreq>yearly</changefreq><priority>0.3</priority></url>
  <url><loc>https://iljaller.pages.dev/post-gpt5.html</loc><lastmod>2026-03-22</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://iljaller.pages.dev/post-claude-thinking.html</loc><lastmod>2026-03-22</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://iljaller.pages.dev/post-vibe-compare.html</loc><lastmod>2026-03-22</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://iljaller.pages.dev/post-chatgpt.html</loc><lastmod>2025-03-10</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://iljaller.pages.dev/post-gemini.html</loc><lastmod>2025-03-11</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://iljaller.pages.dev/post-claude.html</loc><lastmod>2025-03-12</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://iljaller.pages.dev/post-ai-compare.html</loc><lastmod>2026-03-13</lastmod><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://iljaller.pages.dev/post-ai-image.html</loc><lastmod>2025-03-05</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-vibecoding.html</loc><lastmod>2026-03-13</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-ryuton-vs-claude.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-apps.html</loc><lastmod>2025-03-09</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-google-calendar.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-excel-vs-gsheet.html</loc><lastmod>2026-03-16</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-free-tools.html</loc><lastmod>2025-02-25</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-google-search.html</loc><lastmod>2025-03-07</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-naver-tips.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-shortcuts.html</loc><lastmod>2025-03-01</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-phone-storage.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-camera-tips.html</loc><lastmod>2026-03-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-desk-ergonomics.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-telecom-save.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://iljaller.pages.dev/post-ott-free.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-card-points.html</loc><lastmod>2026-03-16</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-tax.html</loc><lastmod>2025-02-28</lastmod><changefreq>yearly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-fuel-tax.html</loc><lastmod>2026-03-13</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-electricity.html</loc><lastmod>2026-03-13</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-rent.html</loc><lastmod>2025-03-03</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-health-insurance.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://iljaller.pages.dev/post-energy-checklist.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://iljaller.pages.dev/post-heater-clean.html</loc><lastmod>2026-03-14</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>
</urlset>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/sitemap.xml') {
      return new Response(SITEMAP, {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
          'Cache-Control': 'no-transform, public, max-age=3600',
          'X-Content-Type-Options': 'nosniff',
        },
      });
    }

    // 나머지 모든 요청은 정적 파일로 전달
    return env.ASSETS.fetch(request);
  },
};
