const axios = require("axios");

class PaymentService {
  async createPayment(req) {
    const url = "https://api.mercadopago.com/checkout/preferences";
    const { id, title, price, uploadedImg } = req.body;

    const body = {
      payment_methods: {
        installments: 6,
        excluded_payment_methods: [{ id: "visa" }],
      },
      payer: {
        name: "Lalo",
        surname: "Landa",
        email: "test_user_63274575@testuser.com",
        phone: {
          area_code: 11,
          number: 2604926453,
        },
        address: {
          street_name: "Falsa",
          street_number: 123,
          zip_code: 5600,
        },
      },
      items: [
        {
          id: id,
          title: title,
          description: "Dispositivo móvil de Tienda e-commerce",
          picture_url: uploadedImg,
          quantity: 1,
          unit_price: parseFloat(price),
        },
      ],
      external_reference: "test_user_63274575@testuser.com",
      back_urls: {
        failure: "http://localhost:3000/failure_payment",
        pending: "http://localhost:3000/pending_payment",
        success: "http://localhost:3000/success_payment",
      },
      total_amount: price,
      auto_return: "approved",
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    });

    return payment.data;
  }
}

module.exports = PaymentService;
