import { useState } from "react";
import "./EditProfile.css";

export default function EditProfile() {
  const [firstName, setFirstName] = useState("Subodh");
  const [lastName, setLastName] = useState("Adhikari");
  const [canEdit, setCanEdit] = useState(true);

  function handleEditSave() {
    setCanEdit(!canEdit);
  }

  return (
    <form>
      <label>
        First name: <b>{canEdit ? firstName : ""}</b>
        <input
          className={canEdit ? "name" : ""}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Last name: <b>{canEdit ? lastName : ""}</b>
        <input
          className={canEdit ? "name" : ""}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <br />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          handleEditSave();
        }}
      >
        {canEdit ? "Edit" : "Save"} Profile
      </button>
      <p>
        <i>Hello, {firstName + " " + lastName}!</i>
      </p>
    </form>
  );
}

/*
export default function EditProfile() {
  return (
    <form>
      <label>
        First name: <b>Jane</b>
        <input />
      </label>
      <br />
      <label>
        Last name: <b>Jacobs</b>
        <input />
      </label>
      <br />
      <button type="submit">Edit Profile</button>
      <p>
        <i>Hello, Jane Jacobs!</i>
      </p>
    </form>
  );
}
*/
