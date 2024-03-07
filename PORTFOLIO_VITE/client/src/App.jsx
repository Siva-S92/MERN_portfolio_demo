import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import { useEffect } from "react";
import Loader from "./pages/home/Loader";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import { setPortfolioData, showLoading, hideLoading, setReloadData } from "./redux/portfolioSlice";
import Admin from "./pages/admin/Admin";
import Login from "./pages/admin/Login";


function App() {
  const {loading, portfolioData, reloadData} = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();
  

  const getPortfolioData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get(`http://localhost:5000/api/portfolio/get-portfoliodata`);
      dispatch(setPortfolioData(response.data));
      dispatch(setReloadData(false));
      dispatch(hideLoading());
    } catch (error) {
      dispatch(hideLoading());
      console.error(error)
    }
  }

  useEffect(()=>{
    if(!portfolioData){
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(()=>{
    if(reloadData){
      getPortfolioData();
    }
  }, [reloadData]);


  return (
    <BrowserRouter>
      {loading ? <Loader/> : null}
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/admin" element={<Admin/>} ></Route>
        <Route path="/admin-login" element={<Login/>} ></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
