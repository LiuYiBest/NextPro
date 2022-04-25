import NextPage from 'next'
import React, {useEffect, useState} from 'react'
import axios from "axios";
import {usePosts} from "../../hooks/usePosts";

type Post = {
    id: string;
    date: string;
    title: string;
}
// @ts-ignore
const postsIndex: NextPage = () => {
const {isLoading,isEmpty,posts} = usePosts()
    return (
        <div>
            <h1>文章</h1>
            {isLoading?<div>加载中</div>:
                isEmpty?<div>没有完整</div>:
            posts.map(p => <div key={p.id}>
                {p.id}
            </div>)}
        </div>
    )
}
