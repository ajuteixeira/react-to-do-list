export default function Title(props) {
  return (
    <h1 className={`text-[#f1f1f1] text-5xl font-extrabold text-center`}>
      {props.children}
    </h1>
  );
}
