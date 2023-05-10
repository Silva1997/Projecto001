import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import Cartao1 from '../Paginas/Cartao'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Estilos/Slider.css";
import SwiperCore,{ Pagination ,Autoplay} from "swiper/core";

export default function App() {
    SwiperCore.use([Autoplay,Pagination])
    return (
        <>

            <h1 className="Pr" style={{ color: "black", textAlign: "center" }}><span style={{ color: "red" }}>+</span>Nossos Produtos</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay,Pagination]}
                className="mySwiper"
            >
                

                <SwiperSlide>

                    <Cartao1 />
                </SwiperSlide>
                <SwiperSlide>
                    <Cartao1 />
                </SwiperSlide>

                <SwiperSlide>
                    <Cartao1 />
                </SwiperSlide>

                
            </Swiper>
        </>
    );
}
