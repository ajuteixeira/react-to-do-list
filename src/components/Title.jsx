export default function Title(props) {
  return (
    <h1 className={`text-4xl sm:text-5xl text-[#f1f1f1]  font-extrabold`}>
      {props.children}
    </h1>
  );
}
