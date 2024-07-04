import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import DraftedTimesheetView from "./components/DraftedTimesheetView";
import MiniDrawer from "./components/WorkForceAppBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MiniDrawer />}>
            {/* <Route path="pendingApproval" element={<PendingTimesheets />} /> */}
            {/* <Route index element={<DraftedList />} /> */}
          </Route>
          <Route path="/drafted" element={<DraftedTimesheetView />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
