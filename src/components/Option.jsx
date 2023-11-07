export default function Option(props) {
  return (
    <option className={`bg-[#ededff]`} value={props.value}>
      {props.value || props.children}
    </option>
  );
}
