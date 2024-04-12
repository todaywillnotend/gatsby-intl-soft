import React from "react";
import { FormattedMessage } from "react-intl";
import LinkTranslated from "../LinkTranslated";
import SimpleLocalize from "../SimpleLocalize";
import { Header, Wrapper, Main, Services, Team } from "../components/";

function IndexPage(props) {
  // const language = props.pageContext.language;
  return (
    <SimpleLocalize {...props}>
      <Wrapper>
        <Header />
        <Main />
        <Services />
        <Team />
      </Wrapper>
    </SimpleLocalize>
  );
}

export default IndexPage;
