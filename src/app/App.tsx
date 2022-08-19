import { RecoilRoot } from "recoil";
import { AppRouter } from "./routes";

export const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <AppRouter />
      </div>
    </RecoilRoot>
  );
}
