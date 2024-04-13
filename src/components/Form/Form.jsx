import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import "./Form.scss";

export const Form = () => {
  const intl = useIntl();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const isButtonEnabled = Boolean(formData.contact);

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      // await fetch()

      window.alert("Скоро мы с вами свяжемся");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="form" onSubmit={onSubmitForm}>
      <p className="form__title">
        <span className="form__title_blue">
          <FormattedMessage id="form-title-1" defaultMessage="Напишите нам" />
        </span>{" "}
        <FormattedMessage
          id="form-title-2"
          defaultMessage="о своих идеях или вопросах, и мы скоро свяжемся с вами!"
        />
      </p>
      <div className="form__content">
        <input
          type="text"
          className="form__input"
          placeholder={intl.formatMessage({
            id: "form-name-placeholder",
            defaultMessage: "Имя",
          })}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              name: event?.target?.value || "",
            }))
          }
        />
        <input
          type="text"
          className="form__input"
          placeholder={intl.formatMessage({
            id: "form-contact-placeholder",
            defaultMessage: "e-mail / telegram / номер телефона",
          })}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              contact: event?.target?.value || "",
            }))
          }
        />
        <textarea
          name=""
          id=""
          className="form__textarea"
          placeholder={intl.formatMessage({
            id: "form-message-placeholder",
            defaultMessage: "Ваше сообщение",
          })}
          onChange={(event) =>
            setFormData((prev) => ({
              ...prev,
              message: event?.target?.value || "",
            }))
          }
        />
        <button
          className={cn("form__button", {
            form__button_active: isButtonEnabled,
          })}
          type="submit"
        >
          <FormattedMessage id="form-button" defaultMessage="Отправить" />
        </button>
      </div>
      <div className="form__social">
        <a className="social" href="mailto:sales@softin.ru">
          <StaticImage src="../../images/icon-mail.png" width={40} />
          sales@softin.ru
        </a>
        <a className="social" href="https://t.me/softin">
          <StaticImage src="../../images/icon-tg.png" width={40} />
          t.me/softin
        </a>
        <a className="social" href="https://wa.me/">
          <StaticImage src="../../images/icon-wa.png" width={40} />
          +7 (999) 999 99 99
        </a>
      </div>
    </form>
  );
};
