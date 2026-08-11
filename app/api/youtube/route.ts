import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const handle = searchParams.get("handle");

  if (!handle) {
    return NextResponse.json({ error: "Handle is required" }, { status: 400 });
  }

  const API_KEY = process.env.YOUTUBE_API_KEY;

  // Fallback data jika API Key belum dipasang / limit habis
  if (!API_KEY) {
    return NextResponse.json({
      name: handle.replace("@", ""),
      handle: handle,
      avatar: "https://yt3.googleusercontent.com/ytc/AIdro_mQ2-a38f3MIsXo-d_rWzR_S4sZ=s160-c-k-c0x00ffffff-no-rj",
      subscribers: "Subscribers Loaded",
    });
  }

  try {
    // Fetch data channel berdasarkan handle
    const cleanHandle = handle.startsWith("@") ? handle : `@${handle}`;
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forHandle=${cleanHandle}&key=${API_KEY}`,
      { next: { revalidate: 86400 } } // Cache data selama 24 jam
    );

    const data = await res.json();

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ error: "Channel not found" }, { status: 404 });
    }

    const channel = data.items[0];
    const subCount = parseInt(channel.statistics.subscriberCount, 10);
    
    // Format subscriber count (misal: 14.5M atau 14,5 jt)
    let formattedSubs = `${subCount}`;
    if (subCount >= 1000000) {
      formattedSubs = `${(subCount / 1000000).toFixed(1).replace(".", ",")} jt`;
    } else if (subCount >= 1000) {
      formattedSubs = `${(subCount / 1000).toFixed(0)} rb`;
    }

    return NextResponse.json({
      name: channel.snippet.title,
      handle: cleanHandle,
      avatar: channel.snippet.thumbnails.default.url,
      subscribers: `${formattedSubs} subscriber`,
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}