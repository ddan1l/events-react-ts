import React, {FC, useEffect} from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import './App.css'
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";
import {useTypedSelector} from "./hooks/useTypedSelector";


const App: FC = () => {

    const {setUser, setIsAuth} = useActions();

    useEffect(() => {
        if (localStorage.getItem('isAuth')){
            setUser({username: localStorage.getItem('username' || '')} as IUser);
            setIsAuth(true);
        }
    }, [])

    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
};

export default App;