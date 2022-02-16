
import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import datas from "../data/data"

const AppStateProvider = ({children})=> {
const {orders, setOrders} = useState([]);
const [books] = useState(datas);

const addToOrder = useCallback((id) => {

},[]);
const remove = useCallback((id) => {

},[]);
const removeAll = useCallback(() => {

},[]);

     return (
            <AppStateContext.Provider value={{ orders, books, addToOrder, remove, removeAll }}>
                {children}
            </AppStateContext.Provider>
            )
}

export default AppStateProvider;