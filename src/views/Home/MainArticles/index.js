import React from 'react';
import styles from "./index.module.scss";
import icon from "@/assets/icon.svg";
import {withApp} from "@/contexts/appContext";
import Link from "next/link";
import {colors} from "@/utils/colors";

const MainArticles = ({app: {articulos, config}}) => {

	const cards = [
		{
			title: "Pregnancy Yoga",
			content: "Enjoy pregnancy, relax and connect with your growing baby while preparing for birth.",
			link: "#",
			bgColor: "#fcd4cb"
		},
		{
			title: "Pregnancy Yoga",
			content: "Enjoy pregnancy, relax and connect with your growing baby while preparing for birth.",
			link: "#",
			bgColor: "#fef1ca"
		},
		{
			title: "Pregnancy Yoga",
			content: "Enjoy pregnancy, relax and connect with your growing baby while preparing for birth.",
			link: "#",
			bgColor: "#b2d8f2"
		},
		{
			title: "Pregnancy Yoga",
			content: "Enjoy pregnancy, relax and connect with your growing baby while preparing for birth.",
			link: "#",
			bgColor: "#385568",
			color: "#FFFFFF"

		},
	]
	return (
	  <div className={styles.container}>
		  <div className={styles.subTitle}>{config?.subtituloHighlight}</div>
		  <div className={styles.title}>
			  {config?.tituloHighlight}
		  </div>
		  <div className={styles.cardsContainer}>
			  {articulos.filter(f => f.featuredEnabled).splice(0, 4).map((card, i) => (
				<div className={styles.card} style={{backgroundColor: colors[i]?.bgColor, color: colors[i]?.color}}
					 key={i.toString()}
				>
					<Link href={`/blog/${card.slug}`}>
						<div className={styles.icon} style={{backgroundColor: colors[i].bgColor, filter: "saturate(1.5)"}}>
							<img src={icon.src} alt=""/>
						</div>
						<div className={styles.cardTitle}>
							{card?.title}
						</div>
						<div className={styles.content}>
							{card.shortDescription}
						</div>
						<div className={styles.viewMore}>
							LEER MAS
							<ion-icon name="arrow-forward-outline"></ion-icon>
						</div>
					</Link>

				</div>
			  ))}
		  </div>
	  </div>
	);
};

export default withApp(MainArticles);