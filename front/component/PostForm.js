import {Button, Form} from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import React, {useCallback, useState} from 'react';
import {Input} from 'antd';
import {addPost} from '../reducers/post'


const PostForm = () => {

    const {imagePath} = useSelector((state) => state.post);
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const onChangeText = useCallback((e)=>{
            setText(e.target.current);
        },
        []
    );
    const onSubmit = useCallback( () => {
            dispatch(addPost(text))
        },
        []
    );

    return (
        <Form style={{matgin:'10px 0 20px'}} encType="multypart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
            value={text} 
            onChange={onChangeText}
            maxLength={140}
            placeholer={`what's up?`}/>
            <input type="file" multople-hidden/>
            <Button> Image upload</Button>
            <Button type="primary" style={{float:'right'}} htmlType="onSubmit">zzi</Button>
            <div>
            {imagePath && imagePath.map((v)=>(
                <div key={v} style={{display:'inline-block'}}>
                    <img src={v} style={{width:'200px'}} alt={''}/>
                    <div>
                        <Button>제거</Button>
                    </div>
                </div>
            ))}
            </div>
        </Form>
      
    )

}

export default PostForm;