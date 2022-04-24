import NextPage from 'next'
import React, {useEffect, useState} from 'react'
import axios from "axios";

type Post = {
    id: string;
    date: string;
    title: string;
}
// @ts-ignore
const postsIndex: NextPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        setIsLoading(true)
        axios.get('api/v1/posts').then(x => {
            console.log('xxx', x)
        }, () => {
            setIsLoading(false)
        })
    }, [])
    return (
        <div>
            <h1>文章</h1>
            {isLoading?<div>加载中</div>:
            posts.map(p => <div key={p.id}>
                {p.id}
            </div>)}
        </div>
    )
}
