import { FC, Fragment } from "react";
import Head from "next/head";

import GlobalStyle from "../../styles/GlobalStyle";

type Props = {
  title: string;
};

const Layout: FC<Props> = ({ children, title }): JSX.Element => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="icons/favicon.ico" />
    </Head>
    <GlobalStyle />
    {children}
  </Fragment>
);

export default Layout;
