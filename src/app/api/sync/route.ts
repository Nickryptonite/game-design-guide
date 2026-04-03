import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing sync id" }, { status: 400 });
  }

  try {
    const data = await redis.get(`sync:${id}`);
    return NextResponse.json({ state: data || {} });
  } catch (err) {
    console.error("Redis GET Error", err);
    return NextResponse.json({ error: "Failed to fetch sync state" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, state } = body;

    if (!id || !state) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // Keep state simple JSON
    await redis.set(`sync:${id}`, state);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Redis POST Error", err);
    return NextResponse.json({ error: "Failed to save sync state" }, { status: 500 });
  }
}
