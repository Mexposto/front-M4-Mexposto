"use client";
import { ChangeEvent, useState, FormEvent } from "react";
import { FormTouched } from "@/interfaces/IForms";
import { FormData } from "@/interfaces/IForms";
import { userRegister } from "@/services/userService";
import { useRouter } from "next/navigation";
import { isValid } from "@/helpers/validation";

export const RegisterComponent = () => {
  const INITIAL_DATA: FormData = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };
  const INITIAL_TOUCHED: FormTouched = {
    email: false,
    password: false,
    name: false,
    address: false,
    phone: false,
  };
  const [data, setData] = useState(INITIAL_DATA);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const router = useRouter();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const newValue = event.target.value;
    const newData: FormData = { ...data, [field]: newValue };
    setData(newData);
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await userRegister(data);
    if (!res.message) {
      alert("Registered");
      router.push("/login");
    } else {
      alert(res.message);
    }
  };
  const isTouched = (field: string) => {
    return touched[field];
  };

  return (
    <form
      className="w-full flex flex-col gap-4 m-4"
      onSubmit={(event) => handleSubmit(event)}
    >
      {Object.keys(data).map((input, index) => (
        <>
          <div key={index} className="flex justify-between">
            <label>{input}</label>
            <input
              type={input}
              key={index}
              value={data[input]}
              onChange={(event) => handleChange(event, input)}
              onBlur={() => handleBlur(input)}
            />
          </div>
          {isTouched(input) && !isValid(input, data[input]) && (
            <p className="text-red-500">Error: not valid email.</p>
          )}
        </>
      ))}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterComponent;
