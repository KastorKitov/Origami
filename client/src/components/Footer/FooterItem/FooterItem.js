import style from './FooterItem.module.css';

function FooterItem(props){
    return(
        <li className={style.listItem}>
            <a href="#"className={style.aListName}>{props.children}</a>
            </li>
    );
};

export default FooterItem;