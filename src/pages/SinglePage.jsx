import Form from "../components/Form";
import List from "../components/List";
import Title from "../components/Title";

export default function SinglePage() {
  return (
    <>
      <header>
        <Title>To-do list 📝</Title>
      </header>
      <main>
        <section className="max-w-2xl p-12 mt-7 mx-4 flex flex-col justify-center items-center gap-10 text-xs sm:text-sm text-[#908e97] bg-[#f1f1f1] rounded-2xl">
          <List />
        </section>
        <section className="max-w-2xl p-12 mt-7 mx-4 flex flex-col justify-center items-center gap-10 text-xs sm:text-sm text-[#908e97] bg-[#f1f1f1] rounded-2xl">
          <Form />
        </section>
      </main>
    </>
  );
}
