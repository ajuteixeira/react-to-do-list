export default function Select(props) {
  return (
    <select
      className={`
    p-3 mb-3 w-full text-xs sm:text-sm leading-5 rounded focus:outline-none 
`}
    >
      {props.children}
    </select>
  );
}
