import { Modal } from "flowbite-react";
import { merriweather } from "@/app/fonts";
import { CloseCircle } from "iconsax-react";

export default function DonationCompleteModal({ isOpen, onClose }) {
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
            className={`${merriweather.className} overflow-y-auto  py-4 px-6 text-dark flex justify-end`}
          >
            <CloseCircle
              className="cursor-pointer"
              color="#ababab"
              variant="Bold"
              size="32"
              onClick={onClose}
            />
          </div>
          <hr />
          <Modal.Body className="flex flex-col mt-5 mb-12 mx-4">
            <div className="text-dark">
              <p className="text-lg font-semibold">Donation Successful!</p>
              <p className="text-sm font-semibold">
              Your support means the world to us and the pets we care for. Thank you for being a hero for our PurrFect Friends!
              </p>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}