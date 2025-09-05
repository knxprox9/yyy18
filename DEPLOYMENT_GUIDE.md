# 🚀 Product Card - دليل النشر والتضمين

## 📋 نظرة عامة

هذا المشروع تم تحويله إلى **مكون كرت مستقل** قابل للتضمين في أي موقع ويب. المكون محسن للاستخدام الخارجي ويتضمن جميع الميزات المطلوبة.

## 🎯 المكون الرئيسي

**`EmbeddableProductCard`** - المكون المحسن للتضمين مع:

- ✅ **12+ نوع بطاقة دفع** مع تصاميم professional
- ✅ **دعم كامل للعربية** مع RTL والخطوط المحسنة  
- ✅ **تصميم متجاوب** للجوال والحاسوب
- ✅ **Self-contained** (لا يحتاج external dependencies)
- ✅ **Global Styles** للتوافق عبر المواقع
- ✅ **Theme system** (فاتح/داكن)
- ✅ **Payment callbacks** للتكامل مع أنظمة الدفع
- ✅ **Accessibility** كامل مع ARIA labels

## 📁 بنية الملفات

```
/app/
├── dist/                           # ملفات التوزيع الجاهزة
│   ├── index.js                    # التصدير الرئيسي
│   ├── EmbeddableProductCard.js    # المكون الأساسي
│   ├── package.json               # معلومات الحزمة
│   ├── README.md                  # التوثيق
│   ├── EMBEDDING_GUIDE.md         # دليل التضمين
│   └── demo.html                  # صفحة العرض
├── frontend/src/components/EmbeddableProductCard/  # المصدر
└── embedding-config.json          # إعدادات التضمين
```

## 🛠️ التهيئة والاستخدام

### 1. Build للتضمين
```bash
# تشغيل script البناء
node build-embeddable.js

# أو استخدام yarn/npm
yarn build:embeddable
npm run build:embeddable
```

### 2. React Integration
```jsx
import { EmbeddableProductCard } from './dist';

function App() {
  const handlePaymentClick = (method) => {
    console.log('Payment method:', method);
    // دمج مع نظام الدفع هنا
  };

  return (
    <EmbeddableProductCard 
      width="280px"
      theme="light"
      language="ar"  
      onPaymentMethodClick={handlePaymentClick}
      cardTitle="بطائق إلكترونية مسبقة الدفع"
      cardSubtitle="بطاقة دفع رقمية جاهزة للاستخدام الفوري"
      showVideo={true}
      showToggleButton={true}
    />
  );
}
```

### 3. Next.js Integration
```jsx
import dynamic from 'next/dynamic';

const ProductCard = dynamic(
  () => import('./components/ProductCard/dist'),
  { ssr: false }
);

export default function ProductPage() {
  return (
    <div>
      <h1>منتجاتنا الرقمية</h1>
      <ProductCard width="300px" theme="light" />
    </div>
  );
}
```

### 4. WordPress/HTML Integration
```html
<!-- تضمين React و styled-components -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script crossorigin src="https://unpkg.com/styled-components@5/dist/styled-components.min.js"></script>

<!-- حاوي الكرت -->
<div id="product-card"></div>

<!-- تضمين المكون -->
<script src="./dist/embeddable-card.min.js"></script>
<script>
  ProductCard.render({
    width: '280px',
    theme: 'light',
    language: 'ar'
  }, document.getElementById('product-card'));
</script>
```

## 🎨 خيارات التخصيص

### الأحجام
```jsx
<EmbeddableProductCard width="200px" />  // صغير
<EmbeddableProductCard width="240px" />  // متوسط (افتراضي)
<EmbeddableProductCard width="320px" />  // كبير
```

### الثيمات
```jsx
<EmbeddableProductCard theme="light" />  // فاتح
<EmbeddableProductCard theme="dark" backgroundColor="#1f2937" />  // داكن
```

### اللغات
```jsx
<EmbeddableProductCard language="ar" />  // عربي (افتراضي)
<EmbeddableProductCard language="en" cardTitle="Payment Cards" />  // إنجليزي
```

### الميزات
```jsx
<EmbeddableProductCard 
  showVideo={false}          // إخفاء الفيديو
  showPromoItems={false}     // إخفاء العناصر الترويجية
  showToggleButton={false}   // إخفاء زر التبديل
  showFavoriteButton={false} // إخفاء زر المفضلة
  shadow="subtle"           // ظل خفيف
/>
```

## 💳 تكامل أنظمة الدفع

```jsx
const handlePaymentMethod = (method) => {
  console.log('تم اختيار:', method);
  
  switch(method.id) {
    case 'visa':
      // معالجة بطاقة فيزا
      processVisaPayment(method);
      break;
    case 'googleplay':
      // معالجة بطاقة جوجل بلاي
      processGooglePlayPayment(method);
      break;
    case 'mastercard':
      // معالجة ماستركارد
      processMastercardPayment(method);
      break;
    // ... باقي وسائل الدفع
  }
};

<EmbeddableProductCard 
  onPaymentMethodClick={handlePaymentMethod}
/>
```

## 🔧 المتطلبات التقنية

- React 16.8+ (يستخدم hooks)
- styled-components 5.0+
- متصفح حديث مع دعم ES6
- (اختياري) react-dom للتشغيل

## 📱 الاستجابة (Responsive)

المكون محسن للجميع الشاشات:
- **Desktop**: العرض الكامل مع جميع الميزات
- **Tablet (≤768px)**: حجم مناسب مع المحافظة على النسب
- **Mobile (≤480px)**: حجم مضغوط مع تحسين المسافات

## ♿ إمكانية الوصول

- ARIA labels لقارئات الشاشة
- دعم navigation بلوحة المفاتيح  
- نسب تباين عالية في كلا الثيمين
- بنية HTML دلالية صحيحة
- إدارة focus للتفاعلات

## 🚀 النشر والتوزيع

### للمطورين:
1. انسخ مجلد `dist/` إلى مشروعك
2. استورد المكون واستخدمه
3. راجع `EMBEDDING_GUIDE.md` للتفاصيل

### للعملاء:
1. استخدم الـ build الجاهز
2. اتبع أمثلة التكامل
3. خصص حسب احتياجاتك

## 📞 الدعم

هذا المكون جاهز للإنتاج ومحسن للتضمين عبر منصات ومواقع مختلفة.

---

**✨ تم التحسين بواسطة فريق التطوير لضمان أفضل تجربة تضمين ممكنة**