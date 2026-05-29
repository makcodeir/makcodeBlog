---
title: Home
---

<div class="mk-home" dir="rtl">

<section class="mk-hero">
<p class="mk-kicker">وبلاگ شخصی</p>
<h1 class="mk-title">makcodeir</h1>
<p class="mk-subtitle">سعی میکنم تجربه از فریمورک های مختلف رو اینجا قرار بدم ، پست ها رو در بخش زیر میتونید مشاهده کنید</p>
<div class="mk-actions">
<a class="mk-btn mk-btn-primary" href="./posts/">مشاهده پست‌ها</a>

</div>
</section>

<section class="mk-section">
<div class="mk-section-head">
<h2 class="mk-h2">پست‌ها</h2>
<p class="mk-muted">آخرین نوشته‌ها و تجربه‌ها</p>
</div>
<a class="mk-post-card" href="./posts/">
<div class="mk-post-icon" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none">
<path d="M8 7h8M8 11h8M8 15h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
<path d="M7 3h7l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
<path d="M14 3v4h4" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
</svg>
</div>
<div class="mk-post-body">
<p class="mk-post-title">چرا وبلاگ انسانی هنوز مهمه؟</p>
<!-- Added line breaks and removed formatting to ensure proper text wrapping -->
<p class="mk-post-text">مدت کوتاهی هست که از اومدن هوش مصنوعی میگذره و عملا بررسی وبلاگ خیلی وقت تلف کنی به نظر میاد ولی به زودی محصولات هوش مصنوعی اشباع میشن و جامعه به شدت نیازمند محتوای تولید انسانی میشه. محتوایی که روح دارن و صرفا چند تا راه حلی که قبلا مدل زبانی توی استک اور فلو روشون train شده نیستن!</p>
</div>
<div class="mk-post-cta" aria-hidden="true">
<span>→</span>
</div>
</a>
</section>

</div>

<style>
/* Layout */
.mk-home {
  max-width: 980px;
  margin: 0 auto;
  padding: 56px 20px 72px;
  font-family: inherit;
}

.mk-hero {
  text-align: center;
  padding: 48px 22px;
  border-radius: 26px;
  background:
    radial-gradient(900px 300px at 50% -40%, rgba(56,189,248,.15), transparent 60%),
    radial-gradient(700px 260px at 20% 0%, rgba(99,102,241,.15), transparent 60%),
    linear-gradient(180deg, rgba(15,23,42,.72), rgba(15,23,42,.45));
  border: 1px solid rgba(148,163,184,.15);
  box-shadow: 0 28px 90px rgba(0,0,0,.3);
  backdrop-filter: blur(10px);
}

.mk-kicker {
  margin: 0 0 10px;
  font-size: 1rem;
  color: rgba(226,232,240,.78);
  letter-spacing: .2px;
}

.mk-title {
  margin: 0 0 14px;
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  line-height: 1.1;
  color: #fff;
  font-weight: 800;
}

.mk-subtitle {
  margin: 0 auto 28px;
  max-width: 62ch;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(226,232,240,.86);
}

.mk-actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Buttons */
.mk-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 12px;
  text-decoration: none !important;
  font-weight: 600;
  font-size: 1rem;
  transition: all .2s ease;
  user-select: none;
}

/* Updated button colors for better UI */
.mk-btn-primary {
  color: #fff;
  background: linear-gradient(135deg, #6366f1, #3b82f6);
  box-shadow: 0 8px 24px rgba(99,102,241,.25);
  border: none;
}

.mk-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(99,102,241,.35);
}

.mk-btn-ghost {
  color: #f8fafc;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
}

.mk-btn-ghost:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,.1);
  border-color: rgba(255,255,255,.2);
}

/* Section */
.mk-section {
  margin-top: 48px;
}

.mk-section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin: 0 8px 20px;
}

.mk-h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}

.mk-muted {
  margin: 0;
  font-size: 1rem;
  color: rgba(148,163,184,.85);
}

/* Post card */
.mk-post-card {
  display: grid;
  grid-template-columns: 56px 1fr 24px;
  gap: 20px;
  align-items: start;
  padding: 24px;
  border-radius: 16px;
  text-decoration: none !important;
  background: linear-gradient(180deg, rgba(30,41,59,.6), rgba(15,23,42,.5));
  border: 1px solid rgba(148,163,184,.15);
  transition: all .2s ease;
}

.mk-post-card:hover {
  transform: translateY(-3px);
  border-color: rgba(99,102,241,.4);
  background: linear-gradient(180deg, rgba(30,41,59,.8), rgba(15,23,42,.7));
}

.mk-post-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #fff;
  background: rgba(99,102,241,.15);
  border: 1px solid rgba(99,102,241,.2);
}

.mk-post-icon svg {
  width: 26px;
  height: 26px;
}

.mk-post-body {
  min-width: 0;
  overflow: hidden;
}

.mk-post-title {
  margin: 0 0 10px;
  font-size: 1.2rem;
  font-weight: 700;
  color: #f8fafc;
}

/* Fixed text wrapping and readability */
.mk-post-text {
  margin: 0;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(226,232,240,.75);
  white-space: normal;
  word-wrap: break-word;
  display: block;
}

.mk-post-cta {
  margin-top: 4px;
  color: rgba(148,163,184,.6);
  font-weight: 900;
  font-size: 1.2rem;
  transition: color 0.2s ease;
}

.mk-post-card:hover .mk-post-cta {
  color: #6366f1;
}
</style>
