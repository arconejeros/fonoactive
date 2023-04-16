import Head from 'next/head'
import HomePage from "@/views/Home";
import Header from "@/components/Header";
import styles from "@/styles/Home.module.scss";
import {useEffect} from "react";
import {withApp} from "@/contexts/appContext";
import {baseUrl, isProd} from "@/utils/utils";

function Home({app, sliders, articulos, setComoFunciona, comoFunciona, config}) {
	useEffect(() => {
		app.setSliders(sliders)
		app.setArticulos(articulos)
		app.setComoFunciona(comoFunciona)
		app.setConfig(config?.config)
	}, [])

	return (
	  <>
		  <Head>
			  <title>Fonoactive</title>
			  <meta name="description" content="Fonoactive"/>
			  <meta name="viewport" content="width=device-width, initial-scale=1"/>
			  <link rel="icon" href="/favicon.ico"/>
		  </Head>
		  <div className={styles.mainContainer}>
			  <HomePage/>
		  </div>
	  </>
	)
}
export async function getStaticProps(context) {
	const configRes = await fetch(`${baseUrl}/api/configuracion`);
	const config = await configRes.json();
	const res = await fetch(`${baseUrl}/api/sliders`);
	const sliders = await res.json();
	const resArticulos = await fetch(`${baseUrl}/api/articulos`);
	const articulos = await resArticulos.json();
	const resComoFunciona = await fetch(`${baseUrl}/api/como-funciona`);
	const comoFunciona = await resComoFunciona.json();
	return {
		props: {
			sliders: sliders.docs || [],
			articulos: articulos.docs || [],
			comoFunciona: comoFunciona.docs || [],
			config: config.docs[0] || {},
		}, // will be passed to the page component as props
	}
}


export default withApp(Home);
