import NextPage from 'next'
import React, {useEffect, useState} from 'react'
import axios from "axios";

// @ts-ignore
const postsIndex: NextPage = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get('api/v1/posts').then(x => {
            console.log('xxx', x)
        })
    }, [])
    return (
        <div>
            posts Index
        </div>
    )
}
