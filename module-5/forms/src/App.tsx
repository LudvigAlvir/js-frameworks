import { useEffect, useState } from "react";

interface Data {
  data: { title: string; description: string };
}

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    async function getTitle() {
      const res = await fetch(
        "https://v2.api.noroff.dev/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8"
      );
      const data: Data = await res.json();
      setTitle(data.data.title);
      setDescription(data.data.description);
    }
    getTitle();
  }, []);
  return (
    <>
      <h1>Hello</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          id="title"
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          name="description"
          id="description"
          rows={7}
          cols={20}
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
