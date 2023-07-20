import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import './DishDetail.css';
import starLogo from '../../assets/star.svg';
import hourLogo from '../../assets/Group 393.svg';
import RefrigeratorLogo from '../../assets/refrigerator.png';
import sabjisLogo from '../../assets/Mask Group 17.png';
import sabji2Logo from '../../assets/herbal.png';

const DishDetail = () =>{

    const style = {
        width:"100%",
        padding:"15px"
    };

    const[dishData, setdishDetail] = useState({
        
        name: "Masala Mughlai",
        id: "1",
        timeToPrepare: "1 Hour",
        ingredients: {
            vegetables: [
                {
                    "name": "Cauliflower",
                    "quantity": "1"
                },
                {
                    "name": "Tomato",
                    "quantity": "10"
                },
                {
                    "name": "Spinach",
                    "quantity": "1/2 Kg"
                }
            ],
            spices: [
                {
                    "name": "Coriander",
                    "quantity": "100 gm"
                },
                {
                    "name": "Mustard Oil",
                    "quantity": "1/2 litres"
                }
            ],
            appliances: [
                {
                    "name": "Refrigerator",
                    "image": ""
                },
                {
                    "name": "Microwave",
                    "image": ""
                },
                {
                    "name": "Stove",
                    "image": ""
                }
            ]
        }
    });

    useEffect(()=>{
        axios
        .get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1")
        .then((res)=>{
            setdishDetail(res.data);
        })
    },[]);

    return(
        <>
            <Link to="/"><i className="fa-solid fa-arrow-left" style={style}></i></Link>

            <div className="container">
                <div className="row-dishDetail-1">
                    <p className="heading-dishDetail">{dishData.name}</p>
                    <p className="dishRating-dishDetail">4.5<img className="starLogo-dishDetail" src={starLogo} /></p>
                </div>
                <div className="desciption-dishDetail">
                    <p>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>
                </div>
                <div className="hour-dishDetail">
                        <img className="hour-logo" src={hourLogo}/>
                        <p>{dishData.timeToPrepare}</p>
                </div>
                    <div className="hour-dishDetail-flex">
                        <hr className="dishDetail-hr" />
                        <div className="parent">
                            <img  className="image1" src={sabjisLogo}/>
                            <img  className="image2" src={sabji2Logo}/>
                        </div>
                    </div>
                <div className="ingredients-dishDetail">
                    <p id="ingredients-p">Ingredients</p>
                    <p id="subheading">for 2 people</p>
                    <hr id="subheading-hr" />
                </div>
                <div className="vegetable-dishDetail">
                    <div className = "vegetable-div">
                        <p>Vegetables</p>
                        <i className="fa-solid fa-sort-down"></i>
                    </div>
                    {dishData.ingredients.vegetables.map((val,index)=>{
                        const{name,quantity} = val;
                        return(
                            <div key={index}>
                                <div className="inner-row-dishDetail">
                                    <div className="column1-dishDetail">
                                        <p>{name}</p>
                                    </div>
                                    <div className="column2-dishDetail">
                                        <p>{quantity}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="vegetable-dishDetail">
                    <div className = "vegetable-div">
                        <p>Spices</p>
                        <i className="fa-solid fa-sort-down"></i>
                    </div>
                    {dishData.ingredients.spices.map((val,index)=>{
                        const{name,quantity} = val;
                        return(
                            <div key={index}>
                                <div className="inner-row-dishDetail">
                                    <div className="column1-dishDetail">
                                        <p>{name}</p>
                                    </div>
                                    <div className="column2-dishDetail">
                                        <p>{quantity}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="vegetable-dishDetail">
                    <div className = "vegetable-div">
                        <p>Appliances</p>
                        <i className="fa-solid fa-sort-down"></i>
                    </div>

                    <div className = "refrigerator-div">
                        {dishData.ingredients.appliances.map((val,index)=>{
                            const{name} = val;
                            return(
                                <div key={index}>
                                    <div className = "appliance-detail">
                                        <img className = "refrigerator-img" src={RefrigeratorLogo} />
                                        <p>{name}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
export default DishDetail;