import { merriweather } from "@/app/fonts";
import { Modal } from "flowbite-react";
import { CloseCircle } from "iconsax-react";

export default function TermsModal({ isOpen, onClose }) {
  return (
    <>
      <div className="max-w-xl mx-auto">
        <Modal className="z-50" dismissible show={isOpen} onClose={onClose} size="xl" position="top-center">
          <div
            className={`${merriweather.className} overflow-y-auto text-lg py-4 px-6 text-dark flex flex-row justify-between`}
          >
            Furry Friends Terms and Conditions
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
            <div className="flex flex-col text-sm text-dark gap-1 p-4">
              <p className="font-semibold">Welcome to Furry Friends!</p>
              <p>
                Thank you for choosing Furry Friends. By accessing or using our
                website and services, you agree to comply with and be bound by
                the following terms and conditions. Please read them carefully.
              </p>
            </div>
            <div className="text-dark text-sm space-y-4 p-4">
              <ol
                // style={{ listStyleType: 'decimal' }}
                className="font-semibold flex flex-col gap-4 list-decimal"
              >
                <li className="flex flex-col gap-1">
                  <p>1. Acceptance of Terms</p>
                  <p className="font-normal">
                    By creating an account, browsing our website, or using our
                    services, you agree to be bound by these Terms and
                    Conditions and our Privacy Policy. If you do not agree,
                    please do not use our services.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>2. Eligibility</p>
                  <p className="font-normal">
                    To use our services, you must be at least 18 years old and
                    capable of forming a legally binding contract. By using
                    Furry Friends, you represent and warrant that you meet these
                    requirements.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>3. Account Registration</p>
                  <p className="font-normal">
                    You agree to provide accurate, current, and complete
                    information during the registration process and to update
                    such information to keep it accurate, current, and complete.
                    You are responsible for safeguarding your account password
                    and for any activities or actions under your account.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>4. Adoption Process</p>
                  <ul className="list-decimal font-normal pl-6">
                    <li>
                      Creating an Account: You must create an account to adopt a
                      pet.
                    </li>
                    <li>
                      Finding a Pet: Browse our listings to find your perfect
                      match.
                    </li>
                    <li>
                      Booking a Call: Before adopting, you must schedule a call
                      with us to discuss the adoption and address any questions
                      or concerns.
                    </li>
                    <li>
                      Finalizing Adoption: Upon approval, arrangements will be
                      made for you to receive your new pet.
                    </li>
                  </ul>
                </li>
                <li className="flex flex-col gap-1">
                  <p>5. User Conduct</p>
                  <p className="font-normal">You agree not to:</p>
                  <ul className="list-decimal font-normal pl-6">
                    <li>
                      Use our services for any unlawful purpose or in any way
                      that could harm others.
                    </li>
                    <li>
                      Post or transmit any content that is offensive,
                      defamatory, or infringes on the rights of others.
                    </li>
                    <li>
                      Impersonate any person or entity, or misrepresent your
                      affiliation with any person or entity.
                    </li>
                  </ul>
                </li>
                <li className="flex flex-col gap-1">
                  <p>6. Privacy</p>
                  <p className="font-normal">
                    Your use of our services is also governed by our Privacy
                    Policy, which outlines how we collect, use, and protect your
                    personal information.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>7. Fees and Payments</p>
                  <p className="font-normal">
                    Certain services, such as adoption fees, may require
                    payment. All fees are non-refundable unless otherwise
                    stated.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>8. Disclaimers</p>
                  <p className="font-normal">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Furry Friends provides services on an "as-is" and
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    "as-available" basis. We do not warrant that our services
                    will be uninterrupted or error-free. We are not responsible
                    for the behavior or health of pets adopted through our
                    platform.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>9. Limitation of Liability</p>
                  <p className="font-normal">
                    In no event shall Furry Friends be liable for any indirect,
                    incidental, special, or consequential damages arising out of
                    or in connection with your use of our services.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>10. Termination</p>
                  <p className="font-normal">
                    We reserve the right to terminate or suspend your account
                    and access to our services, without prior notice or
                    liability, for any reason, including if you breach these
                    Terms and Conditions.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>11. Governing Law</p>
                  <p className="font-normal">
                    These Terms and Conditions are governed by and construed in
                    accordance with the laws of [Your Country/State], without
                    regard to its conflict of law principles.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>12. Changes to Terms</p>
                  <p className="font-normal">
                    These Terms and Conditions are governed by and construed in
                    accordance with the laws of [Your Country/State], without
                    regard to its conflict of law principles.
                  </p>
                </li>
                <li className="flex flex-col gap-1">
                  <p>13. Contact Us</p>
                  <p className="font-normal">
                  If you have any questions about these Terms and Conditions, please contact us at <a className="text-bluebase hover:underline"  href="https://www.gmail.com">robinshattajohnpercy@gmail.com</a>
                  </p>
                </li>
              </ol>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}