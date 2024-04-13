import React from "react";
import SimpleLocalize from "../SimpleLocalize";
import {
  Header,
  Wrapper,
  Main,
  Services,
  Team,
  Form,
  Footer,
} from "../components/";

function IndexPage(props) {
  const language = props.pageContext.language;

  return (
    <SimpleLocalize {...props}>
      <Wrapper>
        <Header language={language} />
        <Main />
        <Services />
        <Team />
        <Form />
        <Footer />
      </Wrapper>
    </SimpleLocalize>
  );
}

export default IndexPage;
