
import {Form, Input} from 'antd'
import {useMemo} from 'react'

function NickNameEditForm() {

const style = useMemo(()=>({marginBottom: '20px', border:'1px solid '})) 

    return (
        <Form style={style}>
            <Input.Search addonBefore="닉네임" enterButton="수정"></Input.Search>
        </Form>
    )
}

export default NickNameEditForm
