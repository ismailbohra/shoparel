import React from "react";

export default function LmsFacultyAssignment() {
  const LmsReportData = {};

  return (
    <>
      <div class="card">
        <div class="card-header">Course Assignment</div>
        <div class="card-body">
          <table className="table table-bordered text-center table-hover bg-light">
            <thead>
              <tr className="table-primary">
                <th scope="col">S.No.</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Remaining Leaves</th>
                <th scope="col">Applied Leaves</th>
                <th scope="col">Special Leave Given</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Balance Casual Leave (CL)</td>
                <td>{LmsReportData?.cl || 0}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Balance Earned Leave (EL)</td>
                <td>{LmsReportData?.el || 0}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Balance Optional Leave (OL)</td>
                <td>{LmsReportData?.ol || 0}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card mt-5">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <table className="table table-bordered text-center table-hover bg-light">
            <thead>
              <tr className="table-primary">
                <th scope="col">S.No.</th>
                <th scope="col">Leave Type</th>
                <th scope="col">Remaining Leaves</th>
                <th scope="col">Applied Leaves</th>
                <th scope="col">Special Leave Given</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Balance Casual Leave (CL)</td>
                <td>{LmsReportData?.cl || 0}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Balance Earned Leave (EL)</td>
                <td>{LmsReportData?.el || 0}</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Balance Optional Leave (OL)</td>
                <td>{LmsReportData?.ol || 0}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
