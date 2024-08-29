import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Inbox from "./components/pages/Inbox";
import DetailInbox from "./components/pages/DetailInbox";
import Task from "./components/pages/Task";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/inbox/detail" element={<DetailInbox />} />
        <Route path="/task" element={<Task />} />
      </Route>
    </Routes>
  );
}

export default App;
