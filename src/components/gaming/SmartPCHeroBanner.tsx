import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface SmartPCHeroBannerProps {
  onExploreGames?: () => void;
  onOpenTournament?: () => void;
  onOpenCashout?: () => void;
}

const BANNERS = [
  {
    id: "bn1",
    src: "/assets/banner/bn1.png",
    alt: "Zeus Blitz Championship - Total Cash Prize Pool: ₹5,00,000.00",
  },
  {
    id: "bn2",
    src: "/assets/banner/3.png",
    alt: "Mega Jackpots and Tournaments",
  },
  {
    id: "bn3",
    src: "/assets/banner/2.png",
    alt: "VIP Rewards and Daily Jackpots",
  },
];

export const SmartPCHeroBanner: React.FC<SmartPCHeroBannerProps> = ({
  onOpenTournament,
  onExploreGames,
}) => {
  return (
    <div className="smartpc-hero-wrapper mb-3 mb-md-4">
      <div className="smartpc-hero-frame">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".smartpc-hero-pagination",
            bulletClass: "smartpc-hero-bullet",
            bulletActiveClass: "smartpc-hero-bullet-active",
          }}
          navigation={{
            prevEl: ".smartpc-hero-btn-prev",
            nextEl: ".smartpc-hero-btn-next",
          }}
          loop={true}
          speed={600}
          className="smartpc-hero-swiper"
        >
          {BANNERS.map((banner, idx) => (
            <SwiperSlide key={banner.id}>
              <div
                className="smartpc-slide p-0"
                onClick={() => {
                  if (idx === 0 && onOpenTournament) {
                    onOpenTournament();
                  } else if (onExploreGames) {
                    onExploreGames();
                  }
                }}
              >
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="smartpc-banner-img"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Controls */}
        <button
          type="button"
          className="smartpc-hero-btn smartpc-hero-btn-prev"
          aria-label="Previous Banner"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button
          type="button"
          className="smartpc-hero-btn smartpc-hero-btn-next"
          aria-label="Next Banner"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>

        {/* Pagination Dots */}
        <div className="smartpc-hero-pagination"></div>
      </div>
    </div>
  );
};
