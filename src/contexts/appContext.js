import React, {useContext, useEffect, useState} from 'react';

import createContainer from 'constate';

const nameHOC = (Component, suffix = '') => `${
    Component.originalName
    || Component.displayName
    || Component.name
    || 'Component'
}${suffix}`;


function useAppContext() {
    const [loading, setLoading] = useState(false);
    const [sliders, setSliders] = useState([]);
    const [articulos, setArticulos] = useState([]);
    const [comoFunciona, setComoFunciona] = useState([]);
    const [config, setConfig] = useState({});
    const [drawerOpen, setDrawerOpen] = useState(false);

	const checkContext = () => {
		console.log("checkContext!!!")
	}


    return {
        loading,
        setLoading,
		sliders,
		setSliders,
		articulos,
		setArticulos,
		comoFunciona,
		setComoFunciona,
		config,
		setConfig,
		drawerOpen,
		setDrawerOpen,
		checkContext
    };
}

const AppContext = createContainer(useAppContext);

const withApp = (WrappedComponent) => {
    const {getInitialProps} = WrappedComponent;
    const ComponentWithAppData = function (props) {
        const appDataWithState = useContext(AppContext.Context);
        return <WrappedComponent {...props} app={appDataWithState}/>;
    };
    if (typeof getInitialProps === 'function') {
        ComponentWithAppData.getInitialProps = getInitialProps;
    }
    ComponentWithAppData.originalName = nameHOC(WrappedComponent);
    ComponentWithAppData.displayName = nameHOC(WrappedComponent, 'WithApp');
    return ComponentWithAppData;
};

export default AppContext;
export {withApp};
