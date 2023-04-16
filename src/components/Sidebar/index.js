import React, {useState} from 'react';
import styles from "./index.module.scss";
import Link from "next/link";
import moment from "moment/moment";
import {uniqBy} from "lodash/array";
import {flatten, kebabCase} from "lodash";
import {useRouter} from "next/router";


const Sidebar = ({articulos}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const router = useRouter()


	const searchHandler = (e) => {
		if(searchTerm===""){
			return false;
		}
		router.push(`/blog/search/${searchTerm}`)
	}
	return (
	  <div className={styles.sideBar}>
		  <div className={styles.searchBar}>
			  <input placeholder="Buscar..."
					 value={searchTerm}
					 onChange={e => setSearchTerm(e.target.value)}
					 type="text"/>
			  <button onClick={searchHandler}>
				  <ion-icon name="search-outline"></ion-icon>
			  </button>
		  </div>
		  <div className={styles.recentPostTitle}>
			  Post recientes
		  </div>
		  <div className={styles.recentPostsLists}>
			  {articulos.slice(0, 5).map((articulo, index) => (
				<Link href={`/blog/${articulo.slug}`} key={index.toString()}>
					<div key={index} className={styles.recentPost}>
						<div className={styles.cover}
							 style={{backgroundImage: `url('${articulo?.cover?.url}')`}}></div>
						<div className={styles.contentPart}>
							<div
							  className={styles.date}>{moment(articulo.createdAt, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('Do MMMM  YYYY')}</div>
							<div className={styles.title}>{articulo.title}</div>
						</div>
					</div>
				</Link>
			  ))}
		  </div>
		  <div className={styles.recentPostTitle}>
			  Categorias
		  </div>
		  <div className={styles.recentPostsLists}>
			  {uniqBy(flatten(articulos.filter(f => f.tags).map(a => a.tags)), "name")
				.map((tag, index) => (
				  <div className={styles.tagCont} key={index.toString()}>
					  <Link href={`/blog/tags/${kebabCase(tag.name)}`}>
						  {tag.name}
					  </Link>
				  </div>
				))}
		  </div>
	  </div>
	);
};

export default Sidebar;