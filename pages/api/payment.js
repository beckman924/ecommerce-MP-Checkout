const PaymentController = require("../../controllers/PaymentsController");
const PaymentService = require("../../services/PaymentsService");
const PaymentInstance = new PaymentController(new PaymentService());

export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    PaymentInstance.getPaymentLink(req, res);
  } else {
    // Handle any other HTTP method
    PaymentInstance.getPaymentLink(req, res);
  }
}
