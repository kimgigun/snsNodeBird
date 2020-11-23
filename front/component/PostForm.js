import {Button, Form} from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import React, {useCallback, useState, useRef} from 'react';

import {Input} from 'antd';
import {addPost} from '../reducers/post'


const PostForm = () => {

    const {imagePath} = useSelector((state) => state.post);
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const imageInput = useRef();

    const onChangeContent = useCallback((e)=>{
        setContent(e.target.current);
        },
        []
    );
    const onSubmit = useCallback( () => {
            dispatch(addPost(content));
            setContent('');
        },
        []
    );

    const onClickImageUpload = useCallback(()=>{
        imageInput.current.click();
    },[imageInout.current]);

    return (
        <Form style={{matgin:'10px 0 20px'}} encType="multypart/form-data" onFinish={onSubmit}>
            <Input.TextArea 
            value={content} 
            onChange={onChangeContent}
            maxLength={140}
            placeholer={'what up'}/>
            <input type="file" multiple hidden ref={imageInput}/>
            <Button onClick={onClickImageUpload}> Image upload</Button>
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