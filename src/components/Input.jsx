export default function Input(props) {
  return (
    <input
      className={`
      p-3 mb-3 w-full text-xs sm:text-sm leading-5 rounded hover:bg-[#ededff] focus:outline-none focus:bg-[#ededff] 
  `}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
}
