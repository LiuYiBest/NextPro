import {NextApiHandler, NextApiRequest, NextApiResponse} from "next";

const Posts:NextApiHandler = (req:NextApiRequest,res:NextApiResponse)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify({name:'chun'}))
    res.end()
};
export default Posts;
