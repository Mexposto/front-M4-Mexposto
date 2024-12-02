"use client";

import Navbar from "../components/Navbar/Navbar";
import Products from "../components/products";
import AuthForm from "../components/AuthForm";
import { useState } from "react";

export default function Home() {
  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null);
  return (
    <main>
      <div>
        <Navbar token={token} setToken={setToken}/>
        {token ? <Products /> : <AuthForm token={token} setToken={setToken} />}
      </div>
    </main>
  );
}



// AuthForm.jsx
"use client"

const AuthForm = () => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const inputHandle = (event) => {
        const {name, value} = event.target;
        setUserData({...userData, [name]:value})
    };

    const submitHandler = (event) => {
        event.preventDefault();

        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            setToken(json.token);
            localStorage.setItem("userToken", json.token)
        })
        .catch((error) => console.log(error));      

    };

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" required onChange={inputHandle} value={userData.username}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" required onChange={inputHandle} value={userData.password}/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default AuthForm


//Nabar.jsx
"use client"

const Navbar = ({token, setToken}) => {

    const logOutHandler = () => {
        setToken(null);
        localStorage.clear();
    }
    return (
        <div>
            <div>
                <h1>My Shopping App</h1>
            </div>
            <div>
                {token ? (
                    <button type="submit" onClick={logOutHandler}>
                        Log out
                    </button>
                ) : null}
            </div>
        </div>
    )
}

export default Navbar;


// middleware roles autorizaciones

import {NextResponse} from "next/server";

export function middleware(request) {
    const user = "";

    if (!user) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/admin", "/user"],
};
