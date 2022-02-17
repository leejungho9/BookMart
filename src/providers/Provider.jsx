
import { useCallback, useState } from "react";
import Context from "../contexts/Context";
import datas from "../data/data"

const Provider = ({children})=> {
const [orders, setOrders] = useState([]);
const [books] = useState(datas);

const addToOrder = useCallback((id) => {
    setOrders((orders) => {
        const finded = orders.find((order) => order.id === id );
        
        if(finded === undefined ){
            return [...orders, {id, quantity : 1}];
        } else {
            return orders.map((order) => {
                if(order.id  === id) {
                    return {
                        id ,quantity : order.quantity + 1
                    };
                }else {
                    return order;
                }
            })
        }
    });
    
},[]);
const remove = useCallback((id) => {
    setOrders((orders) => {
        return orders.filter((order) => order.id !== id);
    })
},[]);
const removeAll = useCallback(() => {
    setOrders([]);
},[]);

     return (
            <Context.Provider value={{ orders, books, addToOrder, remove, removeAll }}>
                {children}
            </Context.Provider>
            )
}

export default Provider;