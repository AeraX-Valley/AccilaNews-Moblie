import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";

// Components
import Home from './component/Home/Home';
import MapStarter from "./component/MapStarter/mapstarter";
import Selected from "./component/Selected/selected";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/mapstarter" element={<MapStarter />} />
                    <Route path="/selected" element={<Selected />} />
                </Routes>
            </Router>
        </>
    )
}

export default App
