import Form from "./Form";

export default function GeneralSection() {
  const fields = [
    { id: 0, label: "Name", value: "" },
    { id: 1, label: "Surname", value: "" },
    { id: 2, label: "Email", value: "" },
  ];

  return <Form title={"General"} fields={fields} />;
}
