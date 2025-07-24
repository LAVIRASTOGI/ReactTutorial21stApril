import React, { useRef, useState } from "react";

function Contact() {
  const userRef = useRef();
  const [formValues, setFormValues] = useState({
    name: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const [formValuesError, setFormValuesError] = useState({
    name: "",
    phoneNo: "",
  });

  const [error, setError] = useState("");
  const validateHandler = () => {
    const flag = Object.values(formValues).every((ele) => ele !== "");
    console.log(flag);
    return flag;
  };
  const validateInputHandler = () => {
    const errorsFull = {};
    if (formValues.name.length > 4) {
      errorsFull.name = "please enter valid name";
    }
    if (formValues.phoneNo.length > 10) {
      errorsFull.phoneNo = "please enter valid phoneNo";
    }

    setFormValuesError(errorsFull);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    validateInputHandler();
    if (!validateHandler()) {
      setError("please fill the form");
    } else {
      console.log("username", userRef?.current?.value);
      console.log("submitted", formValues);
      setError("");
    }
  };
  const changeHandler = (e) => {
    console.log(e.target.id, e.target.value);
    if (e.target.id === "phoneNo" && e.target.value == 97) {
      setFormValues({
        ...formValues,
        [e.target.id]: 976589,
      });
    } else {
      setFormValues({
        ...formValues,
        [e.target.id]: e.target.value,
      });
    }
  };
  return (
    <>
      <h1>Contact Form</h1>
      {/* name,phone no,email,message,submit */}
      <form onSubmit={submitHandler}>
        <div>
          <label>UserName</label>
          <input
            type="text"
            placeholder="Enter UserName"
            id="userName"
            ref={userRef}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            id="name"
            value={formValues?.name}
            onChange={changeHandler}
          />
          {formValuesError?.name && <h1>{formValuesError?.name}</h1>}
        </div>
        <div>
          <label>Phone No</label>
          <input
            type="number"
            placeholder="Enter PhoneNo"
            id="phoneNo"
            value={formValues?.phoneNo}
            onChange={changeHandler}
          />
          {formValuesError?.phoneNo && <h1>{formValuesError?.phoneNo}</h1>}
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            id="email"
            value={formValues?.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Message</label>
          <textarea
            placeholder="Enter message"
            id="message"
            value={formValues?.message}
            onChange={changeHandler}
          />
        </div>
        <button type="Submit"> Submit</button>
        {error && <h1>{error}</h1>}
      </form>
    </>
  );
}

export default Contact;
