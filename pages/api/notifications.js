const { ApprovedBuy } = require("../../controllers/NotificationsController");
export default function handler(req, res) {
  if (req.method === "POST") {
    ApprovedBuy(req, res);
  }
}
