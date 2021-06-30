import { useDispatch, useSelector } from "react-redux";

import userSituationAction from "./store/user-situation/action";
import "./App.css";
import getRealTime from "./getData";
import handleDataAction from "./store/get-data/action";

const App = () => {
  const dispatch = useDispatch();

  const { userSituation, situationMessage } = useSelector(
    (state) => state.userSituationReducer
  );

  const { isLoading, data } = useSelector((state) => state.handleDataReducer);

  const handleOnlineClick = () => {
    dispatch(
      userSituationAction({
        userSituation: "Online",
        situationMessage: "I am here.",
      })
    );
  };

  const handleOfflineClick = () => {
    dispatch(
      userSituationAction({
        userSituation: "Offline",
        situationMessage: `Last seen at ${getRealTime()}`,
      })
    );
  };

  const getData = () => {
    dispatch(handleDataAction("Amirhossein Moghadam"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h5
          style={
            userSituation === "Online" ? { color: "#4BB543" } : { color: "red" }
          }
        >
          {userSituation}
        </h5>
        <h6>{situationMessage}</h6>
        <button onClick={handleOnlineClick}>Online</button>
        <button onClick={handleOfflineClick}>Offline</button>
        {isLoading && <h5>Please Wait ...</h5>}
        {!isLoading && <h5>Data : {data}</h5>}
        <button onClick={getData}>Get Data</button>
      </header>
    </div>
  );
};

export default App;
