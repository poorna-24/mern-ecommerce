import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
//key-value store
// import Redis from "ioredis";
// const client = new Redis();
// await client.set("foo", "bar");
