import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//
import imagem from './Img/A1.jpg'
// import imagem1 from './Img/A7.jpg'
import imagem2 from './Img/A9.jpg'
import imagem3 from './Img/A4.jpg'
import imagem4 from './Img/A2.jpg'
// import imagem5 from './Img/A8.jpg'
//
import CheronRightIcon from '@mui/icons-material/ChevronRight'
import CheronLIcon from '@mui/icons-material/ChevronLeft'
//
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; // iconCarrinho
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'; // Icon Local
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import Inventory2Icon from '@mui/icons-material/Inventory2';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./Estilo.css";
// import required modules
import { EffectCards } from "swiper";
import SwiperCore, { Autoplay } from "swiper/core";
export default function App() {
  SwiperCore.use([Autoplay])
  return (
    <>
      <div className="CentrP">
        <div id="TP">
          <h6 id="h5p">
            Encontre o Bolo <br />
            perfeito para qualquer<br />
            hora do dia
          </h6>
          <p style={{ textAlign: "start", color: 'white' }}>
            {/*         
        Com o GSTCF você recebe sua encomenda<br/> onde estiver,
        a qualquer hora */}
            Catolo Doces e Salgados – é uma empresa angolana, que chega ao mercado<br/>
            com o intuito de trazer, não só os doces e salgados já existentes, mas<br/>
            também as opções e sabores novos que certamente agradarão aos seus clientes.<br/>
            Nossos produtos finais representam o conhecimento de longas datas,<br/>
            produzidos da mesma forma como os conceitos de gastronomia de outras<br/>
            gerações que foram repassados através dos tempos.<br/>
          </p>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <ShoppingCartOutlinedIcon className='f_social_icon' /><p id='frasesPrincipal' style={{ color: 'white' }} >Compra simples e segura</p>
            <LocalShippingOutlinedIcon className='f_social_icon' /><p id='frasesPrincipal' style={{ color: 'white' }}  >Entrega rápida e rastreada</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px", }}>
            <Inventory2Icon className='f_social_icon' /><p id='frasesPrincipal' style={{ color: 'white', marginRight: "0px" }} >Embalagem mantém o <br />bolo intacto</p>
            <WatchLaterIcon id="especial" className='f_social_icon' /><p id='frasesPrincipal' style={{ color: 'white' }} >Feito na hora</p>
          </div>
          <div style={{ position: "relative", top: "40px" }}>
            <button id="btn" style={{ margin: "12px", padding: "8px 8px", borderRadius: "18px 18px", width: "90px", border: "1px solid #fff" }}><CheronLIcon /></button>
            <button id="btn" style={{ padding: "8px 8px", borderRadius: "18px 18px", width: "90px", border: "1px solid #fff" }} ><CheronRightIcon /></button>
          </div>
        </div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="EfeitoSilader"
          width={390}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="EfeitoSilader2"><img src={imagem} id="Imagem" alt="Foto" /></SwiperSlide>
          {/* <SwiperSlide className="EfeitoSilader2"><img src={imagem1} id="Imagem" alt="Foto" /></SwiperSlide> */}
          <SwiperSlide className="EfeitoSilader2"><img src={imagem2} id="Imagem" alt="Foto" /></SwiperSlide>
          <SwiperSlide className="EfeitoSilader2"><img src={imagem3} id="Imagem" alt="Foto" /></SwiperSlide>
          <SwiperSlide className="EfeitoSilader2"><img src={imagem4} id="Imagem" alt="Foto" /></SwiperSlide>
        `  {/* <SwiperSlide className="EfeitoSilader2"><img src={imagem5} id="Imagem" alt="Foto" /></SwiperSlide>` */}
          {/* <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}
