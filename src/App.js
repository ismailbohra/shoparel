import "./App.css";
import LmsHome from "./component/LmsHome";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Lms from "./component/Lms";
import LmsFacultyAssignment from "./component/lms/LmsFacultyAssignment";
import LmsApply from "./component/lms/lmsApply/LmsApply";
import LmsReport from "./component/lms/LmsReport";
import LmsLeaveChart from "./component/lms/LmsLeaveChart";
import LmsOldLeaveChart from "./component/lms/LmsOldLeaveChart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="lms/" element={<Lms />}>
          <Route path="home" element={<LmsHome />} />
          <Route path="facultyAssignment" element={<LmsFacultyAssignment />} />
          <Route path="apply" element={<LmsApply />} />
          <Route path="report" element={<LmsReport />} />
          <Route path="leaveChart" element={<LmsLeaveChart />} />
          <Route path="oldLeaveChart" element={<LmsOldLeaveChart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
