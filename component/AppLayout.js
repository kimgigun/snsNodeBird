import react, {useState, Component} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';   //next 에서는 react router 를 사용하지 않고 next/link 를 사용한다.
import {Menu, Row, Col, Input} from 'antd';
import LoginForm from './LoginForm'
import UserProfile from './UserProfile';
//import 'antd/dist/antd.css';

import {useSelector} from 'react-redux';

// const SearchInput = styled(Input.Search)`
//  vertical-align:middle;
// `

function AppLayout({children}) {

    const isLoggedIn = useSelector(state => ({user:state.user.isLoggedIn})); //isLoggedIn 값이 변하면 자동으로 갱신된다.
    console.log(isLoggedIn);
    return (
        <>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search style={{verticalAlign:'middle'}}/>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
        
            <Row>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile/> : <LoginForm/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col>
                </Col>
            </Row>
        </>
    )
}

AppLayout.propTypes = {
    children:PropTypes.node.isRequired
}
export default AppLayout
