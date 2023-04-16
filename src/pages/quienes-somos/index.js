import React, {useEffect} from 'react';
import styles from "./index.module.scss";
import Head from "next/head";
import Hero from "@/components/Hero";
import {serialize} from "@/utils/htmlGenerator";
import Footer from "@/components/Footer";
import {withApp} from "@/contexts/appContext";
import {baseUrl} from "@/utils/utils";

const QuienesSomos = ({app: {setConfig}, miembros, config}) => {
	useEffect(() => {
		setConfig(config?.config)
	}, [])

	const colors = [
		{bgColor: "#fcd4cb"},
		{bgColor: "#b3ddba"},
		{bgColor: "#b2d8f2"},
		{bgColor: "#385568", color: "#FFFFFF"},
		{bgColor: "#fef1ca"},
		{bgColor: "#fcd4cb"},
	]
	return (
	  <>
		  <Head>
			  <title>Fonoactive</title>
			  <meta name="description" content="Fonoactive"/>
			  <meta name="viewport" content="width=device-width, initial-scale=1"/>
			  <link rel="icon" href="/favicon.ico"/>
		  </Head>
		  <div className={styles.container}>
			  <Hero compact={true}
					subTitle={"Conoce a nuestro equipo"}
					img={"https://bambino.bold-themes-cdn.com/demo-02/wp-content/uploads/sites/3/2022/07/footer_background_04.jpg"}
			  />
			  <div className={styles.inner}>
				  <div className={styles.title}>Equipo de FonoActive</div>
				  <div className={styles.content}>
					  Centro Recreo se compone de un equipo multidisciplinario de profesionales dedicados a la atención
					  infanto-juvenil y familiar. Contamos con especialitas del ámbito de la psicología, psicopedagogía,
					  fonoaudiología y terapia ocupacional. Aquí nos presentamos:
				  </div>

				  <div className={styles.miembrosContainer}>
					  {miembros.map((miembro, index) => (
						<div className={styles.miembro} key={index.toString()}
							 style={{backgroundColor: colors[index].bgColor}}
						>
							<div className={styles.name}>
								{miembro.name} {miembro.lastName}

							</div>
							<div className={styles.cargo}>
								<ion-icon name="ribbon-outline"></ion-icon>
								{miembro.cargo}
							</div>

							<img src={miembro.profilePhoto.url} alt={miembro.name}/>
							<div className={styles.resumen}>
								{miembro?.bio.map(a => serialize(a.children))}
							</div>
						</div>
					  ))}
				  </div>
			  </div>

			  <Footer/>
		  </div>
	  </>
	);
};

export async function getStaticProps(context) {
	const res = await fetch(`${baseUrl}/api/miembros`);
	const miembros = await res.json();
	const configRes = await fetch(`${baseUrl}/api/configuracion`);
	const config = await configRes.json();
	return {
		props: {
			miembros: miembros.docs || [],
			config: config.docs[0] || {},
		}, // will be passed to the page component as props
	}
}


export default withApp(QuienesSomos);