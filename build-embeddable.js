#!/usr/bin/env node

/**
 * Build script for creating embeddable product card
 * This script creates a standalone build that can be embedded in any website
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Building Embeddable Product Card...');

// Read the main embeddable component
const embeddableCode = fs.readFileSync(
  path.join(__dirname, 'frontend/src/components/EmbeddableProductCard/EmbeddableProductCard.js'), 
  'utf8'
);

// Read the package.json for the embeddable component
const embeddablePackage = fs.readFileSync(
  path.join(__dirname, 'frontend/src/components/EmbeddableProductCard/package.json'), 
  'utf8'
);

// Read the README
const readme = fs.readFileSync(
  path.join(__dirname, 'frontend/src/components/EmbeddableProductCard/README.md'), 
  'utf8'
);

// Create dist directory
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy embeddable component files
fs.writeFileSync(path.join(distDir, 'EmbeddableProductCard.js'), embeddableCode);
fs.writeFileSync(path.join(distDir, 'package.json'), embeddablePackage);
fs.writeFileSync(path.join(distDir, 'README.md'), readme);

// Copy index file
const indexCode = fs.readFileSync(
  path.join(__dirname, 'frontend/src/components/EmbeddableProductCard/index.js'), 
  'utf8'
);
fs.writeFileSync(path.join(distDir, 'index.js'), indexCode);

// Create embedding guide
const embeddingGuide = `
# 🎯 Product Card - Embedding Guide

## Quick Integration

### 1. React Projects
\`\`\`bash
# Copy the dist folder to your project
cp -r dist/ ./src/components/ProductCard/
\`\`\`

\`\`\`jsx
import { EmbeddableProductCard } from './components/ProductCard';

function App() {
  return (
    <div>
      <EmbeddableProductCard 
        width="280px"
        theme="light"
        language="ar"
        onPaymentMethodClick={(method) => {
          console.log('Selected payment method:', method);
          // Handle payment integration here
        }}
      />
    </div>
  );
}
\`\`\`

### 2. Next.js Integration
\`\`\`jsx
import dynamic from 'next/dynamic';

const ProductCard = dynamic(
  () => import('./components/ProductCard'),
  { ssr: false }
);

export default function HomePage() {
  return (
    <div>
      <h1>Our Digital Cards</h1>
      <ProductCard width="300px" theme="light" />
    </div>
  );
}
\`\`\`

### 3. WordPress/HTML Integration
\`\`\`html
<!-- Include React and styled-components -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
<script crossorigin src="https://unpkg.com/styled-components@5/dist/styled-components.min.js"></script>

<!-- Your card container -->
<div id="product-card-container"></div>

<!-- Include the compiled component (you'll need to build this) -->
<script src="./dist/embeddable-card.min.js"></script>
<script>
  // Initialize the card
  ProductCard.render({
    width: '280px',
    theme: 'light',
    language: 'ar'
  }, document.getElementById('product-card-container'));
</script>
\`\`\`

## Customization Options

### Size Variants
\`\`\`jsx
// Small card
<EmbeddableProductCard width="200px" />

// Medium card (default)
<EmbeddableProductCard width="240px" />

// Large card
<EmbeddableProductCard width="320px" />
\`\`\`

### Theme Variants
\`\`\`jsx
// Light theme
<EmbeddableProductCard theme="light" />

// Dark theme
<EmbeddableProductCard theme="dark" backgroundColor="#1f2937" />
\`\`\`

### Language Support
\`\`\`jsx
// Arabic (default)
<EmbeddableProductCard language="ar" />

// English
<EmbeddableProductCard 
  language="en" 
  cardTitle="Digital Payment Cards"
  cardSubtitle="Instant delivery worldwide"
/>
\`\`\`

### Minimal Integration
\`\`\`jsx
<EmbeddableProductCard 
  width="240px"
  showVideo={false}
  showPromoItems={false}
  showToggleButton={false}
  shadow="subtle"
/>
\`\`\`

## Payment Integration

\`\`\`jsx
const handlePaymentSelection = (paymentMethod) => {
  console.log('Payment method:', paymentMethod);
  
  // Integrate with your payment processor
  switch(paymentMethod.id) {
    case 'visa':
      // Handle Visa card purchase
      break;
    case 'googleplay':
      // Handle Google Play card purchase
      break;
    // ... other payment methods
  }
};

<EmbeddableProductCard 
  onPaymentMethodClick={handlePaymentSelection}
/>
\`\`\`

## Technical Requirements

- React 16.8+ (uses hooks)
- styled-components 5.0+
- Modern browser with ES6 support

## File Structure
\`\`\`
dist/
├── index.js                 # Main export
├── EmbeddableProductCard.js # Core component
├── package.json            # Component package info
└── README.md              # Component documentation
\`\`\`

## Support

This component is production-ready and optimized for embedding across different platforms and websites.
`;

fs.writeFileSync(path.join(distDir, 'EMBEDDING_GUIDE.md'), embeddingGuide);

// Create a demo HTML file
const demoHTML = `
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Card - Embedding Demo</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            margin: 0;
            padding: 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        
        .demo-container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            text-align: center;
            max-width: 500px;
        }
        
        .demo-title {
            color: #1f2937;
            font-size: 1.8rem;
            font-weight: 800;
            margin-bottom: 1rem;
        }
        
        .demo-subtitle {
            color: #6b7280;
            font-size: 1rem;
            margin-bottom: 2rem;
            line-height: 1.6;
        }
        
        .card-wrapper {
            display: flex;
            justify-content: center;
            margin: 2rem 0;
        }
        
        .integration-note {
            background: #f3f4f6;
            padding: 20px;
            border-radius: 12px;
            font-size: 0.9rem;
            color: #374151;
            margin-top: 2rem;
            text-align: right;
            direction: rtl;
        }
    </style>
</head>
<body>
    <div class="demo-container">
        <h1 class="demo-title">🎯 Product Card Demo</h1>
        <p class="demo-subtitle">
            هذا مثال على كيفية تضمين كرت المنتج في أي موقع ويب
        </p>
        
        <div class="card-wrapper">
            <!-- The React component would be rendered here -->
            <div style="
                width: 240px;
                height: 400px;
                background: #f9fafb;
                border-radius: 1rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px dashed #d1d5db;
                color: #6b7280;
                text-align: center;
                font-size: 14px;
                line-height: 1.5;
            ">
                Product Card Component<br>
                <small>يتم تحميله عبر React</small>
            </div>
        </div>
        
        <div class="integration-note">
            <strong>للمطورين:</strong><br>
            استخدم الملفات في مجلد <code>dist/</code> لتضمين هذا المكون في مشروعك.
            راجع <code>EMBEDDING_GUIDE.md</code> للتعليمات التفصيلية.
        </div>
    </div>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'demo.html'), demoHTML);

console.log('✅ Embeddable Product Card built successfully!');
console.log('📁 Files created in ./dist/:');
console.log('   - index.js (main export)');
console.log('   - EmbeddableProductCard.js (core component)');
console.log('   - package.json (component info)');
console.log('   - README.md (documentation)');
console.log('   - EMBEDDING_GUIDE.md (integration guide)');
console.log('   - demo.html (demo page)');
console.log('');
console.log('🚀 Ready for embedding in external websites!');