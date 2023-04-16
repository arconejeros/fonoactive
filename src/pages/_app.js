import '@/styles/globals.css'
import AppContext, {withApp} from "../contexts/appContext";
import Header from "@/components/Header";
import CheckContext from "@/components/CheckContext";
import MobileHeader from "@/components/MobileHeader";

function App({Component, pageProps}) {
	return (
	  <AppContext.Provider>
		  <Header/>
		  <MobileHeader>
		  	<Component {...pageProps} />
		  </MobileHeader>
	  </AppContext.Provider>
	)
}

export default App;
