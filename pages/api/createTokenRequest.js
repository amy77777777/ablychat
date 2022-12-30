import Ably from "ably/promises";

export default async function handler(req, res) {
    // const client = new Ably.Realtime(process.env.ABLY_API_KEY);
    const client = new Ably.Realtime('v7z2AQ.bJ271w:3mZneyKw1JpAr_d_kbyhWk4JM6DYnCYZE-7KogWGdBg');
    const tokenRequestData = await client.auth.createTokenRequest({ clientId: 'ably-nextjs-demo' });
    res.status(200).json(tokenRequestData);
};