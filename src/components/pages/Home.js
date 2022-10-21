import React, { useEffect } from 'react'
import Header from '../section/Header'
import Blogs from '../blog/Blogs'

function Home() {

    useEffect(() => {
        document.title = "React Blog"
    }, [])

    return (
        <div className='index-page'>
            <Header />
            <Blogs />
        </div>
    )
}

export default Home