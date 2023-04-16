import React from 'react';
import styles from "./index.module.scss";
import {Parallax} from "react-parallax";
import {withApp} from "@/contexts/appContext";

const Footer = ({app: {config}}) => {
	return (
	  <Parallax
		// blur={{min: -15, max: 15}}
		bgImage={"https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/07/footer_background_04.jpg"}
		strength={-200}
		className={styles.parallax}
		// bgImageStyle={{width: "100%", height: "100vh", top: "130px"}}
	  >
		  <div className={styles.container}>
			  <img
				className={styles.wave}
				src="https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/05/top_white_wave_01.png"
				alt=""/>

			  <div className={styles.inner}>
				  <div className={styles.left}>
					  <div className={styles.logoContainer}>
						  FONO<b>ACTIVE</b>
					  </div>
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
					  <a href={`tel:${config?.telefonoContacto}`}>
						  <div className={styles.contactButton}>
							  <ion-icon name="call-outline"/>
							  <div className={styles.pipe}/>
							  <span className={styles.contactTitle}>Contáctanos</span>
							  <span className={styles.contactValue}>+56 4234 3242</span>
						  </div>
					  </a>
					  <a href={`mailto:${config?.emailContacto}`}>
						  <div className={styles.contactButton}>
							  <ion-icon name="mail-outline"/>
							  <div className={styles.pipe}/>
							  <span className={styles.contactTitle}>
							  Correo
						  </span>
							  <span className={styles.contactValue}>correo@fonoactive.cl</span>
						  </div>
					  </a>

				  </div>
				  <div className={styles.right}>
					  <form>
						  <div className={styles.formTitle}>Escribenos</div>
						  <div className={styles.formRow}>
							  <input placeholder="Nombre" type="text" name="nombre"/>
						  </div>
						  <div className={styles.formRow}>
							  <input type="text" placeholder="Email"/>
						  </div>
						  <div className="formRow">
							  <textarea placeholder="Mensaje"/>
						  </div>
						  <div className={styles.formRow}>
							  <button>Enviar</button>
						  </div>
					  </form>
				  </div>
			  </div>

		  </div>

	  </Parallax>
	);
};

export default withApp(Footer);