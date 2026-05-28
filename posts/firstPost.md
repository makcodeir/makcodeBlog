---
title: اولین تجربه من با VitePress
description: یادگیری ساخت وبلاگ استاتیک
date: 2024-05-28
author: ابوالفضل
---

# سلام دنیا!

این اولین پست من است که با **VitePress** منتشر شده است. 

### چرا VitePress؟
1. **سرعت بی‌نظیر**: به لطف Vite، عملیات HMR بسیار سریع است.
2. **Markdown Extensions**: می‌توانیم از کامپوننت‌های Vue مستقیماً در مارک‌داون استفاده کنیم!
3. **SEO Friendly**: خروجی کاملاً استاتیک و بهینه است.
```vue
<script setup>
// You can even write Vue code inside Markdown!
const clickMe = () => alert('Hello Aboulfazl!')
</script>

<button @click="clickMe" style="color: var(--vp-c-brand);">Click Me!</button>
```
