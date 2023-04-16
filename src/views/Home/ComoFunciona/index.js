import React from 'react';
import styles from "./index.module.scss";
import {withApp} from "@/contexts/appContext";

const ComoFunciona = ({app: { comoFunciona, config }}) => {
	return (
	  <div className={styles.container}>
		  <div className={styles.innerContainer}>
			  <div className={styles.title}>
				  {config?.comoFuncionaTitulo}
			  </div>
			  <div className={styles.itemsContainer}>
				  {comoFunciona?.filter(f => f.enabled).map((item, i) => (
					<div className={styles.item} key={i}>
						<div className={styles.icon}></div>
						<div className={styles.text}>{item.content}</div>
					</div>
				  ))}
			  </div>
		  </div>
	  </div>
	)
	  ;
};

export default withApp(ComoFunciona);