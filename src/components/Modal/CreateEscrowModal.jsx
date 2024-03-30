import React, { Fragment, useState } from "react";

//headless ui modal
import { Dialog, Transition } from "@headlessui/react";
import { writeContract, getAccount } from "@wagmi/core";
import { connectConfig } from "../../ConnectKit/Web3Provider";
import { blanceAbi, blanceAddress } from "../../contractAbi/blance";
import supabase from "../../config/supabaseConfig";

const CreateEscrow = ({ isOpen, setIsOpen, userId }) => {
  const [expandModal, setExpandModal] = useState(false);

  const [freelancerAddr, setFreelancerAddr] = useState("");
  const [escrowDeadline, setEscrowDeadline] = useState("");
  const [escrowAmount, setEscrowAmount] = useState("");
  const [depositEscrowId, setDeopiteEscrowId] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  var createdEscrowId;
  const createEscrow = async () => {
    const escrowTx = await writeContract(connectConfig, {
      abi: blanceAbi,
      address: blanceAddress,
      functionName: "createEscrow",
      args: [freelancerAddr, escrowDeadline, escrowAmount],
    });
    createdEscrowId = escrowTx;
    console.log("ecsroowId:", createdEscrowId);
    console.log("escrowId:", escrowTx);
    localStorage.setItem("escrowIdd", escrowTx);
    if (escrowTx.length !== 0) {
      const { data, error } = await supabase
        .from("DF-FreelancerAppliedGigs")
        .update({ status: "Accepted" })
        .eq("id", 2)
        .select();
      if (error) {
        console.error("Error updating enum column:", error);
      } else {
        console.log("Enum column updated successfully:", data);
      }
    }
  };
  const escrowDeposit = async () => {
    const escrowId = localStorage.getItem("escrowIdd");
    const escrowTx = await writeContract(connectConfig, {
      abi: blanceAbi,
      address: blanceAddress,
      functionName: "escrowDeposited",
      args: [escrowId],
    });
    console.log("escrowId:", escrowTx);
  };

  const account = getAccount(connectConfig);
  const escrowSubmit = async (e) => {
    e.preventDefault();
    console.log(userId, freelancerAddr, escrowAmount, depositEscrowId);
    closeModal();
    alert("Escrow Successfully created");
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
                    Create an escrow
                  </Dialog.Title>

                  <form onSubmit={escrowSubmit}>
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold my-3 text-center">{`User Id : ${userId}`}</p>
                      <div className="flex gap-5 items-center my-3">
                        <label
                          htmlFor="CreateEscrowId"
                          className="text-lg w-5/12 font-semibold"
                        >
                          Freelancer-Addr :{" "}
                        </label>
                        <input
                          type="text"
                          name="CreateEscrowId"
                          id="CreateEscrowId"
                          className="border border-blue-600 rounded-md py-1 px-2"
                          onChange={(e) => setFreelancerAddr(e.target.value)}
                          placeholder="Enter freelancer address"
                        />
                      </div>

                      <div className="flex gap-5 items-center my-3">
                        <label
                          htmlFor="escrowDeadline"
                          className="text-lg w-5/12 font-semibold"
                        >
                          Escrow Deadline
                        </label>
                        <input
                          type="number"
                          name="escrowDeadline"
                          id="escrowDeadline"
                          className="border border-blue-600 rounded-md py-1 px-2"
                          onChange={(e) => setEscrowDeadline(e.target.value)}
                          placeholder="Num of days until the deadline"
                        />
                      </div>
                      <div className="flex gap-5 items-center my-3">
                        <label
                          htmlFor="escrowAmount"
                          className="text-lg w-5/12 font-semibold"
                        >
                          Escrow Amount :{" "}
                        </label>
                        <input
                          type="text"
                          name="escrowAmount"
                          id="escrowAmount"
                          className="border border-blue-600 rounded-md px-2 py-1"
                          placeholder="In USDT"
                          onChange={(e) => setEscrowAmount(e.target.value)}
                        />
                      </div>
                      <div className="my-3">
                        <div
                          className="text-lg text-center font-semibold border border-blue-600 w-full py-2 rounded-md bg-blue-100 hover:bg-blue-200 cursor-pointer"
                          onClick={() => createEscrow()}
                        >
                          Create Escrow
                        </div>
                      </div>
                      {expandModal && (
                        <div className="my-3">
                          <div className="flex items-center gap-5">
                            <p>Escrow Id Successfully Created</p>
                            {`EscrowId:${createdEscrowId}`}
                          </div>
                          <button
                            type="submit"
                            className="text-lg font-semibold border border-blue-600 w-full py-2 rounded-md bg-blue-100 hover:bg-blue-200"
                            onClick={() => escrowDeposit()}
                          >
                            Deposit Escrow-Amount
                          </button>
                        </div>
                      )}
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

export default CreateEscrow;
