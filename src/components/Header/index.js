import React, {useEffect, useState} from 'react';
import styles from "./index.module.scss";
import classNames from "classnames";
import Link from "next/link";
import {withApp} from "@/contexts/appContext";
import logo from "@/assets/fonoactive-logo.png";
import { groupBy } from "lodash";

const Header = ({app: {config, menus}}) => {
	const grouped = groupBy(menus, "tipo");
	console.log("grouped", grouped)

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
						  <li style={{backgroundColor: "#89d0c7"}}>
							  <ion-icon name="logo-instagram"/>

						  </li>
					  </a>
					  <a href={config?.socials?.facebook} target="_blank">
						  <li style={{backgroundColor: "#dc6859"}}>
							  <ion-icon name="logo-facebook"/>
						  </li>
					  </a>
					  <a href={config?.socials?.whatsapp} target="_blank">
						  <li style={{backgroundColor: "#f5a45d"}}>
							  <ion-icon name="logo-whatsapp"/>
						  </li>
					  </a>
					  <a href={config?.socials?.whatsapp} target="_blank">
						  <li style={{backgroundColor: "#f7b5c4"}}>
							  <ion-icon name="logo-whatsapp"/>
						  </li>
					  </a>
				  </ul>
				  <div className={styles.logoContainer}>
					  <img src={logo.src} alt="Fonoactive"/>
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
							  <h2>Programas</h2>
							  <ul className={styles.hiddenInfo}>
								  {grouped?.programas?.map((d,i) => (
									<Link href={`/blog/${d.articulos.slug}`} key={i.toString()} >
										<li key={i.toString()}>{d.title}</li>
									</Link>
								  ))}
							  </ul>
						  </li>
						  <li className={styles.dropDownElement} style={{backgroundColor: "#c36"}}>
							  <HeartRandom/>
							  <h2>Servicios</h2>
							  <ul className={styles.hiddenInfo}>
								  {grouped?.servicios?.map((d,i) => (
									<Link href={`/blog/${d.articulos.slug}`} key={i.toString()} >
										<li key={i.toString()}>{d.title}</li>
									</Link>
								  ))}
							  </ul>
						  </li>
						  <li className={styles.dropDownElement} style={{backgroundColor: "#9BD6FD"}}>
							  <HeartRandom/>
							  <h2>Terapias</h2>
							  <ul className={styles.hiddenInfo}>
								  {grouped?.terapias?.map((d,i) => (
									<Link href={`/blog/${d.articulos.slug}`} key={i.toString()} >
										<li key={i.toString()}>{d.title}</li>
									</Link>
								  ))}
							  </ul>
						  </li>
						  <li className={styles.dropDownElement} style={{backgroundColor: "#ffdca8"}}>
							  <HeartRandom/>
							  <h2>Recursos</h2>
							  <ul className={styles.hiddenInfo}>
								  {grouped?.recursos?.map((d,i) => (
									<Link href={`/blog/${d.articulos.slug}`} key={i.toString()} >
										<li key={i.toString()}>{d.title}</li>
									</Link>
								  ))}
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