declare module 'midtrans-client' {
    export class Snap {
      constructor(config: { isProduction: boolean; serverKey: string; clientKey: string });
      createTransaction(params: {
        transaction_details: {
          order_id: string;
          gross_amount: number;
        };
      }): Promise<{ token: string; redirect_url: string }>;
    }
  
    export class CoreApi {
      constructor(config: { isProduction: boolean; serverKey: string; clientKey: string });
      charge(params: any): Promise<any>;
    }
  }
  