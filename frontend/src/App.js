import React from "react";
import "./App.css";
import EmbeddableProductCard from "./components/EmbeddableProductCard/EmbeddableProductCard";

/**
 * Product Card - Main Application
 * 
 * This app has been optimized to serve as an embeddable product card component
 * that can be integrated into external websites seamlessly.
 * 
 * Features:
 * - Arabic RTL support with premium typography
 * - 12+ payment card types with authentic branding
 * - Fully responsive design (mobile/tablet/desktop)
 * - Self-contained component (no external dependencies)
 * - Professional animations and interactions
 * - Payment method callback integration
 * - Theme customization (light/dark)
 * - Accessibility compliance (ARIA labels, keyboard navigation)
 */

function App() {
  // Payment method selection handler
  const handlePaymentMethodClick = (method) => {
    console.log('🎯 Payment method selected:', method);
    
    // This is where you would integrate with your payment processing system
    // Example integrations:
    switch (method.id) {
      case 'visa':
        console.log('Processing Visa card payment...');
        break;
      case 'mastercard':
        console.log('Processing Mastercard payment...');
        break;
      case 'googleplay':
        console.log('Processing Google Play card...');
        break;
      default:
        console.log(`Processing ${method.name} payment...`);
    }
    
    // Show selection to user (you can replace this with your own UI)
    alert(`تم اختيار: ${method.name}\nSelected: ${method.name}`);
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* Main Product Card - Centered and Optimized for Embedding */}
        <div className="card-container">
          <EmbeddableProductCard 
            // Size and appearance
            width="280px"
            theme="light"
            backgroundColor="white"
            borderRadius="1rem"
            shadow="default"
            
            // Content (Arabic by default, as per original design)
            cardTitle="بطائق إلكترونية مسبقة الدفع"
            cardSubtitle="بطاقة دفع رقمية جاهزة للاستخدام الفوري"
            rating="(29,062)"
            language="ar"
            
            // Features enabled (all features as per original design)
            showVideo={true}
            showPromoItems={true}
            showFavoriteButton={true}
            showToggleButton={true}
            
            // Payment integration
            onPaymentMethodClick={handlePaymentMethodClick}
            
            // Additional styling for embedding optimization
            className="main-product-card"
          />
        </div>
        
        {/* Integration Notice */}
        <div style={{ 
          marginTop: '40px', 
          textAlign: 'center', 
          color: 'rgba(255,255,255,0.9)',
          direction: 'rtl',
          maxWidth: '600px',
          margin: '40px auto 0'
        }}>
          <div style={{ 
            padding: '24px', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '16px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h3 style={{ 
              color: '#ffd426', 
              marginBottom: '16px',
              fontSize: '1.2rem',
              fontWeight: '800'
            }}>
              🎯 مكون قابل للتضمين
            </h3>
            <p style={{ 
              fontSize: '14px', 
              lineHeight: '1.6',
              marginBottom: '16px',
              opacity: '0.95'
            }}>
              هذا الكرت محسن للتضمين في المواقع الخارجية مع دعم كامل للعربية و 12+ نوع بطاقة دفع
            </p>
            <div style={{
              background: 'rgba(0,0,0,0.2)',
              padding: '12px',
              borderRadius: '8px',
              fontFamily: 'monospace',
              fontSize: '12px',
              color: '#e2e8f0',
              textAlign: 'left',
              direction: 'ltr'
            }}>
              {`<EmbeddableProductCard 
  width="280px" 
  theme="light" 
  language="ar"
  onPaymentMethodClick={handlePayment}
/>`}
            </div>
          </div>
        </div>
        
        {/* Technical Info */}
        <div style={{ 
          marginTop: '24px', 
          textAlign: 'center', 
          color: 'rgba(255,255,255,0.7)',
          fontSize: '12px'
        }}>
          <p>
            📁 Embeddable files ready in <code>/dist/</code> folder<br/>
            📖 Integration guide: <code>DEPLOYMENT_GUIDE.md</code>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

export default App;