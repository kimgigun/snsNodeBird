
import {Card, Button, Avatar} from 'antd';
import {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {logoutAction} from '../reducers/user'

function UserProfile() {

   const dispatch = useDispatch();
   const onLogOut = useCallback(()=>{dispatch(logoutAction())},[]);
        
    return (
        <div>
            <Card actions={[
                <div key="twit"><br/>트윗</div>,
                <div key="follow"><br/>팔로우</div>,
                <div key=""><br/>취소</div>,
            ]}>
            <Card.Meta avatar={<Avatar>hello</Avatar>} title="gigle"/>
                <Button onClick={onLogOut}>로그아웃</Button>
            </Card>
           
        </div>
    )
}

export default UserProfile;
