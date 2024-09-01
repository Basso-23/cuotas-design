import Card from "@/components/Card";
import React, { useRef, useEffect } from "react";

const Home = () => {
  const sliderRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);
  let currentIndex = 0;

  const updateSliderPosition = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * 360
      }px)`;
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const leftBtn = leftBtnRef.current;
    const rightBtn = rightBtnRef.current;

    const handleRightClick = () => {
      if (currentIndex < 5) {
        currentIndex++;
        updateSliderPosition();
      }
    };

    const handleLeftClick = () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
      }
    };

    if (rightBtn) rightBtn.addEventListener("click", handleRightClick);
    if (leftBtn) leftBtn.addEventListener("click", handleLeftClick);

    return () => {
      if (rightBtn) rightBtn.removeEventListener("click", handleRightClick);
      if (leftBtn) leftBtn.removeEventListener("click", handleLeftClick);
    };
  }, [currentIndex]);

  return (
    <main className="inter">
      <div className="desktop sm:flex hidden">
        <div className="top">
          <div className="background-design">
            <div className="top-content">
              <div className="header">Paga tus cuotas fácil y rápido</div>

              <div className="totals-container">
                <div>
                  <div className="totals-title">Total</div>
                  <div className="totals-subtitle">$544.62</div>
                </div>
                <div>
                  <div className="totals-title">Subtotal</div>
                  <div className="totals-subtitle">$508.99</div>
                </div>
                <div>
                  <div className="totals-title">ITBMS</div>
                  <div className="totals-subtitle">$35.63</div>
                </div>
              </div>

              <div className="yappy-desktop fixedCenterY">
                <div className="yappy-btn-img"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="center">
          <div className="h-[100px] w-full absolute -top-1 bg-[#0168f5] rounded-br-[15px] rounded-bl-[15px] z-10"></div>
          <button className="slider-btn left" ref={leftBtnRef} id="leftBtn">
            <div className="arrow-back"></div>
          </button>
          <div className="slider-container z-50">
            <div className="slider" ref={sliderRef} id="slider">
              <div className="slide">
                <Card title="Cuota" num="#1" category="#0069F5" />
              </div>
              <div className="slide">
                <Card title="Cuota" num="#1" category="#0069F5" />
              </div>
              <div className="slide">
                <Card title="Cuota" num="#1" category="#0069F5" />
              </div>
              <div className="slide">
                <Card title="Cuota" num="#1" category="#0069F5" />
              </div>
              <div className="slide">
                <Card title="Cuota" num="#1" category="#0069F5" />
              </div>
              <div className="slide">
                <Card title="Cuota" num="#1" category="#0069F5" />
              </div>
            </div>
          </div>
          <button className="slider-btn right" ref={rightBtnRef} id="rightBtn">
            <div className="arrow-next"></div>
          </button>
          <div className="h-[100px] w-full absolute -bottom-1 bg-[#0168f5] rounded-tr-[15px] rounded-tl-[15px] z-10"></div>
        </div>

        <div className="bottom">
          <div className="background-design"></div>
        </div>
      </div>
    </main>
  );
};

export default Home;
