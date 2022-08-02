export interface Cart {
    success: boolean;
    data: [{ 
        user_id : string;
        product_id: string;
        quant: number;
        quant_minus?: number;
    }];
    message: string;
}