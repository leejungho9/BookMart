import { useContext } from "react";
import Context from "../contexts/Context";



export default function Books() {
    const {books} = useContext(Context);
    const {addToOrder} = useContext(Context);
    return (
        <div className="books">
        {books.map((book)=> {
            const {id, title, artist, desc, imgUrl, price} = book;
            const click = () => {
                addToOrder(id);
            }
            const rprice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return (
                <div className="book" key={id}>
                    <div >
                        <img src={imgUrl} alt="book"/>
                       <div className="content">
                           <div className="book__title">
                               { title   }
                            </div>
                            <div className="plus">
                               <button className="btn__plus" onClick={click}>+</button>
                            </div>
                                <p className="book__aritist">{artist}</p>
                                <p className="book__desc">{desc}</p>
                                <p className="book__price">{rprice} 원</p>
                       </div>
                    </div>
                </div>
            );
        })}
    </div>
    )
} 