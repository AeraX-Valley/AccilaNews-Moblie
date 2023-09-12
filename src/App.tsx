import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";

// Components
import Home from './component/Home/Home';
import MapStarter from "./component/MapStarter/mapstarter";
import Selected from "./component/Selected/selected";
import MapDestinition from "./component/MapDestinition/mapdestinition";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/mapstarter" element={<MapStarter />} />
                    <Route path="/selected" element={<Selected />} />
                    <Route path="/mapdestinition" element={<MapDestinition />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
