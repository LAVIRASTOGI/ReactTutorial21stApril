import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return <button> {pending ? " submitting" : "Submit"}</button>;
}

function FormExample() {
  const submitHandler = async (formData) => {
    await new Promise((res) =>
      setTimeout(() => {
        res("ddd");
      }, 2000)
    );
    const name = formData.get("fullName");
    const feedback = formData.get("feedback");
    console.log("data came", name, feedback);
  };
  return (
    <h1>
      <h1>Feedback Form</h1>
      <form action={submitHandler}>
        <label>Name</label>
        <input type="text" placeholder="Enter Name" name="fullName" />
        <label>Feedback</label>
        <input type="text" placeholder="Enter Feedback" name="feedback" />
        <Submit />
      </form>
    </h1>
  );
}

export default FormExample;
