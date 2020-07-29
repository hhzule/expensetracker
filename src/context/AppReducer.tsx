import { TransactionType, Actions } from '../Types';

export default (state: { Transaction: TransactionType[]}, action: Actions) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions: state.Transaction.filter(transaction => transaction.id !==
                    action.payload)
            }
            case 'ADD_TRANSACTION':
                return{
                    ...state,
                    transactions : [action.payload, ...state.Transaction]

                }
        default:
            return state
    }
}