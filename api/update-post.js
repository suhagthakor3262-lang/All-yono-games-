export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        error: "Title and description are required"
      });
    }

    // GitHub token अभी यहाँ नहीं डालना है.
    // Token बाद में Vercel Environment Variables में रखा जाएगा.

    return res.status(200).json({
      success: true,
      message: "Post data received successfully"
    });

  } catch (error) {
    return res.status(500).json({
      error: "Server error"
    });
  }
}
