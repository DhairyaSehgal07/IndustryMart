import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom' 
import './bootstrap.min.css'
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen";
import OrderScreen from "./Screens/OrderScreen";
import UserListScreen from "./Screens/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen";
import ProductListScreen from "./Screens/ProductListScreen";
import ProductEditScreen from "./Screens/ProductEditScreen";
import OrderListScreen from "./Screens/OrderListScreen";
import AllProductsScreen from './Screens/AllProductsScreen';
import AutomobileScreen from './Screens/AutomobileScreen'
import BuildingScreen from './Screens/BuildingScreen'
import ElectronicsScreen from './Screens/ElectronicsScreen'
import IndustrialPlantsScreen from './Screens/IndustrialPlantsScreen'
import MetalsScreen from './Screens/MetalsScreen'
import AddNewProductScreen from './Screens/AddNewProductScreen'
  
function App() {
  return (
    
    <Router>

      <Header />
        <main className="py-3">
   
        <Container>
          <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route  path='/search/:keyword' element={<AllProductsScreen />} />
            <Route path='/' element={<HomeScreen />} />
            <Route path='/page/:pageNumber' element={<HomeScreen />} />
            <Route path='/search/:keyword/page/:pageNumber' element={<AllProductsScreen/>} />
             <Route path='/admin/productlist/:pageNumber' element={<ProductListScreen />} />
            <Route path='/product/:id' element={<ProductScreen />}></Route>
            <Route path='/cart' element={<CartScreen />}></Route>
            <Route path='/cart/:id' element={<CartScreen />}></Route>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/admin/userlist" element={<UserListScreen />} />
            <Route path="/admin/productlist" element={<ProductListScreen />} />
             <Route path="/admin/orderlist" element={<OrderListScreen />} />
            <Route path="/admin/product/:id/edit" element={<ProductEditScreen />} />
            <Route path="/admin/user/:id/edit" element={<UserEditScreen/>} />
            <Route path="/order/:id" element={<OrderScreen />} />
            <Route path="/AddNewProduct" element={<AddNewProductScreen />} />


         
            <Route path="/AllProducts" element={<AllProductsScreen />} />
            <Route path="/Automobile" element={<AutomobileScreen />} />
            <Route path="/Building" element={<BuildingScreen />} />
            <Route path="/Electronics" element={<ElectronicsScreen />} />
            <Route path="/IndustrialPlants" element={<IndustrialPlantsScreen />} />
              <Route path="/Metals" element={<MetalsScreen />} />
            
            
            
          </Routes>
               
          </Container>
          
        
   
      </main>
        <Footer />
      </Router>
    
  );
}

export default App;
