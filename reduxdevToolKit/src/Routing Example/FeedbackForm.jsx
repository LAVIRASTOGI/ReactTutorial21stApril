import { Form, useActionData, useNavigation } from "react-router-dom";

function FeedBackForm() {
  const actionVal = useActionData();

  const navigation = useNavigation();
   

  return (
    <>
      <h1>FeedBack Form</h1>
      {/* name,message,submit */}
      <Form method="post" action="/feedback">
        <div>
          <label>Name</label>
          <input type="text" placeholder="Enter Name" id="name" name="name" />
        </div>

        <div>
          <label>Message</label>
          <textarea placeholder="Enter message" id="message" name="message" />
        </div>
        <button type="Submit">
          {" "}
          {navigation?.state === "submitting" ? "submitting" : "Submit"}
        </button>
        {actionVal?.error && <h1>{actionVal?.error}</h1>}
        {actionVal?.success && <h1>Form Data Submitted</h1>}
      </Form>
    </>
  );
}

export default FeedBackForm;
