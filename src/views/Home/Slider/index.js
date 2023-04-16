import React from 'react';
import styles from "./index.module.scss";
import {Parallax} from 'react-parallax';
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import textHome from "@/assets/text_home.png";
import {Pagination, Navigation, Autoplay} from "swiper";
import {withApp} from "@/contexts/appContext";


const Slider = ({app: {sliders, config}}) => {
	console.log("sliders", sliders)
	return (
	  <div className={styles.mainCont}>
		  {/*<img className={styles.topClouds}*/}
			{/*   src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/05/bottom_white_wave_01.png"/>*/}
		  <Swiper
			navigation={true}
			pagination={true}
			loop={true}
			speed={1500}
			autoplay={{
				delay: 300000,
				disableOnInteraction: false,
			}}
			modules={[Pagination, Navigation, Autoplay]}
			className="mySwiper"
		  >
			  {sliders?.filter(f => f.enabled)?.map((slide, i) => (
				<SwiperSlide key={i.toString()}>
					<Parallax
					  blur={{min: -15, max: 15}}
					  bgImage={slide?.image?.url || "https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/05/parallax_01.jpg"}
					  bgImageAlt={slide?.title}
					  strength={-200}
					  className={styles.parallax}
					>
						<div className={styles.container}>
							<div className={styles.small}>{slide?.subtitle}</div>
							<span>{slide?.title}</span>
							<a className={styles.cta} href={slide?.ctaLink}>{slide?.ctaText}</a>
						</div>
					</Parallax>
				</SwiperSlide>
			  )).reverse()}
		  </Swiper>
		  <img className={styles.bottomClouds}
			   src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/05/bottom_white_wave_01.png"/>
		  <a href={config?.linkAgenda} target="_blank">
			  <img className={styles.bookNow}
				   src={textHome.src}
				   alt=""/>
		  </a>
	  </div>
	);
};

export default withApp(Slider);