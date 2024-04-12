import React from "react";
import { FormattedMessage } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";

import "./Main.scss";

export const Main = () => {
  return (
    <section className="main">
      <h1 className="main__title">
        <FormattedMessage
          id="main-title-1"
          defaultMessage="Консалтинг в области"
        />
        <div className="main__title_blue">
          <FormattedMessage
            id="main-title-2"
            defaultMessage="больших данных и машинного обучения"
          />
        </div>
      </h1>
      <div className="business">
        <div className="business__image">
          <StaticImage src="../../images/main.png" width={490} height={370} />
        </div>
        <div className="business__content">
          <p className="business__title">
            <FormattedMessage
              id="business-title"
              defaultMessage="Помогаем бизнесу"
            />
          </p>
          <ul className="business__list">
            <li className="business__item">
              <FormattedMessage
                id="business-item-1"
                defaultMessage="Увеличивать доход"
              />
            </li>
            <li className="business__item">
              <FormattedMessage
                id="business-item-2"
                defaultMessage="Эффективно принимать решения"
              />
            </li>
            <li className="business__item">
              <FormattedMessage
                id="business-item-3"
                defaultMessage="Лучше
              понимать клиентов"
              />
            </li>
            <li className="business__item">
              <FormattedMessage
                id="business-item-4"
                defaultMessage="Предотвращать фрод"
              />
            </li>
            <li className="business__item">
              <FormattedMessage
                id="business-item-5"
                defaultMessage="Оптимизировать операционку"
              />
            </li>
          </ul>
          <p className="business__other">
            <FormattedMessage id="business-and" defaultMessage="и" />{" "}
            <span className="business__other_underline">
              <FormattedMessage
                id="business-other"
                defaultMessage="многое
              другое c использованием ML и Big Data"
              />
            </span>
          </p>
        </div>
      </div>
      <div className="goal">
        <p className="goal__title">
          {"# "}
          <span className="goal__title_blue">
            <FormattedMessage
              id="goal-title-1"
              defaultMessage="Рост вашего бизнеса"
            />
          </span>
          {" - "}
          <FormattedMessage
            id="goal-title-2"
            defaultMessage="наша ключевая задача"
          />
        </p>
        <p className="goal__desc">
          <FormattedMessage
            id="goal-desc"
            defaultMessage="Мы исходим от потребностей бизнеса,
            предлагаем те решения, которые действительно помогут клиенту,
            а не просто модные инструменты"
          />
        </p>
      </div>
    </section>
  );
};
