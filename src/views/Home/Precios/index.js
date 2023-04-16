import React from 'react';
import styles from "./index.module.scss";

const Precios = () => {
	return (
	  <div className={styles.container}>
		  <div className={styles.innerContainer}>
			  <div className={styles.bajada}>
				  <div className={styles.bajadaTitle}>
					  The Best Choice
				  </div>
				  <div className={styles.bajadaText}>
					  Booking deposit €30.00 secures your place and balance in class
				  </div>
				  <button className={styles.cta}>
					  Book Now
				  </button>
			  </div>
			  <div className={styles.pricesContainer}>
				  <div className={styles.price}>
					  <div className={styles.title}>
						  Drop-in
					  </div>
					  <div className={styles.icon}></div>
					  <ul>
						  <li>Bring Yoga mat</li>
						  <li>Bring Blanket</li>
						  <li>Bring water mug</li>
					  </ul>

					  <div className={styles.amount}>
						  $12.000
					  </div>
				  </div>
				  <div className={styles.price}>
					  <div className={styles.title}>
						  Drop-in
					  </div>
					  <div className={styles.icon}></div>
					  <ul>
						  <li>Bring Yoga mat</li>
						  <li>Bring Blanket</li>
						  <li>Bring water mug</li>
					  </ul>

					  <div className={styles.amount}>
						  $12.000
					  </div>
				  </div>
				  <div className={styles.price}>
					  <div className={styles.title}>
						  Drop-in
					  </div>
					  <div className={styles.icon}></div>
					  <ul>
						  <li>Bring Yoga mat</li>
						  <li>Bring Blanket</li>
						  <li>Bring water mug</li>
					  </ul>

					  <div className={styles.amount}>
						  $12.000
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
	);
};

export default Precios;