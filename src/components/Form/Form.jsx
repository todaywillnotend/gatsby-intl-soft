import React from "react";
import { FormattedMessage } from "react-intl";

import "./Form.scss";

export const Form = () => {
  return (
    <section className="form">
      <p className="form__title">
        <FormattedMessage id="navigation-1" defaultMessage="Услуги" />
      </p>
    </section>
  );
};
