import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import Cartao1 from '../Paginas/Cartao'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Estilos/Slider.css";
import { Pagination } from "swiper";

export default function App() {
    return (
        <>

            <h1 className="Pr" style={{ color: "black", textAlign: "center" }}><span style={{ color: "red" }}>+</span>Nossos Produtos</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Pagination]}
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
