import { useEffect } from "react";
import "./App.css";

import useLaunches from "./hooks/useLaunches";

import Async from "./component/Async";
import ErrorBoundary from "./component/ErrorBoundary";
import Content from "./component/Content";

function App() {
  const [{ getLaunches }, state] = useLaunches();

  useEffect(() => {
    getLaunches();
  }, []);

  return (
    <div className="container mx-auto px-4 lg:px-0  h-screen flex items-center justify-center">
      <ErrorBoundary>
        <Async
          state={state}
          render={(data) => {
            return <Content data={data} />;
          }}
        />
      </ErrorBoundary>
    </div>
  );
}

export default App;
