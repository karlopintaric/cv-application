import "../styles/Input.css";

export default function Input({ id, label, value, type, onChange, isEdit }) {
  return (
    <label>
      {`${label}:`}
      {isEdit ? (
        <input type={type} value={value} onChange={(e) => onChange(e, id)} />
      ) : (
        <p>{value}</p>
      )}
    </label>
  );
}
