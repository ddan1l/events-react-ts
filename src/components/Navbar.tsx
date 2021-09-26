import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";


export const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify="start">
                {
                    isAuth ?
                        <>
                            <div style={{color: 'white'}}>{user.username}</div>
                            <Menu theme="dark" mode="horizontal"  selectable={false}>
                                <Menu.Item onClick={logout} key="mail2">Выйти</Menu.Item>
                            </Menu>
                        </>
                        :
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={2}>Логин</Menu.Item>
                        </Menu>
                }
            </Row>
        </Layout.Header>
    );


};

export default Navbar;