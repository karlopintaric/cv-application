import Form from "./Form";

export default function EducationSection() {
  const fields = [
    { id: 0, label: "School name", value: "", type: "text" },
    { id: 1, label: "Title of study", value: "", type: "text" },
    { id: 2, label: "Date of study", value: "", type: "date" },
  ];

  return <Form title={"Education"} fields={fields} />;
}
