import React from "react";
import { FormattedMessage } from "react-intl";
import cn from "classnames";

import { Logo } from "../Logo/Logo";
import { navigationItems } from "../../const";

import "./Header.scss";

const getHref = (id) => `#${id}`;

function scrollTo(element) {
  window?.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });
}

export const Header = ({ language }) => {
  const handleLanguageChange = () => {
    switch (language) {
      case "ru":
        window.location.replace("/en");
        break;
      case "en":
        window.location.replace("/");
        break;
    }
  };

  const buttonHandler = (id) => {
    const block = document.getElementById(id);

    if (block) {
      scrollTo(block);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Logo />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a
              href={getHref(navigationItems.SERVICES)}
              onClick={(event) => {
                event.preventDefault();
                buttonHandler(navigationItems.SERVICES);
              }}
            >
              <FormattedMessage id="navigation-1" defaultMessage="Услуги" />
            </a>
          </li>
          <li>
            <a
              href={getHref(navigationItems.TEAM)}
              onClick={(event) => {
                event.preventDefault();
                buttonHandler(navigationItems.TEAM);
              }}
            >
              <FormattedMessage id="navigation-2" defaultMessage="Команда" />
            </a>
          </li>
          <li>
            <a href="#contacts">
              <FormattedMessage id="navigation-3" defaultMessage="Контакты" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="language-toggle">
        <div
          className={cn("language-toggle__option", {
            "language-toggle__option_active": language == "ru",
          })}
          onClick={handleLanguageChange}
        >
          <p>Рус</p>
        </div>
        <div
          className={cn("language-toggle__option", {
            "language-toggle__option_active": language == "en",
          })}
          onClick={handleLanguageChange}
        >
          <p>Eng</p>
        </div>
      </div>
    </header>
  );
};
