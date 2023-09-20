import './dishes.css';
import { Link } from 'react-router-dom';


const Dishes = (prop) =>{

    return(
        <div className = "AllDishes">
            {prop.data.length > 0 && prop.data.map((val)=>{
                const{name,rating,description,equipments,image,id} = val;
                return(
                <div key={id}>
                    <div className="card">
                        <div className="column1-dishes">
                            <div className="row row-1">
                                <p>{name}</p>
                                <p className = "rating">{rating} <i className="fa-solid fa-star"></i></p>
                            </div>
                            <div className="row row-2">
                                <p>{equipments}</p>
                                <p>|</p>
                                <div className="row row-link">
                                    <p>Ingredients</p>
                                    <Link className="visitLink" to={`/DishDetail/${id}`}>visit list</Link>
                                </div>
                            </div>
                            <div className="row row-3">
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className="column2">
                            <img src={image} alt="dishImage" />
                            <p className = "addButton">Add<sup>+</sup></p>
                        </div>
                    </div>
                    <hr className = "dish-hr"/>
                </div>
                );
            })}
        </div>
    );
}
export default Dishes;