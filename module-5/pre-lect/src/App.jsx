import { useForm } from "react-hook-form";
import { useNotes } from "./stores/store";
function App() {
  const { notes, addNote } = useNotes();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  return (
    <>
      <h1>home</h1>
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          addNote(data.note);
        })}
        noValidate
      >
        <input
          type="email"
          {...register("note", {
            required: "Field required",
            pattern: {
              value: /@stud\.noroff\.no|@noroff\.no/,
              message: "must include @noroff.no",
            },
          })}
          className="border"
        />
        <button type="submit">submit</button>
        {errors.note && (
          <p className="text-red-600">{errors.note.message || "error"}</p>
        )}
      </form>
      <button
        onClick={() => {
          console.log(getValues());
        }}
      >
        Get values
      </button>
      {notes.map((note, i) => (
        <p key={i}>{note}</p>
      ))}
    </>
  );
}

export default App;
