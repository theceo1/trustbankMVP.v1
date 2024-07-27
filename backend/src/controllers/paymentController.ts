import expressAsyncHandler from 'express-async-handler';
import Flutterwave from 'flutterwave-node-v3';

const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY ?? '', process.env.FLW_SECRET_KEY ?? '');

const examplePaymentFunction = expressAsyncHandler(async (req, res) => {
  const payload = {
    tx_ref: "hooli-tx-1920bbtytty",
    amount: "100",
    currency: "NGN",
    redirect_url: "https://www.google.com",
    payment_options: "card",
    customer: {
      email: "user@example.com",
      phonenumber: "080****4528",
      name: "Yemi Desola",
    },
    customizations: {
      title: "Pied Piper Payments",
      description: "Middleout isn't free. Pay the price",
      logo: "https://assets.piedpiper.com/logo.png",
    },
  };

  try {
    const response = await flw.Transaction.initiate(payload);
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
