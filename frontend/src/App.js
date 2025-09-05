import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import CardShowcase from "./components/CardShowcase";
import StandaloneDemo from "./components/StandaloneDemo";
import EmbeddableProductCard from "./components/EmbeddableProductCard/EmbeddableProductCard";
import ProductCardDemo from "./components/EmbeddableProductCard/ProductCardDemo";
import ProductCardShowcase from "./components/EmbeddableProductCard/ProductCardShowcase";

function App() {
  // Show different views based on URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const view = urlParams.get('view');
  
  // New embeddable component views
  if (view === 'embeddable') {
    return <ProductCardDemo />;
  }
  
  if (view === 'embeddable-showcase') {
    return <ProductCardShowcase />;
  }
  
  if (view === 'embeddable-simple') {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <EmbeddableProductCard 
          onPaymentMethodClick={(method) => {
            console.log('Payment method selected:', method);
            alert(`Selected: ${method.name}`);
          }}
        />
      </div>
    );
  }
  
  // Original views
  if (view === 'showcase') {
    return <CardShowcase />;
  }
  
  if (view === 'standalone') {
    return <StandaloneDemo />;
  }

  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">متجر المنتجات</h1>
        <div className="card-container">
          <ProductCard />
        </div>
        
        <div style={{ 
          marginTop: '40px', 
          textAlign: 'center', 
          color: '#666',
          direction: 'ltr'
        }}>
          <h2 style={{ marginBottom: '20px' }}>🎨 Available Views</h2>
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '10px', 
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <a href="?" style={{ 
              padding: '8px 16px', 
              background: '#667eea', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              Main App
            </a>
            <a href="?view=showcase" style={{ 
              padding: '8px 16px', 
              background: '#667eea', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              Card Showcase
            </a>
            <a href="?view=standalone" style={{ 
              padding: '8px 16px', 
              background: '#667eea', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              Standalone Demo
            </a>
            <a href="?view=embeddable" style={{ 
              padding: '8px 16px', 
              background: '#e74c3c', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              🎯 Embeddable Demo
            </a>
            <a href="?view=embeddable-showcase" style={{ 
              padding: '8px 16px', 
              background: '#e74c3c', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              🎯 Card Designs
            </a>
            <a href="?view=embeddable-simple" style={{ 
              padding: '8px 16px', 
              background: '#27ae60', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '20px',
              fontSize: '14px'
            }}>
              ✨ Simple Card
            </a>
          </div>
          
          <div style={{ 
            marginTop: '30px', 
            padding: '20px', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: '15px',
            maxWidth: '600px',
            margin: '30px auto 0'
          }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>🚀 New: Embeddable Product Card</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              The new embeddable component is a standalone, fully responsive card that can be integrated 
              into any website. It features extensive customization options, theme support, and 
              maintains all the beautiful design elements while being completely self-contained.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;