import React from 'react';
import Blog from "@/pages/blog";
import {capitalize} from "lodash";
import {baseUrl} from "@/utils/utils";

const Search = ({ articulos, searchTerm }) => {
	return (
	  <Blog articulos={articulos} tag={searchTerm} />
	);
};

export async function getServerSideProps(context) {
	const searchTerm = capitalize(context.params.searchTerm)
	const resArticulos = await fetch(`${baseUrl}/api/articulos?where%5Btitle%5D%5Blike%5D=${searchTerm}`);
	const articulos = await resArticulos.json();
	return {
		props: {
			articulos: articulos.docs || [],
			searchTerm
		},
	}
}

export default Search;