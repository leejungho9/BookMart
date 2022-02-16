import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";


export default function Books() {
    const {books} = useContext(AppStateContext);

    return (
    <div className="books">
        {books.map((book)=> {
            const {id, title, artist, desc, imgUrl, price} = book;
            return (
                <div className="book" key={id}>
                    <div >
                        <img src={imgUrl} alt="book"/>
                       <div className="book__title">
                           { title   }
                        </div>
                        <div className="plus">
                           <button className="btn__plus">+</button> 
                        </div>
                            <p className="book__aritist">{artist}</p>
                            <p className="book__desc">{desc}</p>
                            <p className="book__price">{price} 원</p>
                    </div>
                </div>
            );
        })}
    </div>
    )
} 