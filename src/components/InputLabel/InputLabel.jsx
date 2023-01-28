import styles from "./InputLabel.module.scss";

export const InputLabel = ({
  labelText,
  type,
  placeholder,
  handleChange,
  handleBlur,
  value,
  name,
  error,
  touched
}) => {
  return (
    <label className={styles.label}>
      <span className={styles.text}>{labelText}</span>
      <input
        className={styles.input}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      <div className={styles.error}>{error && touched && error}</div>
    </label>
  );
};

export default InputLabel;
