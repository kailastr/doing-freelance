import React from "react";

//headless ui modal
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

//icon
import { MdOutlineDoneOutline } from "react-icons/md";

const EscrowSuccessModal = ({ isOpen, setIsOpen, isEscrowSuccess }) => {
  // let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (isEscrowSuccess) {
    var message = "Escrow Successfully created";
  } else {
    var message = "Dispute Successfully Resolved";
  }

  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                    Open dialog
                </button>
            </div> */}

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
                  <div className="mt-2 flex items-center justify-center gap-5">
                    <p className="text-lg text-green-500">
                      {message}
                    </p>
                    <MdOutlineDoneOutline className=" bg-green-500 text-white border-2 h-10 w-10 rounded-full p-2" />
                  </div>

                  <div className="mt-4 w-full flex items-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent shadow-lg bg-green-100 px-4 py-2 text-sm font-medium text-green-800 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 mx-auto"
                      onClick={closeModal}
                    >
                      OK
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EscrowSuccessModal;
