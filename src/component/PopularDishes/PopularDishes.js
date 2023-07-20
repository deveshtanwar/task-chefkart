import './popularDishes.css';

const PopularDishes = (props) =>{

    return (
        <>  
            <h2 className="PD-heading">{props.title}</h2>
            <div className="popularDish">
                {props.data.length > 0 && props.data.map((val)=>{
                    const{name,image,id} = val;
                    return(
                        <div key={`popularDishes#${id}`}>
                            <div className = "flexShow">
                                <p>{name}</p>
                                <img src={image}/>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default PopularDishes;