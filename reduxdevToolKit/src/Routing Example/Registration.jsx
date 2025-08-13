import { useForm } from "react-hook-form";


function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      age: 30,
    },
  });

  const nameVal = watch("firstName");
  console.log(nameVal);

  const submitHandler = (data) => {
    // check api call .....
    console.log(data);
    reset();
  };


  
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>FirstName</label>
        {/* name= first name */}
        <input
          type="text"
          placeholder="Enter First Name"
          {...register("firstName", {
            required: { value: true, message: "First Name is required" },
            maxLength: { value: 3, message: "Enter name of less digits " },
          })}
        />
        {errors.firstName && (
          <span className="redError">{errors?.firstName?.message}</span>
        )}
      </div>

      <div>
        <label>Last Name</label>
        {/* name=lastName */}
        <input
          type="text"
          className={errors.LastName ? "redError" : ""}
          placeholder="Enter Last Name"
          {...register("LastName", {
            required: "Last Name is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "last name is not valid",
            },
          })}
        />
        {errors.LastName && (
          <span className="redError">{errors?.LastName?.message}</span>
        )}
      </div>

      <div>
        <label>Phone No</label>
        {/* name = age */}
        <input
          type="number"
          {...register("age", {
            min: {
              value: 18,
              message: "Valid",
            },
          })}
        />
        {errors.age && <span className="redError">enter valid age</span>}
      </div>
      <button type="submit">Submit </button>
    </form>
  );
}

export default Registration;
