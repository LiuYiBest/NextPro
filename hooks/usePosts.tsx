import {useEffect, useState} from "react";
import axios from "axios";

//自定义hhoks
export const usePosts = () => {

    type Post = {
        id: string;
        date: string;
        title: string;
    }
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])
    const [isEmpty, setIsEmpty] = useState(false)
    //导出路径地址
    useEffect(() => {
        setIsLoading(true)
        axios.get('api/v1/posts').then(x => {
            console.log('xxx', x)
        }, () => {
            setIsLoading(false)
        })
    }, [])
    return {posts,setPosts,isEmpty,isLoading,setIsLoading,setIsEmpty}
}
