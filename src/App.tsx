import "./App.css"
import { Provider } from "react-redux"
import { store } from "./store/store"

import { Clocks } from "./pages/Clocks/Clocks"
import { TimeZonesDataLayer } from "./layers/TimeZonesDataLayer"

function App() {
	return (
		<Provider store={store}>
			<TimeZonesDataLayer>
				<Clocks />
			</TimeZonesDataLayer>
		</Provider>
	)
}

export default App
