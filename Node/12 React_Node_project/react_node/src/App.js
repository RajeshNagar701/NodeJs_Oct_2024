import { BrowserRouter, Routes,Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Dashboard from "./admin/Dashboard";
import Add_service from "./admin/Add_service";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
    return (
       <>
       <BrowserRouter>
       <ToastContainer></ToastContainer>
        <Routes>
            <Route  path="/" element={<Home></Home>}></Route>
            
            
            <Route path="/admin-login" element={ <Login/> }></Route>
            <Route path="/dashboard" element={ <Dashboard/> }></Route>
            <Route path="/add_service" element={ <Add_service/> }></Route>



        </Routes>
       </BrowserRouter>
       </>
                    
    );
}

export default App;
