import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiTruck, FiShield, FiGift, FiX, FiCreditCard } from 'react-icons/fi';
import ToggleButton from './ToggleButton';
import TransparentIconVideo from './TransparentIconVideo';

const ProductCard = () => {
  const [miniOpen, setMiniOpen] = useState(false);

  useEffect(() => {
    try { console.log('ProductCard: miniOpen', miniOpen); } catch {}
  }, [miniOpen]);

  return (
    <StyledWrapper data-open={miniOpen}>
      <div className="card">
        {/* Full-screen dim background when mini overlay is open */}
        {miniOpen && <div className="screen-dim" onClick={() => setMiniOpen(false)} aria-hidden="true" />}

        {/* Floating mini page overlay (same size as the card) */}
        {miniOpen && (
          <div className="mini-overlay" role="dialog" aria-modal="true" aria-label="صفحة مصغرة">
            <button className="close-btn" onClick={() => setMiniOpen(false)} aria-label="إغلاق">
              <FiX size={16} />
            </button>
            <div className="mini-content">
              {/* نفس أزرار/أيقونات الدفع الموجودة في الكرت الأصلي بنفس التصميم والحجم + الأزرار المطلوبة دون تكرار */}
              <div className="mini-payments">
                <ul className="colors-container">
                  <li className="payment-card visa" aria-label="Visa">
                    <div className="card-icon premium-card visa">
                      <div className="card-brand">VISA</div>
                    </div>
                    <div className="label-text">Visa</div>
                  </li>
                  <li className="payment-card mastercard" aria-label="Mastercard">
                    <div className="card-icon premium-card mastercard">
                      <div className="card-circles">
                        <div className="circle red"></div>
                        <div className="circle yellow"></div>
                      </div>
                    </div>
                    <div className="label-text">Mastercard</div>
                  </li>
                  <li className="payment-card googleplay" aria-label="Google Play">
                    <div className="card-icon premium-card googleplay">
                      <div className="card-logo">▶</div>
                    </div>
                    <div className="label-text">Google Play</div>
                  </li>
                  <li className="payment-card roblox" aria-label="Roblox">
                    <div className="card-icon premium-card roblox">
                      <div className="card-brand">R</div>
                    </div>
                    <div className="label-text">Roblox</div>
                  </li>
                  <li className="payment-card playstation" aria-label="PlayStation">
                    <div className="card-icon premium-card playstation">
                      <div className="card-logo">◐◒◑◓</div>
                    </div>
                    <div className="label-text">PlayStation</div>
                  </li>
                  <li className="payment-card amazon" aria-label="Amazon">
                    <div className="card-icon premium-card amazon">
                      <div className="card-brand">amazon</div>
                    </div>
                    <div className="label-text">Amazon</div>
                  </li>
                  <li className="payment-card itunes" aria-label="iTunes">
                    <div className="card-icon premium-card itunes">
                      <div className="card-logo">♪</div>
                    </div>
                    <div className="label-text">iTunes</div>
                  </li>
                  <li className="payment-card shein" aria-label="Shein">
                    <div className="card-icon premium-card shein">
                      <div className="card-brand">SHEIN</div>
                    </div>
                    <div className="label-text">Shein</div>
                  </li>
                  <li className="payment-card steam" aria-label="Steam">
                    <div className="card-icon premium-card steam">
                      <div className="card-logo">◉</div>
                    </div>
                    <div className="label-text">Steam</div>
                  </li>
                  <li className="payment-card fortnite" aria-label="Fortnite">
                    <div className="card-icon premium-card fortnite">
                      <div className="card-brand">F</div>
                    </div>
                    <div className="label-text">Fortnite</div>
                  </li>
                  <li className="payment-card razer" aria-label="Razer Gold">
                    <div className="card-icon premium-card razer">
                      <div className="card-logo">⧨</div>
                    </div>
                    <div className="label-text">Razer Gold</div>
                  </li>
                  <li className="payment-card flower" aria-label="Flower">
                    <div className="card-icon premium-card flower">
                      <div className="card-logo">❀</div>
                    </div>
                    <div className="label-text">Flower</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="image-container">
          {/* Online status indicator (green dot) */}
          <span className={`status-dot online`} aria-label={'online'} />
          <div className="toggle-wrapper" title="فتح الصفحة المصغرة">
            <ToggleButton active={miniOpen} onClick={() => setMiniOpen(true)} />
          </div>
          <svg viewBox="0 0 1921 1081" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="svg" aria-hidden="true">
            <defs>
              <radialGradient gradientUnits="objectBoundingBox" gradientTransform="translate(0.219) scale(0.563 1)" r="1.204" cy="0.5" cx="0.5" id="radial-gradient">
                <stop stopColor="#fff" offset={0} />
                <stop stopColor="#bcbcbc" offset={1} />
              </radialGradient>
            </defs>
            <g transform="translate(-121.5 -92.5)" id="hoodie">
              <rect fill="url(#radial-gradient)" strokeWidth={1} strokeMiterlimit={10} stroke="#fff" transform="translate(122 93)" height={1080} width={1920} data-name="Rectangle 83" id="Rectangle_83" />
            </g>
          </svg>
          {/* Live transparent video with bg removed */}
          <TransparentIconVideo src="/assets/finance-anim.mp4" size={160} opacity={0.98} tolerance={80} edgeFeather={1.2} bgStrategy={'white'} />
        </div>
        <label className="favorite">
          <input defaultChecked type="checkbox" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </label>
        <div className="content">
          <div className="brand">بطائق إلكترونية مسبقة الدفع</div>
          <div className="product-name">بطاقة دفع رقمية جاهزة للاستخدام الفوري</div>
          <div className="loading-indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="color-size-container">
            <div className="colors">
              <ul className="colors-container">
                <li className="payment-card visa" aria-label="Visa">
                  <div className="card-icon premium-card visa">
                    <div className="card-brand">VISA</div>
                  </div>
                </li>
                <li className="payment-card mastercard" aria-label="Mastercard">
                  <div className="card-icon premium-card mastercard">
                    <div className="card-circles">
                      <div className="circle red"></div>
                      <div className="circle yellow"></div>
                    </div>
                  </div>
                </li>
                <li className="payment-card googleplay" aria-label="Google Play">
                  <div className="card-icon premium-card googleplay">
                    <div className="card-logo">▶</div>
                  </div>
                </li>
                <li className="payment-card roblox" aria-label="Roblox">
                  <div className="card-icon premium-card roblox">
                    <div className="card-brand">R</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="rating">
            <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" className="svg four-star-svg">
              <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com" />
              <path fill="#fc0" transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2" />
              <path fill="#fc0" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3" />
              <path fill="#fc0" transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4" />
              <path fill="#e9e9e9" transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5" />
            </svg>
            (29,062)
          </div>
          <div className="divider" aria-hidden="true" />

          <div className="promo-row" aria-label="promotions">
            <div className="promo-item">
              <FiTruck aria-hidden="true" />
              <span>شحن سريع</span>
            </div>
            <div className="promo-item">
              <FiShield aria-hidden="true" />
              <span>آمن</span>
            </div>
            <div className="promo-item">
              <FiGift aria-hidden="true" />
              <span>هدايا</span>
            </div>
          </div>

        </div>

      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --accent-color: #ffd426;
    position: relative;
    width: 240px;
    background: white;
    border-radius: 1rem;
    padding: 0.3rem;
    padding-bottom: 2rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 50px 30px -20px;
    transition: all 0.5s ease-in-out;
    direction: rtl;
    overflow: visible; /* allow elements (e.g., close button) to sit outside card bounds */
    z-index: 10;
  }

  /* Screen dim background behind mini overlay */
  .screen-dim { position: fixed; inset: 0; background: rgba(17,24,39,0.6); backdrop-filter: blur(0.5px); z-index: 9998; pointer-events: auto; }
  [data-open="false"] .screen-dim { display: none; }

  /* Mini overlay that matches the card bounds */
  .mini-overlay { position: absolute; inset: 0; background: transparent; border-radius: inherit; z-index: 10000; display: flex; flex-direction: column; box-shadow: none; animation: fadeIn 200ms ease-out; }

  .mini-overlay .close-btn { position: absolute; top: -20px; left: 50%; transform: translateX(-50%); background: #111827; color: #fff; border: none; border-radius: 999px; width: 26px; height: 26px; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; opacity: 0.95; z-index: 30; box-shadow: 0 6px 12px rgba(0,0,0,0.25); }

  .mini-content { padding: 0.75rem 0.75rem 1rem 0.75rem; padding-top: 2.2rem; color: #374151; height: 100%; }

  .mini-payments { display:flex; justify-content:center; }
  .mini-overlay .colors-container { margin-top: 0; }

  /* Same button style but as grid inside overlay */
  .mini-overlay .colors-container { list-style-type: none; display: grid; grid-template-columns: repeat(4, 50px); gap: 10px 10px; justify-content: center; justify-items: center; align-items: start; font-size: 0.5rem; margin: 0; padding: 0; width: 100%; max-width: 240px; }

  .mini-overlay .payment-card { position: relative; cursor: pointer; transition: transform 0.2s ease; width: 56px; display: flex; flex-direction: column; align-items: center; gap: 0.15rem; }
  .mini-overlay .payment-card:hover { transform: scale(1.05); }
  .mini-overlay .payment-card .label-text { font-size: 0.48rem; color: #6b7280; font-weight: 700; line-height: 1; text-align: center; }
  .mini-overlay .payment-card .card-icon.real-icon { 
    width: 50px !important; 
    height: 32px !important; 
    display: inline-flex !important; 
    align-items: center !important; 
    justify-content: center !important; 
    background: transparent !important; 
    padding: 3px !important; 
    border-radius: 6px !important; 
    overflow: visible !important;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1) !important;
    border: none !important;
    transition: all 0.2s ease-in-out !important;
  }
  .mini-overlay .payment-card .card-icon.real-icon svg,
  .mini-overlay .payment-card .card-icon.real-icon img { width: 26px; height: 26px; transform: scale(1.0); transform-origin: center; }

  .card .image-container { position: relative; width: 100%; height: 130px; border-radius: 0.7rem; border-top-left-radius: 4rem; margin-bottom: 1rem; /* لا نخفي أي جزء من الزر */ overflow: visible; }
  .card .image-container .icon-image { filter: drop-shadow(0 0 0 rgba(0,0,0,0)); mix-blend-mode: normal; opacity: 0.95; }
  .card .image-container .icon-engrave { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: 120px; height: 120px; pointer-events: none; }
  .card .image-container .icon-engrave .icon { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); }
  .card .image-container .icon-engrave .icon.base { color: rgba(120,120,120,0.22); filter: blur(0.3px); }
  .card .image-container .icon-engrave .icon.light { color: rgba(255,255,255,0.55); mix-blend-mode: screen; transform: translate(-50%, calc(-50% - 1px)); }
  .card .image-container .icon-engrave .icon.dark { color: rgba(0,0,0,0.15); mix-blend-mode: multiply; filter: blur(0.2px); transform: translate(calc(-50% + 1px), calc(-50% + 1px)); }


  .card .image-container .status-dot { position: absolute; top: 6px; left: 8px; width: 8px; height: 8px; border-radius: 50%; box-shadow: 0 0 0 2px #ffffff; }
  .card .image-container .status-dot.online { background: #22c55e; }
  .card .image-container .status-dot.offline { background: #9ca3af; }

  .card .image-container .svg { height: 100%; width: 100%; border-radius: inherit; }

  .card .image-container .toggle-wrapper { position: absolute; left: 20px; bottom: -20px; z-index: 4; transform: scale(0.55); transform-origin: left bottom; }

  .card .favorite { position: absolute; width: 14px; height: 14px; top: 8px; left: 8px; cursor: pointer; }
  .card .favorite input { position: absolute; opacity: 0; width: 0; height: 0; }
  .card .favorite input:checked ~ svg { animation: circle-bounce 0.3s; fill: #22c55e; filter: drop-shadow(0px 2px 3px rgba(34, 197, 94, 0.4)); }
  .card .favorite svg { fill: #d1d5db; transition: all 0.2s ease; }

  .card .content { 
    padding: 0 16px; /* 8px grid system - 16px = 2 grid units */
    margin-bottom: 16px; /* 8px grid system */
  }

  .card .content .brand { 
    font-family: 'IBM Plex Sans Arabic', 'Noto Sans Arabic', 'Amiri', 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 800; 
    font-size: 0.875rem; /* 14px - better readability */
    color: #4a5568; /* Improved contrast from #a6a6a6 */
    text-align: right; 
    margin-bottom: 12px; /* 8px grid system - 12px = 1.5 grid units */
    line-height: 1.4;
    letter-spacing: 0.025em;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); /* Subtle depth */
  }

  .card .content .product-name { 
    font-family: 'IBM Plex Sans Arabic', 'Noto Sans Arabic', 'Amiri', 'Cairo', -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600; 
    color: #2d3748; /* Much better contrast from #666 */
    font-size: 0.75rem; /* 12px - refined size */
    margin-bottom: 8px; /* 8px grid system - 1 grid unit */
    text-align: right; 
    line-height: 1.5;
    letter-spacing: 0.01em;
    text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.08); /* Subtle text depth */
  }

  .card .content .loading-indicator { display: flex; justify-content: center; align-items: center; gap: 0.2rem; margin-bottom: 1rem; padding: 0.3rem 0; }
  .card .content .loading-indicator .dot { width: 4px; height: 4px; border-radius: 50%; background-color: #F79E1B; animation: typing-dots 1.4s infinite ease-in-out; }
  .card .content .loading-indicator .dot:nth-child(1) { animation-delay: -0.32s; }
  .card .content .loading-indicator .dot:nth-child(2) { animation-delay: -0.16s; }
  .card .content .loading-indicator .dot:nth-child(3) { animation-delay: 0; }

  .card .content .color-size-container { display: flex; justify-content: space-between; text-transform: uppercase; font-size: 0.7rem; font-weight: 700; color: #a8a8a8; gap: 2rem; margin-bottom: 1.5rem; }
  .card .content .color-size-container > * { flex: 1; }

  .card .content .color-size-container .colors .colors-container { list-style-type: none; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.3rem; font-size: 0.5rem; margin-top: 0.2rem; }

  /* Promo row under blue divider */
  .card .promo-row { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-top: 0.5rem; color: #6b7280; font-weight: 700; font-size: 0.6rem; }
  .card .promo-row .promo-item { display: inline-flex; align-items: center; gap: 0.25rem; background: #ffffff; border: 1px solid #eef2ff; border-radius: 999px; padding: 2px 6px; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
  .card .promo-row .promo-item svg { width: 12px; height: 12px; color: #2563EB; }

  /* Remove all old conflicting CSS rules */

  /* PREMIUM CARD ICON STYLES - UNIFIED DESIGN SYSTEM */
  
  /* Base Premium Card Style */
  .premium-card {
    width: 38px !important;
    height: 24px !important;
    border-radius: 6px !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    position: relative !important;
    cursor: pointer !important;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    font-weight: 700 !important;
    font-size: 8px !important;
    letter-spacing: 0.5px !important;
    box-shadow: 
      0 2px 8px rgba(0, 0, 0, 0.15),
      0 1px 3px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    overflow: hidden !important;
  }

  /* Premium Card Gradients & Colors */
  .premium-card.visa {
    background: linear-gradient(135deg, #1a1f71 0%, #4757a9 50%, #1a1f71 100%) !important;
    color: #ffffff !important;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3) !important;
  }

  .premium-card.mastercard {
    background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%) !important;
    color: #ffffff !important;
  }

  .premium-card.googleplay {
    background: linear-gradient(135deg, #34a853 0%, #4caf50 50%, #2e7d32 100%) !important;
    color: #ffffff !important;
    font-size: 12px !important;
  }

  .premium-card.roblox {
    background: linear-gradient(135deg, #e74c3c 0%, #c0392b 50%, #a93226 100%) !important;
    color: #ffffff !important;
    font-size: 12px !important;
    font-weight: 900 !important;
  }

  .premium-card.playstation {
    background: linear-gradient(135deg, #003791 0%, #0050c7 50%, #003791 100%) !important;
    color: #ffffff !important;
    font-size: 10px !important;
  }

  .premium-card.amazon {
    background: linear-gradient(135deg, #ff9900 0%, #ffb84d 50%, #e68a00 100%) !important;
    color: #000000 !important;
    font-weight: 900 !important;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) !important;
  }

  .premium-card.itunes {
    background: linear-gradient(135deg, #fa2d48 0%, #ff5470 50%, #e91e40 100%) !important;
    color: #ffffff !important;
    font-size: 14px !important;
  }

  .premium-card.shein {
    background: linear-gradient(135deg, #000000 0%, #2c2c2c 50%, #000000 100%) !important;
    color: #ffffff !important;
    font-size: 7px !important;
    font-weight: 900 !important;
  }

  .premium-card.steam {
    background: linear-gradient(135deg, #1b2838 0%, #2a475e 50%, #1b2838 100%) !important;
    color: #66c0f4 !important;
    font-size: 14px !important;
  }

  .premium-card.fortnite {
    background: linear-gradient(135deg, #6a5acd 0%, #8a7dda 50%, #5a4fcf 100%) !important;
    color: #ffffff !important;
    font-size: 12px !important;
    font-weight: 900 !important;
  }

  .premium-card.razer {
    background: linear-gradient(135deg, #00ff00 0%, #44ff44 50%, #00cc00 100%) !important;
    color: #000000 !important;
    font-size: 12px !important;
    font-weight: 900 !important;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) !important;
  }

  .premium-card.flower {
    background: linear-gradient(135deg, #ff69b4 0%, #ff99cc 50%, #ff1493 100%) !important;
    color: #ffffff !important;
    font-size: 14px !important;
  }

  /* Mastercard Circles */
  .card-circles {
    display: flex !important;
    align-items: center !important;
    gap: -2px !important;
  }

  .card-circles .circle {
    width: 12px !important;
    height: 12px !important;
    border-radius: 50% !important;
    opacity: 0.9 !important;
  }

  .card-circles .circle.red {
    background: #eb001b !important;
    z-index: 2 !important;
  }

  .card-circles .circle.yellow {
    background: #ff5f00 !important;
    margin-left: -6px !important;
    z-index: 1 !important;
  }

  /* Hover Effects - Main Card */
  .card .premium-card:hover {
    transform: translateY(-2px) scale(1.08) !important;
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.25),
      0 4px 12px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
  }

  /* Active Effects - Main Card */
  .card .premium-card:active {
    transform: translateY(0px) scale(1.02) !important;
    box-shadow: 
      0 3px 12px rgba(0, 0, 0, 0.2),
      0 1px 4px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
  }

  /* Mini Overlay Premium Card Styles */
  .mini-overlay .premium-card {
    width: 50px !important;
    height: 32px !important;
    font-size: 9px !important;
  }

  .mini-overlay .premium-card.googleplay,
  .mini-overlay .premium-card.itunes,
  .mini-overlay .premium-card.steam,
  .mini-overlay .premium-card.flower {
    font-size: 16px !important;
  }

  .mini-overlay .premium-card.playstation {
    font-size: 12px !important;
  }

  .mini-overlay .premium-card.razer {
    font-size: 14px !important;
  }

  /* Mini Overlay Hover Effects */
  .mini-overlay .premium-card:hover {
    transform: translateY(-3px) scale(1.1) !important;
    box-shadow: 
      0 12px 35px rgba(0, 0, 0, 0.3),
      0 6px 15px rgba(0, 0, 0, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
  }

  /* Mini Overlay Active Effects */
  .mini-overlay .premium-card:active {
    transform: translateY(-1px) scale(1.05) !important;
    box-shadow: 
      0 6px 20px rgba(0, 0, 0, 0.25),
      0 3px 8px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
  }




  /* Blue divider under rating spanning full card width */
  .card .divider { height: 2px; width: 100%; background: #2563EB; opacity: 0.9; margin: 0.5rem 0 0.2rem; }



  .card .content .rating { color: #a8a8a8; font-size: 0.6rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; }
  .card .content .rating svg { height: 12px; }

  .card:hover { transform: scale(1.03); }

  @keyframes typing-dots { 0%, 80%, 100% { transform: scale(1); opacity: 0.5; } 40% { transform: scale(1.2); opacity: 1; } }
  @keyframes circle-bounce { 0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } }
  @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
`;

export default ProductCard;