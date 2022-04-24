import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import fs,{promises as fsPromise} from 'fs'
import path from "path/posix";
// @ts-ignore
import {getPosts} from '../../../lib/posts';


const Posts:NextApiHandler = async (req:NextApiRequest,res:NextApiResponse)=>{
    const posts = await getPosts()
    res.statusCode = 200
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(posts))
    res.end()
};
export default Posts;
