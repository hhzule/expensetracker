
export interface initialStateType {
    Transaction: {
      id: number;
      text: string;
      amount: number;
    }[];

    deleteTransaction: (id: number) => void;
    addTransaction: (transaction: TransactionType) => void;
  };

 
  export type Actions =
    | { type: "DELETE_TRANSACTION"; payload: number }
    | { type: "ADD_TRANSACTION"; payload: TransactionType };
  
 
  export type TransactionType  = {
    id: number;
    text: string;
    amount: number;
  };
  
  
  export type TransactionPropType = {
    trans: { id: number; text: string; amount: number };
  };
  