"use client"
import { merriweather } from "@/app/fonts";
import { Modal, Spinner } from "flowbite-react";
import { CloseCircle } from "iconsax-react";
import { useState } from "react";

export default function AdoptionFormModal({ isOpen, onClose, onFormSubmit }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose();
      onFormSubmit();
    }, 2000);
  };

  return (
    <>
      <div className="max-w-xl mx-auto">
        <Modal
          dismissible
          show={isOpen}
          onClose={onClose}
          size="xl"
          position="top-center"
          className="z-50"
        >
          <div
            className={`${merriweather.className} overflow-y-auto text-lg py-4 px-6 text-dark flex flex-row justify-between`}
          >
            Book a Call With Us
            <CloseCircle
              className="cursor-pointer"
              color="#ababab"
              variant="Bold"
              size="32"
              onClick={onClose}
            />
          </div>
          <hr />
          <Modal.Body>
            <div className="text-sm font-semibold m-4 rounded-xl py-4 px-6 bg-bluepalest border border-bluebase text-dark">
              Meeting link will be sent to{" "}
              <a href="#" className="text-bluebase hover:underline">
                johnyman@purrfect.com
              </a>
              . You can change this in your account settings.
            </div>
            <form 
              className="flex flex-col gap-4 m-4 text-dark font-semibold" 
              onSubmit={handleSubmit}
            >
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  Where are you located?
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-secondary focus:border-secondarydeep block w-full lg:w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondarydeep"
                  placeholder="Enter your address"
                  required
                />
              </div>
              
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  Have you owned a pet before?
                </label>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="yescheck"
                        value=""
                        name="default-radio"
                        type="radio"
                        className="w-4 h-4 border border-gray-300 rounded-full checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="yescheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="nocheck"
                        type="radio"
                        value=""
                        name="default-radio"
                        className="w-4 h-4 border border-gray-300 rounded-full checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="nocheck"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="text"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  We&apos;ll explain this pet&apos;s medical and behavioral history.
                  Please check any additional topics you&apos;d like to discuss:
                </label>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="feeding"
                        value=""
                        name="feeding"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="feeding"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Feeding this pet
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="proofing"
                        type="checkbox"
                        value=""
                        name="proofing"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="proofing"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Puppy/kitten-proofing your household
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="trainer"
                        type="checkbox"
                        value=""
                        name="trainer"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="trainer"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Working with a trainer
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="vet"
                        type="checkbox"
                        value=""
                        name="vet"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="vet"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Finding a vetinary
                    </label>
                  </div>
                </div>
              </div>
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="source"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  How did you hear about Purrfect Orphanage?
                </label>
                <div className="flex flex-col gap-2 items-start">
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="friend"
                        value=""
                        name="source"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="friend"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      From a friend
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="social-media"
                        type="checkbox"
                        value=""
                        name="source"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="social-media"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Social media AD
                    </label>
                  </div>
                  <div className="flex">
                    <div className="flex items-center h-5">
                      <input
                        id="google-search"
                        type="checkbox"
                        value=""
                        name="source"
                        className="w-4 h-4 border border-gray-300 rounded checked:bg-accent bg-gray-50 focus:ring-3 focus:ring-accentpaler dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <label
                      htmlFor="google-search"
                      className="ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Google search
                    </label>
                  </div>
                </div>
              </div>
              <div className="py-4 border-b border-gray-300">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-dark dark:text-white"
                >
                  Do you have any other information you&apos;d like to share or questions you may have?
                </label>
                <textarea
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-secondary focus:border-secondarydeep block w-full lg:w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondarydeep"
                  placeholder="Your text here..."
                />
              </div>
              <div className="flex justify-end gap-3">
                <button
                  disabled={loading}
                  className="flex justify-center text-accent mb-3 lg:px-8 py-2 font-medium rounded-full text-sm px-8 text-center border border-accent bg-white hover:bg-accentpalest"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex justify-center items-center text-white mb-3 lg:px-8 py-2 font-medium rounded-full text-sm px-8 text-center bg-accent hover:bg-accentdeep"
                >
                  {loading ? <Spinner size="sm" /> : "Submit"}
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}