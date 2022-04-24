//读取文件
import path from "path/posix";
import {promises as fsPromise} from "fs";
import * as fs from "fs";
import matter from "gray-matter";

export const getPosts = async ()=>{
    const markdowDir = path.join(process.cwd(),'markdown')
    const filename = await fsPromise.readdir('markdowDir')
    const x =filename.map(filename=>{
        const id =filename.replace(/\.md$/g,'')
        const fullPath = path.join(markdowDir,filename)
        const text = fs.readFileSync(fullPath,"utf-8")
        const {data:{title,data},content} = matter(text)
        return{ id,title,data}
    })
    console.log('filename',filename)
    return filename
}
