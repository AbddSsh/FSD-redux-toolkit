import { Routing } from "pages";
import "../shared/styles/globals.css";
import { withProviders } from "./providers";
import { FC, ReactElement } from "react";

const App: FC = (): ReactElement => {
  return <Routing />;
};

export default withProviders(App);
