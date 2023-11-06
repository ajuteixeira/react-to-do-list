import List from "../components/List";
import Title from "../components/Title";

export default function SinglePage() {
  return (
    <>
      <header>
        <Title>To-do list 📝</Title>
      </header>
      <main className="max-w-2xl p-12 mt-7 flex flex-col justify-center items-center gap-10 text-center text-[#908e97] bg-[#f1f1f1] rounded-2xl">
        <List />
      </main>
    </>
  );
}
