import Input from "./Input";
import Option from "./Option";
import Button from "./Button";
import Select from "./Select";

export default function Form() {
  return (
    <>
      <form>
        <Input type="text" placeholder="Enter the title" />
        <Select>
          <Option value="">Select a category</Option>
          <Option value="Work" />
          <Option value="Personal" />
          <Option value="Studies" />
        </Select>
        <Button format="default" color="purple" title="Create task" />
      </form>
    </>
  );
}
