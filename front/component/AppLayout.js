import {useState} from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';   //next 에서는 react router 를 사용하지 않고 next/link 를 사용한다.
import {Menu, Row, Col, Input} from 'antd';
import LoginForm from './LoginForm'
import UserProfile from './UserProfile';
//import 'antd/dist/antd.css';
import styled from 'styled-components'

// const SearchInput = styled(Input.Search)`
//  vertical-align:middle;
// `

function AppLayout({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
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
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children:PropTypes.node.isRequired
}
export default AppLayout
