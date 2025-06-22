import React from "react";
import images2 from "./assets/images2.jpeg";

// obj={name:'lavi',age:23} // parent // set {name:'lavi',age:32}
// refence is diffrent
// child compomnet -- name display - props - obj
const TailwindCssComponent = React.memo(
  ({ obj }) => {
    console.log("are u rerendering");
    return (
      <>
        <h1
        //     className="text-[30px] font-bold underline text-right text-orange-800
        //     dark:text-green-500
        //   uppercase bg-orange-200"
        >
          Hello world! {obj.name}
        </h1>
        <div className="flex flex-row justify-center items-center gap-3.5 my-5">
          <div className="card">
            <h2>Lavi</h2>
            <p>this is a paragraph</p>
          </div>
          <div className="card">
            <h2>Lavi</h2>
            <p>this is a paragraph</p>
          </div>
          <div className="card">
            <h2>Lavi</h2>
            <p>this is a paragraph</p>
          </div>
        </div>

        <input type="text" placeholder="enter your name" />
        <button className="button">Click me</button>
        <img
          src={images2}
          alt="images2"
          className="hidden md:block  w-[500px]  h-[500px]  lg:w-[700px]"
        />
        <div
          className={`bg-mint-500 dark:bg-black h-[500px] w-[500px] border-8 border-red-500`}
        ></div>

        <div class="3xl:grid-cols-6 grid grid-cols-2 md:grid-cols-4 bg-red-500 h-[500px]">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
        </div>
      </>
    );
  },
  // custom func
  (prevprops, nextProps) => {
    //prevprops - {name:'lavi',age:23}
    // {name:'lavi',age:32}

    // prevprops?.name=== nextProps?.name
    // true - compnent will not be rerendered
    // false - the only compnent will  be rerendered
    return true;
  }
);

export default TailwindCssComponent;
