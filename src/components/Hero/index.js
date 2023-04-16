import React from 'react';
import styles from "./index.module.scss";
import classNames from "classnames";
import ConditionalShow from "@/components/ConditionalShow";

const Hero = ({
				  img = "https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/07/hero_blog_single.jpg",
				  title,
				  subTitle,
				  compact = false
			  }) => {
	return (
	  <div className={classNames({
		  [styles.container]: true,
		  [styles.compact]: compact
	  })} style={{backgroundImage: `url("${img}")`}}>
		  <img
			className={styles.wave}
			src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/05/top_white_wave_01.png"
			alt=""/>
		  <div className={styles.inner}>
			  <div className={styles.subTitle}>{title}</div>
			  <div className={styles.title}>{subTitle}</div>
		  </div>
		  <img
			className={styles.wave}
			src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/05/bottom_white_wave_01.png"
			alt=""/>
	  </div>
	);
};

export default Hero;