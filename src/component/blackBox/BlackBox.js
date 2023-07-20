import foodLogo from '../../assets/food.svg';
import './blackBox.css';

const BlackBox = (props) =>{
    return(
        <>
            <div className='blackBox'>
                <div className='sub-flex'>
                    <img src={foodLogo} className='foodLogo'/>
                    <p>3 food items selected</p>
                </div>
                <div>
                    <i className="fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
        </>
    );
}
export default BlackBox;