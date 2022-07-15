export default function handler(req, res) {
  if (req.method === "POST") {
    const response = req.body;
    res.status(200).json(response);
  }
}
