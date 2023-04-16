import React from 'react';
import styles from "./index.module.scss";
import Head from "next/head";
import Hero from "@/components/Hero";
import moment from "moment";
import {kebabCase} from "lodash";
import Footer from "@/components/Footer";
import {serialize} from "@/utils/htmlGenerator";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import {baseUrl} from "@/utils/utils";

const Articulo = ({articulo, articulos}) => {
	return (
	  <>
		  <Head>
			  <title>Fonoactive - Blog</title>
			  <meta name="description" content="Fonoactive"/>
			  <meta name="viewport" content="width=device-width, initial-scale=1"/>
			  <link rel="icon" href="/favicon.ico"/>
		  </Head>
		  <div className={styles.container}>
			  <Hero title="Nuestro blog" subTitle={"Revisa nuestras recientes noticias"}/>
			  <div className={styles.contentContainer}>
				  <div className={styles.postContent}>
					  <div className={styles.tagsContainer}>
						  {articulo.tags?.map((tag, index) => (
							<Link href={`/blog/tags/${kebabCase(tag.name)}`} key={index.toString()}>
								<div className={styles.tag} key={index.toString()}>{tag.name}</div>
							</Link>
						  ))}
					  </div>
					  <div className={styles.title}>
						  {articulo.title}
					  </div>
					  <div className={styles.date}>
						  {moment(articulo.createdAt, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('Do MMMM  YYYY')}
					  </div>

					  <div className={styles.mainCover}
						   style={{backgroundImage: `url('${articulo?.cover?.url}')`}}
					  />

					  <div className={styles.content}>
						  {articulo?.content?.map(a => serialize(a.children))}
					  </div>

					  <div className={styles.shareRow}>
						  <div className={styles.tagsContainer}>
							  {articulo.tags?.map((tag, index) => (
								<div className={styles.tag} key={index.toString()}>{tag.name}</div>
							  ))}
						  </div>
						  <div className={styles.socialsContainer}>
							  <div className={styles.socialIcon}>
								  <ion-icon name="logo-facebook"></ion-icon>
							  </div>
							  <div className={styles.socialIcon}>
								  <ion-icon name="logo-twitter"></ion-icon>
							  </div>
							  <div className={styles.socialIcon}>
								  <ion-icon name="logo-linkedin"></ion-icon>
							  </div>
							  <div className={styles.socialIcon}>
								  <ion-icon name="logo-whatsapp"></ion-icon>
							  </div>
						  </div>
					  </div>
				  </div>
				  <Sidebar articulos={articulos}/>
			  </div>

			  <Footer/>
		  </div>
	  </>
	);
};

export async function getServerSideProps(context) {
	const articleSlug = context.params.article
	const resArticulo = await fetch(`${baseUrl}/api/articulos?where%5Bslug%5D%5Bequals%5D=${articleSlug}`);
	const articulo = await resArticulo.json();
	const resArticulos = await fetch(`${baseUrl}/api/articulos`);
	const articulos = await resArticulos.json();
	return {
		props: {
			articulo: articulo.docs[0] || {},
			articulos: articulos.docs || [],
		}, // will be passed to the page component as props
	}
}


export default Articulo;