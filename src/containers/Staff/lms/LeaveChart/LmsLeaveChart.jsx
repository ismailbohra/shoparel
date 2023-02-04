import * as React from "react";
import { useState, useEffect } from "react";

export default function LmsLeaveChart() {
  const [responseData, setresponseData] = useState({
    staffId: "",
    academic_session: "",
    cl: "",
    dl: "",
    el: "",
    id: "",
  });

  useEffect(() => {
    fetch(
      "http://localhost:3000/v1/lms?staffId=1d61317e-acf5-4044-b543-ece289ded110",
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("Authorizaion")
          )}`,
        }),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.status !== "ERROR") {
          setresponseData(res.data.results[0]);
        } else {
          alert(res.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  delete responseData.staffId;
  delete responseData.id;
  delete responseData.academic_session;
  const ownKeys = Object.getOwnPropertyNames(responseData);
  return (
    <>
      <div className="container">
        {ownKeys.length > 0 ? (
          <div className="table-responsive">
            <table className="table bg-light table-hover table-sm mt-3  table-bordered">
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">Type Of Leave</th>
                  <th scope="col">No. of Leaves</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {ownKeys.map((element, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{element}</td>
                      <td>{responseData[element]} </td>
                      <td>
                        {(() => {
                          if (
                            element == "cl" ||
                            element == "dl" ||
                            element == "el"
                          ) {
                            return `remaining`;
                          } else if (
                            element == "sl" ||
                            element == "ml" ||
                            element == "vl"
                          ) {
                            return `special leave`;
                          } else {
                            return `applied`;
                          }
                        })()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
