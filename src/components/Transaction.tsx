import React, { useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {TransactionPropType} from '../Types';

 export const TransactionD: React.FC<TransactionPropType> = ({ trans}) => {

const { deleteTransaction } = useContext(GlobalContext);

     const sign = trans.amount < 0 ? '-' : '+';
     return(
         <div>
           
             <li className={trans.amount < 0 ? 'minus': 'plus' }>{trans.text}
                <span>{sign} Rs {Math.abs(trans.amount)}</span><button onClick={()=> deleteTransaction(trans.id)} className="delete-btn">x</button></li>
         </div>
     )
 }
   /* class="minus" red, class='plus' green */