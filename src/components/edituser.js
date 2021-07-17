import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export function Edituser({ user, edit }) {
  var initial = {
    name: edit.v.name,
    profession: edit.v.profession,
    age: edit.v.age,
    salary: +edit.v.salary
  };

  console.log("Before edition :", user);
  const [btn, setbtn] = useState(false);
  const [op, setop] = useState("1");

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter your name")
      .min(3, "more than 3 characters")
      .max(12, "less than 12 characters")
      .test("name", "Username taken", function (value) {
        for (var i = 0; i < user.length; i++) {
          if (user[i].name !== value) {
            return true;
          } else {
            return false;
          }
        }
      }),
    profession: Yup.string().required("Enter your profession"),
    age: Yup.number("enter a number")
      .required("please enter your age")
      .positive("only positive value")
      .integer("only integer value is valid"),
    salary: Yup.number("enter a number")
      .required("please enter your salary")
      .positive("only positive value")
      .integer("only integer value is valid")
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    setbtn(true);
    setop("0.2");
    var index = user.findIndex((e) => e.name === edit.v.name);

    user.splice(index, 1, data);
    console.log("Before EDIT : ", edit);
    console.log("After EDIT : ", data);

    console.log("after edition", user);
  };

  return (
    <>
      <div id="edit-user-div">
        <h1 style={{ color: "rgb(48, 201, 86)" }}>EDIT (Update user)</h1>

        <form onSubmit={handleSubmit(onSubmit)} id="edit-form">
          <span>Name:</span>
          <br></br>
          <input
            {...register("name")}
            placeholder="Enter your name"
            defaultValue={initial.name}
          />
          {errors.name && (
            <span style={{ color: "crimson" }}> {errors.name.message} </span>
          )}
          <br></br>
          <span>Profession:</span>
          <br></br>
          <input
            {...register("profession")}
            type="text"
            placeholder="Enter your profession"
            defaultValue={initial.profession}
          />
          {errors.profession && (
            <span style={{ color: "crimson" }}>
              {" "}
              {errors.profession.message}{" "}
            </span>
          )}
          {/* crt+d */}
          <br />
          <span>Age:</span>
          <br></br>
          <input
            {...register("age")}
            type="number"
            placeholder="Enter your age"
            defaultValue={initial.age}
          />
          {errors.age && (
            <span style={{ color: "crimson" }}> {errors.age.message} </span>
          )}
          <br></br>
          <span>Salary:</span>
          <br></br>
          <input
            {...register("salary")}
            type="number"
            placeholder="Enter your salary"
            defaultValue={initial.salary}
          />
          {errors.salary && (
            <span style={{ color: "crimson" }}>{errors.salary.message}</span>
          )}
          <br />
          <br />

          <input
            type="submit"
            id="edit-btn"
            disabled={btn}
            value="UPDATE"
            style={{ opacity: op }}
          />
          {btn === true ? (
            <div style={{ textAlign: "center" }}>
              {" "}
              User Updated !!! <br />
              (check User List)
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    </>
  );
}
