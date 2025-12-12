import axios from 'axios';
export async function generateImage(prompt: string) {
  const res = await axios.post(process.env.AI_IMAGE_ENDPOINT || '', { prompt }, {
    headers: { Authorization: `Bearer ${process.env.AI_API_KEY}` }
  });
  return res.data;
}
