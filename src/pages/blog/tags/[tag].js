import React from 'react';
import Blog from "@/pages/blog";
import {capitalize} from "lodash";
import {baseUrl} from "@/utils/utils";

const Tags = ({ articulos, tag }) => {
	return (
	  <Blog articulos={articulos} tag={tag} />
	);
};

export async function getServerSideProps(context) {
	const tag = capitalize(context.params.tag)
	const resArticulos = await fetch(`${baseUrl}/api/articulos?where%5Btags.name%5D%5Bequals%5D=${tag}`);
	const articulos = await resArticulos.json();
	return {
		props: {
			articulos: articulos.docs || [],
			tag
		},
	}
}

export default Tags;