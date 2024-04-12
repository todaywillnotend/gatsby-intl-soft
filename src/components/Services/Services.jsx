import React from "react";

import { Title } from "../Title/Title";
import { useIntl } from "react-intl";
import { navigationItems } from "../../const";

import "./Services.scss";

const getServices = (intl) => [
  {
    title: intl.formatMessage({
      id: "service-item-1-title",
      defaultMessage: "Аналитика",
    }),
    items: [
      intl.formatMessage({
        id: "service-item-1-text-1",
        defaultMessage:
          "Разработка платформы для автоматизации процесса работы с A/B-тестами",
      }),
      intl.formatMessage({
        id: "service-item-1-text-2",
        defaultMessage: "Оптимизация и разработка метрик",
      }),
      intl.formatMessage({
        id: "service-item-1-text-3",
        defaultMessage: "Построение иерархии метрик",
      }),
      intl.formatMessage({
        id: "service-item-1-text-4",
        defaultMessage: "Разработка ETL-процессов",
      }),
      intl.formatMessage({
        id: "service-item-1-text-5",
        defaultMessage: "Система дашбордов",
      }),
    ],
  },
  {
    title: intl.formatMessage({
      id: "service-item-2-title",
      defaultMessage: "Базы данных",
    }),
    items: [
      intl.formatMessage({
        id: "service-item-2-text-1",
        defaultMessage: "Внедрение современных решений",
      }),
      intl.formatMessage({
        id: "service-item-2-text-2",
        defaultMessage: "Миграция с одной базы данных на другую",
      }),
      intl.formatMessage({
        id: "service-item-2-text-3",
        defaultMessage: "Оптимизация взаимодействия с базой данных",
      }),
      intl.formatMessage({
        id: "service-item-2-text-4",
        defaultMessage: "Повышения надежности взаимодействия с базой данных",
      }),
      intl.formatMessage({
        id: "service-item-2-text-5",
        defaultMessage: "Улучшение наблюдаемости за базой данных",
      }),
    ],
  },
  {
    title: intl.formatMessage({
      id: "service-item-3-title",
      defaultMessage: "Машинное обучение",
    }),
    items: [
      intl.formatMessage({
        id: "service-item-3-text-1",
        defaultMessage:
          "Интеграция моделей в существующую инфраструктуру и бизнес-процессы",
      }),
      intl.formatMessage({
        id: "service-item-3-text-2",
        defaultMessage: "Решение ваших задач с использованием NLP, CV",
      }),
      intl.formatMessage({
        id: "service-item-3-text-3",
        defaultMessage: "Оптимизация существующих моделей и алгоритмов",
      }),
      intl.formatMessage({
        id: "service-item-3-text-4",
        defaultMessage:
          "Персонализация предложений, продуктов или услуг с использованием моделей",
      }),
      intl.formatMessage({
        id: "service-item-3-text-5",
        defaultMessage:
          "Проведение технического аудита текущих решений на основе машинного обучения",
      }),
    ],
  },
];

export const Services = () => {
  const intl = useIntl();
  const serviceItems = getServices(intl);

  return (
    <section className="service" id={navigationItems.SERVICES}>
      <Title
        text={intl.formatMessage({
          id: "services-title",
          defaultMessage: "Наши ключевые компетенции",
        })}
      />
      <div className="service__items">
        {serviceItems.map((service) => (
          <div className="service-item">
            <p className="service-item__title">{service.title}</p>

            <div className="service-item__text">
              {service.items.map((item) => (
                <p>
                  {"— "}
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
