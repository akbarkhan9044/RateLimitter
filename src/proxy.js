import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { ratelimit } from "./lib/ratelimit";
import { ratelimiter } from "./lib/ratelimits";
// const redis=Redis.fromEnv();

// const ratelimit=new Ratelimit({
//     redis:redis,
//     limiter:Ratelimit.slidingWindow(2,"5s"),
//     prefix:"@upstash/ratelimit"
// })
export async function proxy(request){

if(request.nextUrl.pathname.startsWith("/api")){
    console.log("Hi");
    let ip=request.ip;
    if(!ip){
        ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
    }
    console.log("Ip",ip);
    const {success,limit,reset,remaining}=await ratelimiter.limit(ip);
    //const {success,limit,reset,remaining}=await ratelimit.limit(ip);
    if(!success){
        return NextResponse.json({error:"Too many request"},{
            status:429,headers:{"Reset-After":reset.toString()}
        })
    }
}
return NextResponse.next();
}