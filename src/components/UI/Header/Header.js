import styles from './Header.module.css';
import Img from '../../../assets/food.jpeg';
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) { // .onShowChart

    return (
        <>
            <header className={styles.header}>
                <h1>Foody</h1>
                <HeaderCartButton cartOnClick={props.onShowCart}>Cart</HeaderCartButton>
            </header>
            <div className={styles['main-image']} >
                <img src={Img} alt='Lots of food'></img>
            </div>
        </>
    )
}

