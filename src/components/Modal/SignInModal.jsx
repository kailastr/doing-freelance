import React, { Fragment, useState } from "react";

//headless ui modal
import { Dialog, Transition } from "@headlessui/react";

import supabase from "../../config/supabaseConfig";

const SignInModal = ({ isOpen, setIsOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        // Sign-in successful, you can perform additional operations here
        console.log("Sign-in successful:", user);
        // Optionally, you can navigate to a different page or show a success message
      }
    } catch (e) {
      console.error("Sign-in error:", error);
      setError(error.message);
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
                  {/* <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Sign In to doingFreelance
                                    </Dialog.Title> */}

                  <form onSubmit={handleSubmit} action="">
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
                        onChange={(e) => setEmail(e.target.value)}
                      />
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
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Sign In
                        </button>
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
