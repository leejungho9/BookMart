import { useContext, useMemo } from "react";
import Context from "../contexts/Context";

export default function Orders() {
const  {orders} = useContext(Context);
const  {books} = useContext(Context);
const {remove, removeAll} = useContext(Context);

const totalPrice = useMemo(()=> {
    return orders.map((order) => {
        const {id, quantity} = order;
        const booked = books.find((book) => book.id === id);
        const totalPrice = booked.price * quantity
        return totalPrice;
    }).reduce((previousValue, currentValue) => previousValue +  currentValue,0)
    .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
},[orders, books])




if(orders.length === 0) {
        return(
            <aside>
            <div className="Noorder">
                <div className="title">You don't have any books</div>
                <div className="subtitle">Click on a + to add an books</div>
            </div>
            </aside>);
        }


        return (
            <aside>
                <div className ="body">
                    {orders.map((order) => {
                        const {id, quantity} = order;
                        const {title, imgUrl, price} = books.find(b => b.id ===id);
      
                        const click = () => {
                            remove(id);
                        }

                        const r = price * quantity
                        const rprice = r.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        
                        return (
                            <div className="order" key={id}>
                            <img className="img"src={imgUrl} alt="book"></img>
                            <div className="order__content">
                                <p className="order__title">
                                    {title} x {quantity}
                                </p>
                                <p className="order__price">
                                     {rprice} 원
                                </p> 
                                <p className="btn__remove" onClick={click} >
                                    x
                                </p>
                            </div>
                        </div>)
                    })}
                <div className="total">
                    <hr/>
                    <div className="total___content">
                        <p className="total__item">Total </p>
                        <p className="price">{totalPrice}원</p>
                        <p className="btn__remove" onClick={removeAll}>
                                    x
                        </p>
                    </div> 
                </div>
                </div>

            </aside>
        )
    }