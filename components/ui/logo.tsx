import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";

type LogoProps = Readonly<{
  width?: number;
  height?: number;
}>;

export default function Logo({ width = 150, height = 80 }: LogoProps) {
  return (
    <Link href="/" className="inline-flex" aria-label="zazubot">
      <Image
        className="max-w-none"
        src={logo}
        width={width}
        height={height}
        alt="logo"
      />
    </Link>
  );
}
