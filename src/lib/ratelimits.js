import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis=Redis.fromEnv();

export const ratelimiter=new Ratelimit({
    redis:redis,
    limiter:Ratelimit.slidingWindow(30,"10 s"),
    prefix:"@upstash/ratelimit",
    analytics:true
    
})