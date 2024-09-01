import Card from "@/components/Card";
import React, { useRef, useEffect, useState } from "react";

const Home = () => {
  // Referencias para la versión de escritorio
  const sliderRef = useRef(null);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);

  // Referencias para la versión móvil
  const mobileSliderRef = useRef(null);
  const mobileLeftBtnRef = useRef(null);
  const mobileRightBtnRef = useRef(null);

  const [desktopSlides, setDesktopSlides] = useState(0);
  const [mobileSlides, setMobileSlides] = useState(0);

  let currentIndex = 0;
  let mobileCurrentIndex = 0;

  // Actualización de la posición del slider de escritorio
  const updateSliderPosition = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentIndex * 410
      }px)`;
    }
  };

  // Actualización de la posición del slider móvil
  const updateMobileSliderPosition = () => {
    if (mobileSliderRef.current) {
      mobileSliderRef.current.style.transform = `translateX(-${
        mobileCurrentIndex * 100
      }vw)`;
    }
  };

  useEffect(() => {
    // Contar el número de elementos para el slider de escritorio y móvil
    if (sliderRef.current) {
      setDesktopSlides(sliderRef.current.children.length);
    }
    if (mobileSliderRef.current) {
      setMobileSlides(mobileSliderRef.current.children.length);
    }

    // Lógica para la versión de escritorio
    const slider = sliderRef.current;
    const leftBtn = leftBtnRef.current;
    const rightBtn = rightBtnRef.current;

    const handleRightClick = () => {
      if (currentIndex < desktopSlides - 1) {
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

    // Lógica para la versión móvil
    const mobileSlider = mobileSliderRef.current;
    const mobileLeftBtn = mobileLeftBtnRef.current;
    const mobileRightBtn = mobileRightBtnRef.current;

    const handleMobileRightClick = () => {
      if (mobileCurrentIndex < mobileSlides - 1) {
        mobileCurrentIndex++;
        updateMobileSliderPosition();
      }
    };

    const handleMobileLeftClick = () => {
      if (mobileCurrentIndex > 0) {
        mobileCurrentIndex--;
        updateMobileSliderPosition();
      }
    };

    if (mobileRightBtn)
      mobileRightBtn.addEventListener("click", handleMobileRightClick);
    if (mobileLeftBtn)
      mobileLeftBtn.addEventListener("click", handleMobileLeftClick);

    return () => {
      if (rightBtn) rightBtn.removeEventListener("click", handleRightClick);
      if (leftBtn) leftBtn.removeEventListener("click", handleLeftClick);

      if (mobileRightBtn)
        mobileRightBtn.removeEventListener("click", handleMobileRightClick);
      if (mobileLeftBtn)
        mobileLeftBtn.removeEventListener("click", handleMobileLeftClick);
    };
  }, [desktopSlides, mobileSlides]);

  return (
    <main className="inter">
      {/* Versión Desktop */}
      <div className="desktop sm:flex hidden">
        <div className="top">
          <div className="background-design">
            <div className="top-content relative">
              <div className="header !absolute fixedCenterXnY">
                Paga tus cuotas fácil y rápido
              </div>

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

      {/* Versión Mobile */}
      <div className="mobile sm:hidden flex">
        <div className="top-mobile">
          <div className="background-design">
            <div className="header-mobile">Paga tus cuotas fácil y rápido</div>
            <div className="totals-container-mobile">
              <div>
                <div className="totals-title-mobile">Total</div>
                <div className="totals-subtitle-mobile">$544.62</div>
              </div>
              <div>
                <div className="totals-title-mobile">Subtotal</div>
                <div className="totals-subtitle-mobile">$508.99</div>
              </div>
              <div>
                <div className="totals-title-mobile">ITBMS</div>
                <div className="totals-subtitle-mobile">$35.63</div>
              </div>
            </div>
          </div>
        </div>

        <div className="center-mobile">
          <div className="slider-container-mobile z-50">
            <div className="slider" ref={mobileSliderRef} id="mobileSlider">
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
        </div>

        <div className="bottom-mobile">
          <div className="background-design">
            <button
              className="slider-btn left"
              ref={mobileLeftBtnRef}
              id="mobileLeftBtn"
            >
              <div className="arrow-back-mobile"></div>
            </button>
            <div className="yappy-mobile">
              <div className="yappy-btn-img"></div>
            </div>
            <button
              className="slider-btn right"
              ref={mobileRightBtnRef}
              id="mobileRightBtn"
            >
              <div className="arrow-next-mobile"></div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
