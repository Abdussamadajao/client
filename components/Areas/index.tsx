import React from "react";
import { data } from "./data";
import { Wrapper } from "./style";
import { useRouter } from "next/router";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import SwiperCore from 'swiper/';

const Areas = () => {
  const router = useRouter();
  const ourService = () => {
    router.push("/service");
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Wrapper>
      <h1>
        Our <span>Expertise</span>
      </h1>
      <p className="text">
        Lex Gateway LP is into innovative and customized legal practice with a
        focus on current areas of law. Our major areas of practice include the
        following:
      </p>

      <Swiper
        // slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
     
        className="content"
      >
        {data.map((item, index) => {
          const { name, img } = item;
          return (
            <SwiperSlide className="card" key={index}>
              <span className="icon">
                <Image src={img} height={140} width={200} alt={name} />
              </span>
              <p>{name}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <a onClick={ourService}>Learn More</a>
    </Wrapper>
  );
};

export default Areas;
