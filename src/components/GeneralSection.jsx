import Form from "./Form";

export default function GeneralSection() {
  const fields = [
    { id: 0, label: "Name", value: "", type: "text" },
    { id: 1, label: "Surname", value: "", type: "text" },
    { id: 2, label: "Email", value: "", type: "email" },
  ];

  return <Form title={"General"} fields={fields} />;
}
