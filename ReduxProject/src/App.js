import Header from './containers/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetail';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<ProductListing/>} />
                    <Route exact path="/product/productId" element={<ProductDetails/>} />
                    <Route> 404Not Found </Route>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
