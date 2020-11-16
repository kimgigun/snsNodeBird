import React from 'react'
import AppLayout from '../component/AppLayout'
import Head from 'next/head'

function Home() {
    return (
        <>
            <Head>
                <title>welcome to home</title>
            </Head>
            <AppLayout>
                index
            </AppLayout>
        </>
    )
}

export default Home;
