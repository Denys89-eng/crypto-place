import React, {useEffect} from "react";
import './App.css'
import NavBar from "./components/NavBar";
import {Layout, Space, Typography} from "antd";
import {Link, Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/Exchanges";
import News from "./components/News";
import CryptoDetails from "./components/CryptoDetails";


const App = () => {

    return (
        <div className='app'>
            <div className='wrap'>
                <div className='navbar'>
                    <NavBar/>
                </div>
                <div className='main'>
                        <Routes>
                            <Route index element={<Homepage/>}/>
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                            <Route path='/exchanges' element={<Exchanges/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
                        </Routes>
                    <div className='footer' style={{textAlign: 'center'}}>
                        <Typography.Title level={3} style={{color: "white"}}>
                            Crypto-place <br/>
                            All rights reserved
                        </Typography.Title>
                        <Space>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/exchanges'}>Exchanges</Link>
                            <Link to={'/news'}>News</Link>
                        </Space>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default App