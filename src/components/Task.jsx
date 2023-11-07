import Button from "./Button";

export default function Task({ task }) {
  return (
    <div className="flex justify-between items-start gap-5 sm:gap-10">
      <div className="">
        <p>{task.text}</p>
        <p className="">#{task.category}</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button format="default" color="purple" title={"Complete"} />
        <Button format="default" color="lilac" title={"X"} />
      </div>
    </div>
  );
}
