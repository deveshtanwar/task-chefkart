import './dateTime.css';
import dateLogo from '../../assets/Select_date-01@2x.png';
import hourLogo from '../../assets/clock.png';

const DateTime = () =>{

    let today = new Date();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = months[today.getMonth()];
    let date = `${today.getDate()}  ${month} ${today.getFullYear()}`;

    let hour = today.getHours();
    let ampm = hour >= 12 ? 'Pm' : 'Am';

    function formatHours(date) {
        let hours = date.getHours();
        hours = hours % 12;
        return hours;
    }

    let hours = formatHours(today);
    let time = `${hours} : ${today.getMinutes()} ${ampm} - ${hours+2} : ${today.getMinutes()} ${ampm}`;

    return(
        <>
            <div className = "container-box">
                <img className="hour-logo" src={dateLogo}/>
                <p>{date}</p>
                <p>|</p>
                <img className="hour-logo" src={hourLogo}/>
                <p>{time}</p>
            </div>
        </>
    );
}
export default DateTime;