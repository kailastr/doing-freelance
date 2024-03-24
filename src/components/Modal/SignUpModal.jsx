import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseConfig";

const SignUpModal = ({ isOpen, setIsOpen }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [formError, setFormError] = useState(null);

  const navigate = useNavigate();

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  useEffect(() => {
    const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        console.log("User is signed in:", session);
      } else {
        console.log("User is signed out");
      }
    });

    return () => unsubscribe;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !mail || !location || !bio || !userType || !password) {
      setFormError("Please fill in all fields to create an account.");
      return;
    }

    try {
      const { data, error: storeError } = await supabase
        .from("DF-UserProfile")
        .insert([
          {
            mailId: mail,
            fullName: name,
            userBio: bio,
            currentLocation: location,
            userType: userType,
            password: password,
          },
        ])
        .select();

      if (storeError) {
        console.error("Error storing user data:", storeError);
        return;
      }

      console.log("User data stored:", data);
      console.log("user-mail:", data[0].mailId);
      localStorage.setItem("userMail", `${data[0].mailId}`);
      setFormError(null);

      const { newData, error } = await supabase.auth.signUp({
        email: mail,
        password: password,
      });

      if (error) {
        setFormError("Error signing up: " + error.message);
        console.error("Sign up error:", error);
        return;
      }

      console.log("Sign up successful:", newData);

      if (userType === "freelancer") {
        navigate("/freelancer");
      } else if (userType === "client") {
        navigate("/client");
      }
    } catch (error) {
      console.error("Error:", error);
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
                  {formError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                      <span className="font-bold">Error: </span>
                      {formError}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                      <label
                        htmlFor="fullName"
                        className="text-lg font-semibold mt-3"
                      >
                        Full Name:
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="mailId"
                        className="text-lg font-semibold mt-3"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        id="mailId"
                        name="mailId"
                        className="mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700"
                        placeholder="usermail@gmail.com"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        required
                      />
                      <label
                        htmlFor="bio"
                        className="text-lg font-semibold mt-3"
                      >
                        Bio:
                      </label>
                      <textarea
                        name="bio"
                        id="bio"
                        cols="30"
                        rows="3"
                        className="mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700"
                        placeholder="Completed engineering and doing freelance web 3 development..."
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        required
                      ></textarea>
                      <label
                        htmlFor="location"
                        className="text-lg font-semibold mt-3"
                      >
                        Current location:
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        className="mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700"
                        placeholder="Country-State-City"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                      />
                      <div className="flex flex-col mt-3">
                        <div className="flex gap-2">
                          <IoAlertCircleOutline
                            className="my-auto text-lg"
                            title="Freelancer : Those who are skilled to work,  Client : Those who posts works"
                          />
                          <h3 className="text-lg font-semibold">User Type</h3>
                        </div>
                        <div className="mt-2 flex gap-5">
                          <div className="flex gap-2">
                            <label
                              htmlFor="freelancer"
                              className="text-lg font-semibold"
                            >
                              Freelancer
                            </label>
                            <input
                              type="radio"
                              id="freelancer"
                              name="userType"
                              value="freelancer"
                              checked={userType === "freelancer"}
                              onChange={(e) => setUserType(e.target.value)}
                              required
                            />
                          </div>
                          <div className="flex gap-2">
                            <label
                              htmlFor="client"
                              className="text-lg font-semibold"
                            >
                              Client
                            </label>
                            <input
                              type="radio"
                              id="client"
                              name="userType"
                              value="client"
                              checked={userType === "client"}
                              onChange={(e) => setUserType(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <label
                        htmlFor="userPassword"
                        className="text-lg font-semibold mt-3"
                      >
                        Password:
                      </label>
                      <input
                        type="password"
                        id="userPassword"
                        name="userPassword"
                        className="mt-2 py-1 px-1 border-2 border-blue-400 rounded-md focus:outline-none focus:border-blue-700"
                        placeholder="************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Sign Up
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
                        Sign Up with
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

export default SignUpModal;
