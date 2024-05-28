import logo from './logo.png';
import style from './Header.module.scss';

const Header = () => {

    return (
        <header className={style.header}>
            <img src={logo} alt="Logo app" />
            <p>Exercice React - TodoList</p>
        </header>
    )
}

export default Header;