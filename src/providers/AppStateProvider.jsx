
import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";
import datas from "../data/data"

const AppStateProvider = ({children})=> {
const {orders, setOrders} = useState([]);
const [books] = useState([
    {
        id: "1",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : "http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },
    {
        id: "2",
        title: "물고기는 존재하지 않는다",
        artist: "룰루 밀러",
        desc: "물고기가 존재하지 않는다면, 우리가 이 세계에 관해 아직 모르고 있는 것은 또 뭐가 있을까? 또 어떤 범주들이 무너질 참일까? 구름도 생명이 있는 존재일 수 있을까? 누가 알겠는가. ",
        imgUrl : "http://image.yes24.com/goods/105526047/XL",
        price: 15300,
    },
    {
        id: "3",
        title: "윤석열 X파일 ",
        artist: "열린공감TV 취재팀",
        desc: "이 책은 20대 대통령에 출마한 윤석열 후보자를 집중적으로 검증하는 책이다. 윤석열 ‘본’인, ‘부’인 김건희, ‘장’모 최은순까지 이른바 ‘본부장 리스크’를 다룬 책이다.",
        imgUrl : "http://image.yes24.com/goods/106384872/XL",
        price: 12600,
    },
    {
        id: "4",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : " http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },
    {
        id: "5",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : " http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },
    {
        id: "6",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : " http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },
    {
        id: "1",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : " http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },
    {
        id: "7",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : " http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },
    {
        id: "8",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : " http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },
    {
        id: "9",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : " http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },
    {
        id: "10",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : " http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },
    {
        id: "11",
        title: "불편한 편의점",
        artist: "김호연",
        desc: "동네 골목의 작은 편의점을 배경으로 삶의 희로애락을 따뜻하고 유머러스하게 그린 소설. 서울역에서 살다가 우연한 기회에 편의점에서 일하게 된 한 인물과 저마다의 사연을 안고 편의점을 찾는 이들의 이야기, 그 속에서 지친 하루를 위로하는 편의점의 밤이 열린다.",
        imgUrl : " http://image.yes24.com/goods/99308021/XL",
        price: 12600,
    },

]);

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