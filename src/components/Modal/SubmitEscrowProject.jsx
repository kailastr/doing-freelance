import React, { Fragment, useState } from "react";

//headless ui modal
import { Dialog, Transition } from "@headlessui/react";
import supabase from "../../config/supabaseConfig";
import { useEffect } from "react";

const SubmitEscrowProject = ({ isOpen, setIsOpen, userId }) => {
  const [projectUrl, setProjectUrl] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const fetchGigData = async () => {
    const { data, error } = await supabase
      .from("DF-FreelancerAppliedGigs")
      .select(
        `
          gig_id,
          DF-CreatedGig (
            *
          )
        `
      );
    if (data) {
      console.log("submitData:", data);
      const gigDataIndex = data.length - 1;
      console.log("gigDataIndex:", gigDataIndex);
      const gigId = data[gigDataIndex].gig_id;
      console.log("GigId:", gigId);
      localStorage.setItem("freelancergigId", gigId);
    } else {
      console.log("error fetchiing data:", error);
    }
  };
  useEffect(() => {
    fetchGigData();
  });
  const giigId = localStorage.getItem("freelancergigId");
  localStorage.removeItem("freelancergigId");
  console.log("gigIdAfter:", giigId);
  console.log("type of gigId:", typeof giigId);
  const actualGigId = parseInt(giigId, 10);
  console.log("actual-escrwId:", actualGigId);
  console.log("actual-escrwId type:", typeof actualGigId);
  const escrowProjectSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("DF-FreelancerAppliedGigs")
      .update({ status: "Submitted" })
      .eq("gig_id", actualGigId)
      .select();
    if (error) {
      console.error("Error updating column:", error);
    } else {
      console.log("Enum column updated successfully:", data);
    }
    console.log(userId, projectUrl);
    closeModal();
    alert("Project successfully submitted");
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Submit Project
                  </Dialog.Title>

                  <form onSubmit={escrowProjectSubmit}>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold my-3 text-center">{`User Id : ${userId}`}</p>
                      <label
                        htmlFor="projectUrl"
                        className="text-lg w-5/12 font-semibold my-1"
                      >
                        Project URL :{" "}
                      </label>
                      <input
                        type="text"
                        name="projectUrl"
                        id="projectUrl"
                        className="border border-blue-600 rounded-md px-2 py-1 my-3"
                        placeholder="Github repo / Google Drive / other url"
                        onChange={(e) => setProjectUrl(e.target.value)}
                      />
                      <div className="my-3">
                        <button
                          type="submit"
                          className="text-lg font-semibold border border-blue-600 w-full py-2 my-3 rounded-md bg-blue-100 hover:bg-blue-200"
                        >
                          Submit Project
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SubmitEscrowProject;
