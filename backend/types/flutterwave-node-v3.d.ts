declare module 'flutterwave-node-v3' {
    interface Customer {
      email: string;
      phonenumber: string;
      name: string;
    }
  
    interface Customizations {
      title: string;
      description: string;
      logo: string;
    }
  
    interface Payload {
      tx_ref: string;
      amount: string;
      currency: string;
      redirect_url: string;
      payment_options: string;
      customer: Customer;
      customizations: Customizations;
    }
  
    class Flutterwave {
      constructor(publicKey: string, secretKey: string);
      Transaction: {
        initiate(payload: Payload): Promise<any>;
      };
    }
  
    export = Flutterwave;
  }
  