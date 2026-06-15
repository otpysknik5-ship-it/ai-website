import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://aimihome.ru',
  output: 'static',
  integrations: [tailwind(), mdx()],
  redirects: {
    '/article-1.html': '/blog/glaz-ii-kak-eto-rabotaet/',
    '/article-2.html': '/blog/article-2/',
    '/article-3.html': '/blog/article-3/',
    '/article-4.html': '/blog/article-4/',
    '/article-5.html': '/blog/article-5/',
    '/article-6.html': '/blog/article-6/',
    '/article-7.html': '/blog/article-7/',
    '/article-8.html': '/blog/article-8/',
    '/article-9.html': '/blog/article-9/',
    '/article-10.html': '/blog/article-10/',
    '/article-11.html': '/blog/article-11/',
    '/article-12.html': '/blog/article-12/',
    '/article-13.html': '/blog/article-13/',
    '/article-14.html': '/blog/article-14/',
    '/article-15.html': '/blog/article-15/',
    '/article-16.html': '/blog/article-16/',
    '/article-17.html': '/blog/article-17/',
    '/article-18.html': '/blog/article-18/',
    '/article-19.html': '/blog/article-19/',
    '/article-20.html': '/blog/article-20/',
    '/article-21.html': '/blog/article-21/',
    '/main-article.html': '/blog/main-article/',
  }
});