import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";
import fs,{promises as fsPromise} from 'fs'
import path from "path/posix";

//读取文件
const getPosts = async ()=>{
    const markdowDir = path.join(process.cwd(),'markdown')
    const filename = await fsPromise.readdir('markdowDir')
}

const Posts:NextApiHandler = (req:NextApiRequest,res:NextApiResponse)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({name:'chun'}))
    res.end()
};
export default Posts;
