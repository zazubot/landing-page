import Image from "next/image";
import Link from "next/link";
import maroof from "@/public/images/cert/maroof.svg";

type LogoProps = Readonly<{
  width?: number;
  height?: number;
}>;

export default function Maroof({ width = 150, height = 80 }: LogoProps) {
  return (
    <Link
      href="https://maroof.sa/businesses/details/364781"
      className="inline-flex"
      aria-label="Maroof"
    >
      <Image
        className="max-w-none"
        src={maroof}
        width={width}
        height={height}
        alt="Maroof Certification"
      />
    </Link>
  );
}
