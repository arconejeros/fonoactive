import React, {useEffect, useState} from 'react';
import styles from "./index.module.scss";
import classNames from "classnames";
import Link from "next/link";
import {withApp} from "@/contexts/appContext";

const Header = ({app: {config}}) => {
	const [showSticky, setShowSticky] = useState(false);
	useEffect(() => {
		var lastScrollTop = 0;
		window.addEventListener("scroll", function () {
			var st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > 30) {
				// downscroll code
				setShowSticky(true)
			} else {
				// upscroll code
				setShowSticky(false)
			}
			lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
		}, false);
	}, [])

	function randomIntFromInterval(min, max) { // min and max included
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	const HeartRandom = () => {
		const heart = [0, 1, 2, 3, 4].map((h, i) => <div className={styles.heart}
														 key={i.toString()}
														 style={{transform: `scale(${randomIntFromInterval(.3, 2)}) rotate(${randomIntFromInterval(-50, 50)}deg) translate(${randomIntFromInterval(-200, 120)}px, ${randomIntFromInterval(-100, 100)}px)`}}/>)
		return <div className={styles.heartContainer}>{heart}</div>
	}
	return (
		  <div className={classNames({
			  [styles.container]: true,
			  [styles.sticky]: showSticky === true,
			  [styles.isNotSticky]: showSticky === false,
		  })}>
			  <div className={styles.row}>
				  <ul className={styles.socials}>
					  <a href={config?.socials?.instagram} target="_blank">
						  <li>
							  <ion-icon name="logo-instagram"/>

						  </li>
					  </a>
					  <a href={config?.socials?.facebook} target="_blank">
						  <li>
							  <ion-icon name="logo-facebook"/>
						  </li>
					  </a>
					  <a href={config?.socials?.whatsapp} target="_blank">
						  <li>
							  <ion-icon name="logo-whatsapp"/>
						  </li>
					  </a>
				  </ul>
				  <div className={styles.logoContainer}>
					  FONO<b>ACTIVE</b>
				  </div>
			  </div>
			  <ul className={styles.sections}>
				  <li><Link href={"/"}><span>Inicio</span></Link></li>
				  <li><Link href={"/quienes-somos"}><span>Nosotros</span></Link></li>
				  <li className={styles.isDropDown}>
					  <span>Programas y Servicios</span>
					  <ion-icon name="chevron-down-outline"/>
					  <ul className={styles.dropdownContainer}>
						  <li className={styles.dropDownElement} style={{backgroundColor: "#C3EA77"}}>
							  <HeartRandom/>
							  <h2>Terapias</h2>
							  <ul className={styles.hiddenInfo}>
								  <li>Psicología</li>
								  <li>Psicopedagogía</li>
								  <li>Terapia Ocupaciona</li>
								  <li>Fonoaudiología</li>
								  <li>Test ADOS-2 Y WISCV</li>
							  </ul>
						  </li>
						  <li className={styles.dropDownElement} style={{backgroundColor: "#c36"}}>
							  <HeartRandom/>
							  <h2>Recursos</h2>
							  <ul className={styles.hiddenInfo}>
								  <li>Psicología</li>
								  <li>Psicopedagogía</li>
								  <li>Terapia Ocupaciona</li>
								  <li>Fonoaudiología</li>
								  <li>Test ADOS-2 Y WISCV</li>
							  </ul>
						  </li>
						  <li className={styles.dropDownElement} style={{backgroundColor: "#9BD6FD"}}>
							  <HeartRandom/>
							  <h2>Talleres verano 2023</h2>
							  <ul className={styles.hiddenInfo}>
								  <li>Psicología</li>
								  <li>Psicopedagogía</li>
								  <li>Terapia Ocupaciona</li>
								  <li>Fonoaudiología</li>
								  <li>Test ADOS-2 Y WISCV</li>
							  </ul>
						  </li>
						  <li className={styles.dropDownElement} style={{backgroundColor: "#ffdca8"}}>
							  <HeartRandom/>
							  <h2>Consejería para padres</h2>
							  <ul className={styles.hiddenInfo}>
								  <li>Psicología</li>
								  <li>Psicopedagogía</li>
								  <li>Terapia Ocupaciona</li>
								  <li>Fonoaudiología</li>
								  <li>Test ADOS-2 Y WISCV</li>
							  </ul>
						  </li>
					  </ul>
				  </li>
				  <li><span>Mi hijo necesita evaluación?</span></li>
				  <li><Link href="/blog"><span>Blog</span></Link></li>
				  <li>
					  <a href={config?.linkAgenda} target="_blank">
						  <div className={styles.cloud}>
							  <ion-icon name="calendar-number"></ion-icon>
							  <span>Agenda tu hora</span>
						  </div>
					  </a>
				  </li>
			  </ul>
		  </div>
	);
};

export default withApp(Header);