import Form from "./Form";

export default function JobSection() {
  const fields = [
    { id: 0, label: "Company Name", value: "", type: "text" },
    { id: 1, label: "Date from", value: "", type: "date" },
    { id: 2, label: "Date to", value: "", type: "date" },
    { id: 3, label: "Position title", value: "", type: "text" },
    { id: 4, label: "Main responsibilities", value: "", type: "text" },
  ];

  return <Form title={"Work Experience"} fields={fields} />;
}
