declare module 'flutterwave-node-v3' {
    export default class Flutterwave {
      constructor(publicKey: string, secretKey: string);
  
      // Define methods and properties as needed
      makePayment(paymentDetails: object): Promise<object>;
    }
  }
  