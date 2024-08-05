import { merriweather } from "@/app/fonts";
import { Modal } from "flowbite-react";
import { CloseCircle } from "iconsax-react";
import Image from "next/image";

export default function BookingConfirmedModal({ isOpen, onClose }) {
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
                <p className="text-lg font-semibold">Call booked!</p>
                <p className="text-sm font-semibold">Pawsome! Your call has been scheduled.</p>
            </div>
            <div className="text-dark text-sm space-y-2">
                <p className="font-semibold">What happens next?</p>
                <ul className="text-sm mx-3 list-disc">
                    <li>Check Your Email: We&apos;ve sent a confirmation to your email with the details of your scheduled call.</li><br />
                    <li>Be Ready: Make sure to be available at the chosen time, so we can discuss everything you need to know about your new pet.</li>
                </ul>
            </div>
          </Modal.Body>
          <div className="flex justify-end">

                <Image width={200} height={200} className="h-[122px] w-auto" alt={'boss dog'} src="https://res.cloudinary.com/dn5ks1ljf/image/upload/v1716588238/boss-dog_fminzh.svg" />
          </div>
        </Modal>
      </div>
    </>
  );
}