export default function handler(req, res) {
  if (req.method === "POST") {
    req.responseMP = req.body;
    res.status(200).send("OK");
  }
  if (req.method === "GET") {
    res.json(req.responseMP);
  }
}
