import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";

// Components
import Home from './component/Home/Home';
import MapStarter from "./component/MapStarter/mapstarter";
import Selected from "./component/Selected/selected";
import MapDestinition from "./component/MapDestinition/mapdestinition";
import MapStarter2 from "./component/MapStarter2/mapstarter2";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/mapstarter" element={<MapStarter />} />
                    <Route path="/selected" element={<Selected />} />
                    <Route path="/mapdestinition" element={<MapDestinition />} />
                    <Route path="/mapstarter2" element={<MapStarter2 />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
