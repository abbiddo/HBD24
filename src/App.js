import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";

import Main from "./views/Main";
import Quiz from "./views/Quiz";
import Photo from "./views/Photo";
import Quiz2 from "./views/Quiz2";
import Cake from "./views/Cake";
import Candle from "./views/Candle";
import Letter from "./views/Letter";
import Ending from "./views/Ending";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<Navigate to="/main" />} />
              <Route path="/main" element={<Main />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/photo" element={<Photo />} />
              <Route path="/quiz2" element={<Quiz2 />} />
              <Route path="/cake" element={<Cake />} />
              <Route path="/candle" element={<Candle />} />
              <Route path="/letter" element={<Letter />} />
              <Route path="/ending" element={<Ending />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
