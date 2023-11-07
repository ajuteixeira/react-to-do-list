export default function Subtitle(props) {
  return (
    <h2
      className={`pt-12 pb-3 text-2xl sm:text-3xl text-[#f1f1f1] text-center font-extrabold`}
    >
      {props.children}
    </h2>
  );
}
