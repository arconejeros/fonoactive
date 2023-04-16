import React from 'react';
import styles from "./index.module.scss";
import classNames from "classnames";
import {serialize} from "@/utils/htmlGenerator";
import Link from "next/link";
import {kebabCase} from "lodash";

const FeaturedArticle = ({position, articulo}) => {
	console.log("articulo", articulo)
	const image = position !== "left"
	  ? "https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/07/image_01_prices.jpg"
	  : "https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/07/image_02_prices_02.jpg"
	return (
	  <div className={classNames({
		  [styles.container]: true,
		  [styles.isRight]: position === "right",
	  })}>
		  <div className={styles.innerContainer}>
			  <div className={styles.textSide}>
				  <div className={styles.subTitle}>{articulo?.subtitle}</div>
				  <div className={styles.title}>{articulo?.title}</div>
				  <div className={styles.resume}>
					  {articulo?.description?.map(a => serialize(a.children))}
				  </div>
				  <div className={styles.ctaContainer}>
					  <Link href={`/blog/${kebabCase(articulo.slug)}`}>
						  <button>Leer mas...</button>
					  </Link>
				  </div>
			  </div>

		  </div>
		  <div className={styles.coverContainer}>
			  <img
				src={articulo?.cover?.url ?? "https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/07/image_01_prices.jpg"}
				onError={({currentTarget}) => {
					currentTarget.onerror = null; // prevents looping
					currentTarget.src = "https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/07/image_01_prices.jpg";
				}}
				alt=""/>
		  </div>
	  </div>
	);
};

export default FeaturedArticle;