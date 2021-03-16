import style from './NavigationPic.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
function NavigationPic(props){
    return(
        <li className={style.listItem}>
            <img src="/white-origami-bird.png" alt="white origami"/>
            </li>
    );
};
export default NavigationPic;