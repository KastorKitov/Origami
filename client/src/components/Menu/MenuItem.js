import style from './MenuItem.module.css'

function MenuItem(props){
    return(
        <li className={style.listItem}>
            <a href="#" className={style.alistItem}>{props.children}</a>
            </li>
    );
};

export default MenuItem;