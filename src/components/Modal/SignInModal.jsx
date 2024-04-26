import React, { Fragment, useState } from "react";

//headless ui modal
import { Dialog, Transition } from "@headlessui/react";

import supabase from "../../config/supabaseConfig";
import { useNavigate } from "react-router-dom";

const SignInModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [containsUppercase, setContainsUppercase] = useState(false);

  const navigation = useNavigate();

  function closeModal() {
    setIsOpen(false);
    setInvalidCredentials(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // debugger;
  //     const {
  //       data: { user },
  //     } = await supabase.auth.signInWithPassword({
  //       email,
  //       password,
  //     });

  //     if (error) {
  //       setError(error.message);
  //     } else {
  //       // Sign-in successful, you can perform additional operations here
  //       console.log("Sign-in successful:", user);
  //       navigation("/client");
  //       localStorage.setItem("userEmail", `${email}`);
  //       // Optionally, you can navigate to a different page or show a success message
  //     }
  //   } catch (e) {
  //     console.error("Sign-in error:", error);
  //     setError(error.message);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (containsUppercase) {
      // If email contains uppercase letters, don't proceed with sign-in
      return;
    }

    try {
      // debugger;
      const {
        data: userData, error
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      // await supabase.from("DF-UserProfile").select("*").eq("mailId", email);
      const { data, error } = await supabase
        .from("DF-UserProfile")
        .select("*")
        .eq("mailId", email)
        .single();
      console.log("login-data:", data);
      console.log("password:", data.password);
      const realPass = data.password;

      if (password !== realPass) {
        setError(error.message);
        setInvalidCredentials(true);
        return; // Exit early if there's an error
      }

      if (!userData) {
        setError("User data not found.");
        return; // Exit early if user data is null
      }
      // await supabase.from("DF-UserProfile").select("*").eq("mailId", email);

      const { data, error: userProfileError } = await supabase
        .from("DF-UserProfile")
        .select("*")
        .eq("mailId", email)
        .single();

      if (userProfileError) {
        setError(userProfileError.message);
        return; // Exit early if there's an error fetching user profile
      }

      if (!data) {
        setError("User profile not found.");
        return; // Exit early if user profile data is null
      }

      const realPass = data.password;

      if (password !== realPass) {
        // setError(error.message);
        setInvalidCredentials(true);
        return;
      } else {
        // Sign-in successful, you can perform additional operations here
        console.log("Sign-in successful:", userData);
        console.log("login-data:", data);
        console.log("password:", data.password);
        closeModal();
        navigation("/client");
        localStorage.setItem("userEmail", `${email}`);
        // Optionally, you can navigate to a different page or show a success message
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setError(error.message);
    }
  };

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    // Check if email contains uppercase letters
    if (/[A-Z]/.test(enteredEmail)) {
      setContainsUppercase(true);
    } else {
      setContainsUppercase(false);
    }
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                  <form>
                    <div className="flex flex-col">
                      <label
                        htmlFor="userName"
                        className="text-lg font-semibold mt-3"
                      >
                        User Name :{" "}
                      </label>
                      <input
                        type="text"
                        id="userName"
                        name="userName"
                        className="mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700"
                        placeholder="Enter your email as username"
                        onChange={handleEmailChange}
                      />
                      {containsUppercase && (
                        <p className="text-red-600 text-sm">
                          Email should be all lowercase.
                        </p>
                      )}
                      <label
                        htmlFor="userPassword"
                        className="text-lg font-semibold mt-3"
                      >
                        Password :{" "}
                      </label>
                      <input
                        type="password"
                        id="userPassword"
                        name="userPassword"
                        className="mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700"
                        placeholder="************"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <p className="my-2 text-red-600 text-center" id="ifInvalidCredentials">
                        {invalidCredentials && "Invalid Credentials"}
                      </p>
                      <div className="mt-4">
                        <div
                          onClick={handleSubmit}
                          className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        // onClick={closeModal}
                        >
                          Sign In
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="my-5">
                    <p className="text-center">or</p>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Sign In with
                        <img
                          src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
                          alt="Google logo"
                          className="w-7 h-7"
                        />
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SignInModal;
