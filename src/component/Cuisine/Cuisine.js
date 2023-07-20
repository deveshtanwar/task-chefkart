import './cuisine.css';

const Cuisine = () =>{

    const cuisineType = ['Indian','Italian','Chinese','Japanese','Greek','Spanish','Mexican','American','Thai','Turkey','Lebanese'];

    return(
        <>
            <div className="cuisine">   
                {cuisineType.map((value,index)=>{
                    return <p key = {`cuisine#${index}`}>{value}</p>
                })}
            </div>
        </>
    );
}
export default Cuisine;