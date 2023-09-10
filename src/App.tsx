import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";

// Components
import Home from './component/Home/Home';
import MapStarter from "./component/MapStarter/mapstarter";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/mapstarter" element={<MapStarter />} />
                    <Route path="/dashboard" element={<h1>Dashboard</h1>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
