import React from 'react'
import AppLayout from '../component/AppLayout'
import Head from 'next/head'  //next 에서 head 는 지원해준다.
import NickNameEditForm from '../component/NickNameEditForm';
import FollowList from '../component/FollowList.js'

function profile() {
    const followerList = [{nickname: '김군'}, {nickname:'이군'}, {nickname:'박군'}];
    const followingList = [{nickname: '김군1'}, {nickname:'이군2'}, {nickname:'박군3'}];
    
    return (
        <>
            <Head>
                <title>profile</title>
            </Head>
            <AppLayout>
                <NickNameEditForm/>
                <FollowList header="팔로잉목록" data={followerList}/>
                <FollowList header="팔로워목록" data={followingList}/>
            </AppLayout>
        </>
    )
}


export default profile
