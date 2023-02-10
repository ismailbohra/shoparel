import React from "react";

function ChangePassword() {
  return (
    <div class="card">
      <div class="card-header">
        <h4>Change Password</h4>
      </div>
      <div class="card-body">
        <div class="mb-3 column" style={{ padding: "2px" }}>
          <label for="inputPassword" class="row-sm-2 col-form-label">
            Current Password <span style={{ color: "red" }}> * </span>
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div class="mb-3 column" style={{ padding: "2px" }}>
          <label for="inputPassword" class="row-sm-2 col-form-label">
            New Password <span style={{ color: "red" }}> * </span>{" "}
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div class="mb-3 column" style={{ padding: "2px" }}>
          <label for="inputPassword" class="row-sm-10 col-form-label">
            Re-Enter New Password <span style={{ color: "red" }}> * </span>
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          style={{ marginTop: "2%", padding: "10px" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ChangePassword;
