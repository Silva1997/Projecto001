import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Cartao from './Cartao'
import Cartao1 from './Cartao1'
import Cartao2 from './Cartao2'
import Cartao3 from './Cartao3'
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../Estilos/Slider.css'
import SwiperCore, { Pagination, Autoplay } from "swiper/core";
export default function App() {
    SwiperCore.use([Autoplay, Pagination])
    return (
        <>
            <h6 className="Estilopalavras" style={{ color: "black", textAlign: "center"  }}>Mais Procurados <span style={{ color: "red" }}><hr/></span>Promoções</h6>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                breakpoints={{
                    360: {
                        slidesPerView: 1
                    },
                    1024: {
                        slidesPerView: 3
                    }
                }}
                // centeredSlides={true}
                // loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    type:"progressbar"
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <Cartao />

                </SwiperSlide>

                <SwiperSlide>

                    <Cartao1 />

                </SwiperSlide>

                <SwiperSlide>

                    <Cartao2 />

                </SwiperSlide>

                <SwiperSlide>

                    <Cartao3 />

                </SwiperSlide>
                <SwiperSlide>

                    <Cartao />

                </SwiperSlide>

                <SwiperSlide>

                    <Cartao1 />

                </SwiperSlide>

                <SwiperSlide>

                    <Cartao2 />

                </SwiperSlide>

                <SwiperSlide>

                    <Cartao3 />

                </SwiperSlide>
            </Swiper>
        </>
    );
}
