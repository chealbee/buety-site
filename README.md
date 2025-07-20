This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Контент сайту Black Li Beauty Salon

Весь текстовий та інформаційний контент сайту зручно винесено у окремі JSON-файли для кожного основного блоку. Це дозволяє легко змінювати тексти, ціни, контакти, адреси, списки послуг, тощо — без редагування коду компонентів.

## Як змінити контент на сайті

1. **Знайдіть потрібний JSON-файл**

   - Всі файли з контентом знаходяться у папці `src/components/main page/[назва_блоку]/[назва_файлу].json`.
   - Наприклад:
     - Головний блок: `mainSectionData.json`
     - Про нас: `aboutData.json`
     - Ціни: `pricesData.json`
     - Контакти: `contactsData.json`
     - Роботи: `worksData.json`
     - Хедер: `headerData.json`

2. **Відкрийте файл у редакторі**

   - Відкрийте потрібний JSON-файл у VS Code або іншому редакторі.

3. **Змініть текст, посилання, ціни, адреси тощо**

   - Знайдіть потрібне поле (наприклад, `title`, `description`, `address`, `prices`, `contacts`, `services`, тощо).
   - Відредагуйте значення. Можна змінювати текст, додавати/видаляти елементи списків, змінювати посилання, телефони, адреси.
   - **Приклад:**
     ```json
     {
       "title": "Black Li Beauty Salon — Перманентний макіяж Київ та Вінниця",
       "description": "Салон краси Black Li Beauty..."
     }
     ```

4. **Збережіть файл**

   - Після змін збережіть файл. Сайт автоматично оновить контент (якщо працює у dev-режимі).

5. **Перевірте результат**
   - Оновіть сторінку сайту, щоб побачити зміни.

## Додатково

- Для SEO-мета-тегів, Open Graph, Twitter, favicon — змінюйте відповідні поля у `src/app/layout.tsx`.
- Для стилів — редагуйте SCSS-файли у відповідних папках.
- Для зображень — замінюйте файли у папці `public/`.

---

**Переваги:**

- Весь контент легко редагується без знань коду.
- Можна швидко оновити ціни, адреси, тексти, контакти, роботи тощо.
- Зручно для адміністраторів та контент-менеджерів.
