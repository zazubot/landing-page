import Image from "next/image";
import Link from "next/link";
import Stripes from "@/public/logo.svg";

export default function Logo({
  width = 150,
  height = 80,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Link href="/" className="inline-flex" aria-label="zazubot">
      <Image
        className="max-w-none"
        src={Stripes}
        width={width}
        height={height}
        alt="Stripes"
      />
    </Link>
  );
}
