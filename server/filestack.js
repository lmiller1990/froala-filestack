import filestack from "filestack-js";
import fetch from "node-fetch";

const client = filestack.init(process.env.FILESTACK_API_KEY);

/**
 * @param {File} file
 * @returns {Promise<{ link: String }>}
 */
export async function postFile(file) {
  const data = await fetch(
    `https://www.filestackapi.com/api/store/S3?key=${process.env.FILESTACK_API_KEY}`,
    {
      method: "POST",
      body: file,
      headers: { "Content-Type": "image/png" },
    }
  );
  const { url } = await data.json();
  return { link: url };
}
