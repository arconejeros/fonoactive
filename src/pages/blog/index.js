import React from 'react';
import styles from "./index.module.scss";
import Head from "next/head";
import Hero from "@/components/Hero";
import classNames from "classnames";
import Link from "next/link";
import moment from "moment";
import {flatMap, flatMapDeep, flatMapDepth, flatten, get, kebabCase, uniq} from "lodash";
import {uniqBy} from "lodash/array";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import {baseUrl} from "@/utils/utils";

moment.locale('es', {
	  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
	  monthsShort: 'Enero._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.'.split('_'),
	  weekdays: 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado'.split('_'),
	  weekdaysShort: 'Dom._Lun._Mar._Mier._Jue._Vier._Sab.'.split('_'),
	  weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sa'.split('_')
  }
);


export const Blog = ({articulos, tag = false}) => {
	return (
	  <>
		  <Head>
			  <title>Fonoactive - Blog</title>
			  <meta name="description" content="Fonoactive"/>
			  <meta name="viewport" content="width=device-width, initial-scale=1"/>
			  <link rel="icon" href="/favicon.ico"/>
		  </Head>
		  <div className={styles.container}>
			  <Hero
				compact={true}
				title="Nuestro blog" subTitle={tag ? `Estas buscado: ${tag}` : "Revisa nuestras recientes noticias"}/>
			  <div className={styles.contentContainer}>
				  <div className={styles.postList}>
					  {articulos.map((articulo, index) =>
						(
						  <div key={index} className={classNames({
							  [styles.post]: true,
							  [styles.invert]: index % 2 !== 0,
						  })}>
							  <div className={styles.cover}
								   style={{backgroundImage: `url('${articulo?.cover?.url}')`}}></div>
							  <div className={styles.contentPart}>
								  <div className={styles.tagsContainer}>
									  {articulo.tags?.map((tag, index) => (
										<div className={styles.tag} key={index.toString()}>
											<Link href={`/blog/tags/${kebabCase(tag.name)}`}>
												{tag.name}
											</Link>
										</div>
									  ))}
								  </div>
								  <Link href={`/blog/${articulo.slug}`}>
									  <div className={styles.title}>
										  {articulo.title}
									  </div>
								  </Link>
								  <div className={styles.row}>
										<span className={styles.date}>
										March 30, 2022
										</span>
								  </div>
								  <div className={styles.socials}>
									  <div className={styles.social}>
										  <ion-icon name="logo-facebook"></ion-icon>
									  </div>
									  <div className={styles.social}>
										  <ion-icon name="logo-twitter"></ion-icon>
									  </div>
									  <div className={styles.social}>
										  <ion-icon name="logo-instagram"></ion-icon>
									  </div>
									  <div className={styles.social}>
										  <ion-icon name="logo-linkedin"></ion-icon>
									  </div>
									  <div className={styles.social}>
										  <ion-icon name="logo-whatsapp"></ion-icon>
									  </div>
								  </div>
							  </div>
						  </div>
						))}
				  </div>
				  <Sidebar articulos={articulos}/>
			  </div>

			  <Footer/>
		  </div>
	  </>
	);
};

export async function getServerSideProps(context) {
	const resArticulos = await fetch(`${baseUrl}/api/articulos`);
	const articulos = await resArticulos.json();
	return {
		props: {
			articulos: articulos.docs || [],
		},
	}
}


export default Blog;