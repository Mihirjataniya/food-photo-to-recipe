import { NextResponse } from 'next/server';

const vision = require('@google-cloud/vision');

const client = new vision.ImageAnnotatorClient({
  credentials: {
    client_email: process.env.GOOGLE_VISION_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_VISION_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
});

export async function POST(req) {
  try {
    const body = await req.json()
    const { imageUrl } = body
    console.log(imageUrl);
    console.log(client)
    const [result] = await client.labelDetection({
      image: {
        source: { imageUri: imageUrl },
      },
    });
    const labels = result.labelAnnotations;
    return NextResponse.json({
      message: "Labels fetched successfully",
      labels
    },
      { status: 200 })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Something went wrong",
      error
    },
      { status: 500 }
    )
  }
}