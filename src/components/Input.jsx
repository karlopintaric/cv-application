import "../styles/Input.css";

export default function Input({ id, label, value, onChange, isEdit }) {
  return (
    <label>
      {`${label}:`}
      {isEdit ? (
        <input type="text" value={value} onChange={(e) => onChange(e, id)} />
      ) : (
        <p>{value}</p>
      )}
    </label>
  );
}
