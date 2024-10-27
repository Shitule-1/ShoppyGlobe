// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";


function App() {
    return (<>
       <Header/>
       <Outlet/>
          
    </>
        
    );
}

export default App;
