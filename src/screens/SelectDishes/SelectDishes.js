import Cuisine from "../../component/Cuisine/Cuisine";
import Darkbg from "../../component/Darkbg/Darkbg";
import DateTime from "../../component/DateTime/DateTime";
import Dishes from "../../component/Dishes/Dishes";
import Navbar from "../../component/Navbar/Navbar";
import PopularDishes from "../../component/PopularDishes/PopularDishes";
import BlackBox from "../../component/blackBox/BlackBox";
import './SelectDishes.css';
import { useEffect, useState } from "react";
import axios from "axios";


const SelectDishes = () =>{

    const[myData, setMyData] = useState([]);
    const[dishData, setdishData] = useState([]);

    useEffect(()=>{
        axios
        .get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1")
        .then((res)=>{
            setMyData(res.data.popularDishes);
            setdishData(res.data.dishes);
        })
    },[]);
    
    return(
        <>
            <Navbar title={'Select Dishes'}/>
            <Darkbg />
            <DateTime />
            <Cuisine />
            <PopularDishes data={myData} title="Popular Dishes"/>
            <hr className = "sep-hr"/>
            <div className="main-container-dishes">
                <div className = "recommended">
                    <div style={{display:"flex"}}>
                        <p>Recommended</p>
                        <i className="fa-solid fa-sort-down I-tag"></i>
                    </div>
                    <button className="dark-button">Menu</button>
                </div>
                <Dishes data={dishData}/>
                <BlackBox />
            </div>
        </>
    );
}
export default SelectDishes;