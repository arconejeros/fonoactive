import React from 'react';
import styles from "./index.module.scss";
import Slider from "@/views/Home/Slider";
import MainArticles from "@/views/Home/MainArticles";
import FeaturedArticle from "@/views/Home/FeaturedArticle";
import ComoFunciona from "@/views/Home/ComoFunciona";
import Infografia from "@/views/Home/Infografia";
import Precios from "@/views/Home/Precios";
import Footer from "@/components/Footer";
import {withApp} from "@/contexts/appContext";

const Home = ({app: { articulos }}) => {
	return (
	  <div className={styles.container}>
		  <Slider />
		  <MainArticles />
		  {articulos.filter(f => f.highlightEnabled).map((articulo, index) => (
			<FeaturedArticle key={index.toString()}  articulo={articulo} position={index % 2 === 0 ?"left" : "right"} />
		  ))}
		  <ComoFunciona />
		  <Infografia />
		  <Precios />
		  <Footer />
	  </div>
	);
};


export default withApp(Home);