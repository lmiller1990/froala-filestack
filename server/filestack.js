import filestack from "filestack-js";
import fetch from "node-fetch";

const client = filestack.init(process.env.FILESTACK_API_KEY);

/**
 * @param {Buffer} buffer
 * @returns {Promise<{ link: String }>}
 */
export async function postFile(buffer) {
  const data = await fetch(
    `https://www.filestackapi.com/api/store/S3?key=${process.env.FILESTACK_API_KEY}`,
    {
      method: "POST",
      body: buffer,
      headers: { "Content-Type": "image/png" },
    }
  );
  const response = await data.json()
  console.log(response)
  return { link: response.url };
}
