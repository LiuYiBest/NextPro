//读取文件
import path from "path/posix";
import {promises as fsPromise} from "fs";

export const getPosts = async ()=>{
    const markdowDir = path.join(process.cwd(),'markdown')
    const filename = await fsPromise.readdir('markdowDir')
    console.log('filename',filename)
    return filename
}
