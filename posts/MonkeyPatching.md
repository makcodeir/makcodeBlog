---
title: مانکی پچینگ
author: makcodeir
date: 2026-05-31
---


گاهی اوقات یک تابعی داریم و می خوایم ببینیم دقیقا چیکار میکنه و چه رفتاری داره.

خب کار های زیادی هست تا به رفتارش پی ببریم ، مثلا یکیش این هست که جریان برنامه رو trace کنیم و ببینیم رفتار این تابع چی هست ، یا یک جا صداش بزنیم ولی گاهی اوقات این تابع مستقیم از ما چیزی دریافت نمیکنه مثلا کتابخانه ریکوئست پایتون یک معماری نسبتا پیچیده داره و ما اگر بخوایم یک تابعی که ورودی و خروجی توابع دیگه است رو به تنهایی استفاده کنیم به شدت به مشکل میخوریم چون اصلا ذات برناممون یک جور دیگست (داخل پایتون ما باید ریکوئستی ارسال کنیم تا توابع مربوط به پروکسی استفاده بشن) و میشه به راحتی فهمید که trace کردن جریان برنامه هم توی یک سیستم بزرگ ممکنه کمی سخت و زمان بر باشه(توی ریکوئست پایتون امتحان کردم و فاجعه بود) روشی که استفاده میشه این هست که یک تابع داشته باشیم که دقیقا مثل تابع اصلی رفتار کنه ولی بعضی کد های مربوط به ما مثلا آرگومنت های ورودی رو چاپ کنه یا وضعیت خاصی رو اعلام کنه بدون اینکه به منطق برنامه آسیبی وارد بشه!

:::info
 کار کرد اصلی مانکی پجینگ ، mocking هست ، چون من اولین بار برای بررسی توابع کتابخانه ریکوئست باهاش مواجه شدم ، کاربرد لاگ گرفتن از تابع بیشتر برام تداعی شد!
:::
یک مثال خیلی ساده ازش ببینیم :

```js
function sum(a , b){
	return a + b
}
const realSum = sum;

sum = function(...args){

	console.log("args : " , args);
	return realSum(...args);
};

console.log(sum(5 , 10));


```
<div dir="rtl" style="text-align: center; margin: 20px 0;"> <!-- Button using JavaScript to force hard navigation --> <button onclick="window.location.assign('/makcodeBlog/editor/index.html?item=MonkeyPatching-firstExample');" style="display: inline-block; padding: 10px 20px; background-color: blue; color: white; border-radius: 4px; border: none; font-weight: bold; cursor: pointer; font-size: inherit; font-family: inherit;"> کد رو اجرا کن !! </button> </div>


## کاربرد های اصلی مانکی پجینگ به شرح ز یر هست :
### mocking:
تغییر داده در وسط برنامه ، مثلا api  یا داده ای که در نهایت قرار هست به سروری ارسال بشه.


### پچ کردن برنامه:
 
یک وقتایی کدی داری یک باگی داره و تو نمیتونی منتظر سورس اصلی بمونی پس مثل میری توی سورسش و با کمک این تکنیک پج میکنی این مشکل رو !
<div style="width:min(720px,92vw);margin:40px auto;padding:28px 24px 78px;border-radius:18px;background:rgba(190,255,210,0.12);border:1px solid rgba(190,255,210,0.28);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 10px 30px rgba(0,0,0,0.18);position:relative;color:#f4fff6;direction:rtl;font-family:inherit;"> <div style="font-size:20px;font-weight:800;margin-bottom:12px;">چالش :</div> <div style="font-size:15px;line-height:1.9;color:#effff1;">یک قطعه کدی هست که یک آبجکت <b>sum</b> داره که یک رفتار اشتباه داره ، پرتاب میمون های فضایی به جو کره زمین بخاطر این قطعه کد داره کنسل میشه ، اگر میخوام که میمون ها به فضا برن باید این قطعه کد رو درست کنی ، برای حل این سوال روی دکمه زیر کلیک کن</div> <button onclick="window.open('/makcodeBlog/editor/index.html?item=SpaceShip','_blank','noopener,noreferrer')"style="position:absolute;left:50%;bottom:18px;transform:translateX(-50%);padding:12px 22px;border-radius:12px;background:rgba(170,255,190,0.22);border:1px solid rgba(210,255,220,0.35);color:#ffffff;font-weight:700;cursor:pointer;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 4px 14px rgba(120,220,150,0.18);">برای حل سوال کلیک کن</button> </div>


:::warning
بهتره این ها رو توی تست های استفاده کنیم ، چون رفتار تابع رو تغییر میدن و قطعا توی یک سیستم بزرگ کار خیلی جالبی نیست !!
:::