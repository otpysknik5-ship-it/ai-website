# АЙ ВЕБ ДОМ — Astro версия

Сайт блога о нейросетях и заработке, перенесённый на Astro.

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск локального сервера
npm run dev

# Сборка для продакшена
npm run build
```

## 📁 Структура

- `src/content/blog/` — статьи в Markdown
- `src/components/` — переиспользуемые компоненты
- `src/layouts/` — шаблоны страниц
- `src/pages/` — страницы сайта
- `public/` — статичные файлы (картинки, видео, favicon)

## 📝 Добавление статьи

1. Создай файл `src/content/blog/название-статьи.md`
2. Добавь frontmatter:
```yaml
---
title: "Заголовок"
description: "Описание"
date: "2024-06-15"
image: "/путь-к-картинке.jpg"
tags: ["тег1", "тег2"]
---
```
3. Напиши контент в Markdown
4. Закоммить — сайт автоматически пересоберётся

## 🔄 Перенос оставшихся статей

В `src/content/blog/` есть placeholder-файлы `article-2.md` — `article-21.md`.
Для каждого:
1. Открой оригинальный `article-N.html` из старого репозитория
2. Скопируй текст из `<main>` или `<article>`
3. Вставь в Markdown-файл вместо placeholder-текста
4. Убери `draft: true` из frontmatter
5. Обнови title, description, date, image, tags

## 🌐 Деплой

Автоматический деплой на GitHub Pages при пуше в ветку `main`.

Домен: `aimihome.ru` (настроен через CNAME в Cloudflare)