import { EllipsisOutlined, MessageOutlined, RetweetOutlined, HeartOutlined } from '@ant-design/icons';
import React from 'react';
import {Card, Button, Popover, Avatar, Image} from 'antd';
import PostImages from './PostImage';
import {useSelector} from 'react-redux';

function PostCard({post}){

    const id = useSelector((state) => state.user.me? state.user.me.id : state.user.me);

    return (
        <div>
            
            <div>포스트카드</div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images}/>}
                action={[
                    <RetweetOutlined key="retweet"/>,
                    <HeartOutlined key="heart"/>,
                    <MessageOutlined key="ommnet"/>,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger">삭제</Button>
                                </>
                            ) : <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined/>
                    </Popover>
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}>
                    title={post.nickname}
                    description={post.content}
                </Card.Meta>
            </Card>
            {/* <CommentForm/>
            <Comments/> */}
        </div>
    )
}

export default PostCard;
