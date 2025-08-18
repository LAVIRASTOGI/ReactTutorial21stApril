import { useActionState } from "react";

function FormExampleActionState() {
  const submitHandler = async (prevState, formData) => {
    await new Promise((res) =>
      setTimeout(() => {
        res("ddd");
      }, 2000)
    );
    // console.log(prevState);
    const name = formData.get("fullName");
    const feedback = formData.get("feedback");
    console.log("data came", name, feedback);
    return { success: "true", msg: "submitted success" };
  };
  const [state, formAction, ispending] = useActionState(submitHandler, null);

  return (
    <h1>
      <h1>Feedback Form</h1>
      <form action={formAction}>
        <label>Name</label>
        <input type="text" placeholder="Enter Name" name="fullName" />
        <label>Feedback</label>
        <input type="text" placeholder="Enter Feedback" name="feedback" />
        <button>{ispending ? " submiiting" : "Submit"}</button>
      </form>

      {state?.success && state.msg}
    </h1>
  );
}

export default FormExampleActionState;
