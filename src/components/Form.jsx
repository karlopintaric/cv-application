import { useState } from "react";
import Input from "./Input";
import "../styles/Form.css";

export default function Form({ title, fields, expandable }) {
  const [fieldsData, setFieldsData] = useState(fields);
  const [isEdit, setIsEdit] = useState(true);

  function onChange(e, id) {
    const newFieldsData = fieldsData.map((field) =>
      field.id === id ? { ...field, value: e.target.value } : field
    );

    setFieldsData(newFieldsData);
  }

  function enterEdit() {
    setIsEdit(true);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsEdit(false);
      }}
      className="profile-section"
    >
      <h2>{title}</h2>
      {fieldsData.map((field) => (
        <Input
          key={field.id}
          id={field.id}
          label={field.label}
          value={field.value}
          type={field.type}
          onChange={onChange}
          isEdit={isEdit}
        />
      ))}

      <div className="form-buttons">
        <button type="submit" disabled={!isEdit}>
          Save
        </button>
        <button type="button" onClick={enterEdit}>
          Edit
        </button>
      </div>
    </form>
  );
}
