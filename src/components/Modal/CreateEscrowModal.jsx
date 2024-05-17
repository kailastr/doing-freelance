import React, { Fragment, useState, useEffect } from "react";
import { watchContractEvent } from "@wagmi/core";
import EscrowSuccessModal from "./EscrowSuccessModal";

//headless ui modal
import { Dialog, Transition } from "@headlessui/react";
import { writeContract, getAccount } from "@wagmi/core";
import { connectConfig } from "../../ConnectKit/Web3Provider";
import { blanceAbi, blanceAddress } from "../../contractAbi/blance";
import supabase from "../../config/supabaseConfig";

const CreateEscrow = ({ isOpen, setIsOpen, userId, indexedData, index }) => {
  const [expandModal, setExpandModal] = useState(false);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const [freelancerAddr, setFreelancerAddr] = useState("");
  const [escrowDeadline, setEscrowDeadline] = useState("");
  const [escrowAmount, setEscrowAmount] = useState("");
  const [depositEscrowId, setDeopiteEscrowId] = useState("");
  const [daata, setAllData] = useState([]);

  const numSeconds = 86400;
  var createdEscrowId;

  const fetchGigId = async () => {
    const { data, error } = await supabase
      .from("DF-FreelancerAppliedGigs") // Replace 'users' with your table name
      .select(
        `
    id,
    gig_id,
    DF-CreatedGig (
      *
    )
  `
      );
    console.log("freelancerGigData:", data);
    console.log("freelancerGigData", data);
    var gigIdIndex = data.length - 1;
    console.log("data-length:", gigIdIndex);
    console.log("wholeIndexedData:", indexedData);
    console.log("gig_Index:", index);
    const gigId = data[index]?.gig_id;
    console.log("GIGID:", gigId);
    localStorage.setItem("gig_id", gigId);
    setAllData[data];
  };
  useEffect(() => {
    fetchGigId();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  // ("0x55ef2dc8a312e2149876a371663148fd291bb68e7f62e62073c669059d90d4ab");
  // ("0x19290a27e9f213c86c61c2ad7a0b90badbafc34f37dda391a70727a20c1ffe12");
  const watchEvent = async () => {
    console.log("eventinte ullil...");
    watchContractEvent(connectConfig, {
      abi: blanceAbi,
      address: blanceAddress,
      eventName: "EscrowCreated",
      onLogs(logs) {
        console.log("New logs!:", logs);
        if (logs.length > 0) {
          const escrowId = logs[0].args._escrowId;
          const escrowAmount = logs[0].args._escrowAmt;
          console.log("typeOf EscrwAmt:", typeof escrowAmount);
          console.log("loggedEscrwAmt:", escrowAmount);
          const newEscrwAmt = escrowAmount * BigInt(10 ** 14);
          console.log("newEscrwAmt:", newEscrwAmt);
          localStorage.setItem("escrowId", escrowId);
          localStorage.setItem("escrowAmt", newEscrwAmt);

          console.log("Escrow ID:", escrowId);
        }
      },
      onError(error) {
        console.error("Logs error", error);
      },
    });
    setTimeout(async () => {
      const escrowId = localStorage.getItem("escrowId");
      const giigId = localStorage.getItem("gig_id");
      localStorage.removeItem("escrowId");
      localStorage.removeItem("gig_id");
      console.log("fetched-gigIdAfter:", giigId);
      localStorage.setItem("createdEscrowId", escrowId);
      console.log("fetched-escrowIdAfter:", escrowId);
      console.log("fetched-indexData:", indexedData);
      const { data, error } = await supabase
        .from("DF-FreelancerAppliedGigs")
        .update({
          status: "Accepted",
          escrow_id: escrowId, //indexedData?.escrow_id
          escrow_amount: escrowAmount, //indexedData?.escrow_amount
        })
        .eq("gig_id", indexedData?.gig_id)
        .select();

      if (error) {
        console.error("Error updating column:", error);
      } else {
        console.log("Enum column updated successfully:", data);
      }
    }, 17000);
  };

  const createEscrow = async () => {
    console.log("escrowDeadline1:", escrowDeadline);
    console.log("escrowAmt1:", escrowAmount);
    console.log("freelancerAddr1:", freelancerAddr);
    const escrowTx = await writeContract(connectConfig, {
      abi: blanceAbi,
      address: blanceAddress,
      functionName: "createEscrow",
      args: [freelancerAddr, escrowDeadline, escrowAmount],
    });
    console.log("escrowDeadline:", escrowDeadline);
    console.log("escrowAmt:", escrowAmount);
    console.log("freelancerAddr:", freelancerAddr);

    await watchEvent();
    setTimeout(async () => {
      closeModal();

      setIsSuccessModalOpen(true);
    }, 5000);
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
                          onChange={(e) =>
                            setEscrowDeadline(e.target.value * numSeconds)
                          }
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
                          onClick={async () => await createEscrow()}
                        >
                          Create Escrow
                        </div>
                      </div>
                      {isSuccessModalOpen && (
                        <EscrowSuccessModal
                          isOpen={isSuccessModalOpen}
                          setIsOpen={setIsSuccessModalOpen}
                          isEscrowSuccess={true}
                        />
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
