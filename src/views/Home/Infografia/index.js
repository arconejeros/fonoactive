import React from 'react';
import styles from "./index.module.scss";

const Infografia = () => {
	return (
	  <div className={styles.container}>
		  <img
			className={styles.wave}
			src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/05/bottom_white_wave_01.png"

			alt=""/>
		  <div className={styles.inner}>
			  <div className={styles.subTitle}>
				  THE BENEFITS OFs
			  </div>
			  <div className={styles.title}>
				  Mommy & Baby Classes
			  </div>
			  <div className={styles.row}>
				  <div className={styles.info}>
					  <div className={styles.item}>
						  <div className={styles.iconColumn}>
							  <div className={styles.icon}/>
						  </div>
						  <div className={styles.textColumn}>
							  <div className={styles.itemTitle}>
								  Breathe & Relax
							  </div>
							  <div className={styles.itemContent}>
								  You will learn different breathing and relaxation techniques that will equip you to
								  relax in
								  pregnancy and labour.
							  </div>
						  </div>
					  </div>
					  <div className={styles.item}>
						  <div className={styles.iconColumn}>
							  <div className={styles.icon}/>
						  </div>
						  <div className={styles.textColumn}>
							  <div className={styles.itemTitle}>
								  Energy levels
							  </div>
							  <div className={styles.itemContent}>
								  Yoga is a fantastic tool to build and enhance your energy levels while pregnant and
								  after birth.
							  </div>
						  </div>
					  </div>

				  </div>
				  <div className={styles.imageContainer}>
					  <img
						src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/07/hero_image_07.png"
						alt=""/>
				  </div>
				  <div className={styles.info}>
					  <div className={styles.item}>
						  <div className={styles.iconColumn}>
							  <div className={styles.icon}/>
						  </div>
						  <div className={styles.textColumn}>
							  <div className={styles.itemTitle}>
								  Breathe & Relax
							  </div>
							  <div className={styles.itemContent}>
								  You will learn different breathing and relaxation techniques that will equip you to
								  relax in
								  pregnancy and labour.
							  </div>
						  </div>
					  </div>
					  <div className={styles.item}>
						  <div className={styles.iconColumn}>
							  <div className={styles.icon}/>
						  </div>
						  <div className={styles.textColumn}>
							  <div className={styles.itemTitle}>
								  Energy levels
							  </div>
							  <div className={styles.itemContent}>
								  Yoga is a fantastic tool to build and enhance your energy levels while pregnant and
								  after birth.
							  </div>
						  </div>
					  </div>

				  </div>
			  </div>
		  </div>
		  <img
			className={styles.wave}
			src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/05/top_white_wave_01.png"
			alt=""/>
	  </div>
	);
};

export default Infografia;