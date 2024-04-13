import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Title } from "../Title/Title";
import { useIntl } from "react-intl";
import { navigationItems } from "../../const";

import "./Team.scss";

const getPersons = (intl) => [
  {
    name: intl.formatMessage({
      id: "person-1-name",
      defaultMessage: "Чемурзиев Умар",
    }),
    text: intl.formatMessage({
      id: "person-1-text",
      defaultMessage: `Senior product analyst\n
            Raiffeisen bank, ex Tinkoff`,
    }),
    image: <StaticImage src="../../images/photo1.jpg" />,
  },
  {
    name: intl.formatMessage({
      id: "person-2-name",
      defaultMessage: "Гитинов Наби",
    }),
    text: intl.formatMessage({
      id: "person-2-text",
      defaultMessage: `Backend developer
      ex Yandex`,
    }),
    image: <StaticImage src="../../images/photo2.jpg" />,
  },
  {
    name: intl.formatMessage({
      id: "person-3-name",
      defaultMessage: "Неклюдов Андрей",
    }),
    text: intl.formatMessage({
      id: "person-3-text",
      defaultMessage: `ML engineer
      ex Glidewell`,
    }),
    image: <StaticImage src="../../images/photo3.jpg" />,
  },
];

export const Team = () => {
  const intl = useIntl();
  const persons = getPersons(intl);

  return (
    <section className="team" id={navigationItems.TEAM}>
      <Title
        text={intl.formatMessage({
          id: "team-title",
          defaultMessage: "Команда",
        })}
      />
      <div className="team__content">
        {persons.map((person) => (
          <div className="person">
            <div className="person__image">{person.image}</div>
            <p className="person__name">{person.name}</p>
            <p className="person__text">{person.text}</p>
          </div>
        ))}
      </div>
      <p className="team__description">
        {intl.formatMessage({
          id: "team-description",
          defaultMessage:
            "Наши сотрудники закончили топ ВУЗы и поработали в ведущих технологических компаниях",
        })}
      </p>
    </section>
  );
};
