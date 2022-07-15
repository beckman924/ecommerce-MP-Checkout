export default function handler(req, res) {
  if (req.method === "POST") {
    const responseMP = req.body;
    res.status(200).json(responseMP);
  }
}
