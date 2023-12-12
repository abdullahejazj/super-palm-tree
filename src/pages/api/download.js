const youtubedl = require("youtube-dl-exec");

export default async function handler(req, res) {
  const { url } = req.body;

  try {
    if (!url) {
      return res.status(400).json({ message: "URL is required" });
    }

    // Download video information in JSON format
    const output = await youtubedl(url, { dumpSingleJson: true });

    return res.status(200).json(output);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error occurred", error: error.message });
  }
}
