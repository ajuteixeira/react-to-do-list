import Button from "./Button";

export default function Task({ task }) {
  return (
    <div className="flex justify-between items-start gap-5 sm:gap-10">
      <div className="">
        <p>{task.text}</p>
        <p className="">#{task.category}</p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button
          type="default"
          color="purple"
          title={<a href="#">Complete</a>}
        />
        <Button type="default" color="gray" title={<a href="#">X</a>} />
      </div>
    </div>
  );
}
