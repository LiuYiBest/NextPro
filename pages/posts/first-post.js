import React from "react";
import Link from "next/link";
import {Head} from "next/document";

console.log('执行了')
export  default function fnc(){
    return(
        <React.Fragment>
            <Head>
                <title>文章</title>
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover" />
            </Head>
        <div>first Post
            <hr/>
            回到首页<Link href="/">  <a >回到首页</a></Link>
        </div>
        </React.Fragment>
    )
}
