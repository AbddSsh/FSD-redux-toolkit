import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { MainLoader } from "shared/ui/main-loader";

export const withRouter = (Component: React.FC) => {
  return () => (
    <BrowserRouter>
      <Suspense fallback={<MainLoader />}>
        <Component />
      </Suspense>
    </BrowserRouter>
  );
};
