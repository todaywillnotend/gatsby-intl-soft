import React from "react";
import { FormattedMessage } from "react-intl";

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

export const Header = () => {
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
      <div>
        <a href="/">Russian</a> <a href="/en">English </a>
      </div>
    </header>
  );
};
