import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";

/**
 * Product Card - Main Application
 * 
 * This app has been optimized to serve as an embeddable product card component
 * that can be integrated into external websites seamlessly.
 * 
 * The app now shows the original ProductCard component with its beautiful
 * gray header design preserved exactly as it was.
 */

function App() {
  // Payment method selection handler
  const handlePaymentMethodClick = (method) => {
    console.log('🎯 Payment method selected:', method);
    
    // Show selection to user
    alert(`تم اختيار: ${method.name}\nSelected: ${method.name}`);
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* Main Product Card - Using original ProductCard with gray header design */}
        <div className="card-container">
          <ProductCard />
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
              هذا الكرت محسن للتضمين في المواقع الخارجية مع المحافظة على التصميم الرمادي الأصلي في الرأس
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
              {`<ProductCard />
// أو للتخصيص المتقدم:
<EmbeddableProductCard 
  width="280px" 
  theme="light" 
  language="ar"
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
            📖 Integration guide: <code>DEPLOYMENT_GUIDE.md</code><br/>
            ✅ التصميم الرمادي الأصلي في الرأس محفوظ تماماً
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

export default App;