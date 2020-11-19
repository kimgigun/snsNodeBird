import React from 'react'
import AppLayout from '../component/AppLayout'
import Head from 'next/head'
import {useSelector} from 'react-redux'
import PostCard from '../component/PostCard'
import PostForm from '../component/PostForm'


function Home() {
    const {isLoggedIn} = useSelector((state)=>state.user);
    const {mainPosts} = useSelector((state)=>state.post);
    
    return (
        <>
            <Head>
                <title>welcome to home</title>
            </Head>
            <AppLayout>
                {isLoggedIn && <PostForm/> }
                {mainPosts.map((post) => <PostCard key={post.id} post={post}/>)}
            </AppLayout>
        </>
    )
}

export default Home;
