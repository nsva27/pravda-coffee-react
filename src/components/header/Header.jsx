import { FaShoppingBasket } from "react-icons/fa";
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div class="header__wrapper">
        <div class="burger">
          <div class="burger__item"></div>
        </div>

        <a href="/" class="header__logo-link">
          <img src="../img/logo-white-symbol.png" alt="Pravda Coffee" class="header__logo-img" />
        </a>

        <nav class="header__menu">
          <ul class="header__menu-list">
            <li class="header__menu-item">
              <a href="/" class="header__menu-link">Меню</a>
            </li>
            <li class="header__menu-item">
              <a href="/" class="header__menu-link">Галерея</a>
            </li>
            <li class="header__menu-item">
              <a href="/" class="header__menu-link">О нас</a>
            </li>
            <li class="header__menu-item">
              <a href="/" class="header__menu-link">Контакты</a>
            </li>
            <li class="header__menu-item">
              <a href="/" class="header__menu-link header__menu-link_checked">Акции</a>
            </li>
          </ul>
        </nav>

        <button class="header__basket-button" type="button">
          <FaShoppingBasket className="basket"/>
        </button>
      </div>
    </header>
  )
}