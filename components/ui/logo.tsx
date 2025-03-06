import Image from "next/image";
import Link from "next/link";
import Stripes from "@/public/images/LOGO.svg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="zazubot">
      <Image
        className="max-w-none"
        src={Stripes}
        width={150}
        height={80}
        alt="Stripes"
      />
    </Link>
  );
}
