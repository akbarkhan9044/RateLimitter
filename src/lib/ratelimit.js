import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis=Redis.fromEnv();

export const ratelimit=new Ratelimit({
    redis:redis,
    limiter:Ratelimit.slidingWindow(2000,"10 s"),
    prefix:"@upstash/ratelimit",
    analytics:true
})