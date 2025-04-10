import Image from "next/image";
import applePay from "@/public/images/providers/apple-pay.png";
import bank from "@/public/images/providers/bank_transfer.webp";
import Mada from "@/public/images/providers/Mada.svg";
import visa from "@/public/images/providers/Visa.png";
import master from "@/public/images/providers/Master.png";

export default function Providers() {
  return (
    <div className="pb-12 text-center md:pb-16">
      <div
        className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
        data-aos="zoom-y-out"
      >
        <div className="-mx-0.5 flex justify-center space-x-3">
          <Image
            className="box-content rounded-full border-2 border-neutral-50"
            src={applePay}
            width={64}
            height={64}
            alt="Avatar 01"
          />
          <Image
            className="box-content rounded-full border-2 border-neutral-50"
            src={bank}
            width={64}
            height={64}
            alt="Avatar 01"
          />

          <Image
            className="box-content rounded-full border-2 border-neutral-50"
            src={Mada}
            width={64}
            height={64}
            alt="Avatar 03"
          />
          <Image
            className="box-content rounded-full   border-2 border-neutral-50"
            src={master}
            width={64}
            height={64}
            alt="Avatar 04"
          />
          <Image
            className="box-content rounded-full border-2 border-neutral-50"
            src={visa}
            width={64}
            height={64}
            alt="Avatar 05"
          />
        </div>
      </div>
    </div>
  );
}
