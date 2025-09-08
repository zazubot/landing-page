import Image from "next/image";
import Link from "next/link";
import saudibusiness from "@/public/images/cert/saudibusiness.svg";

type LogoProps = Readonly<{
  width?: number;
  height?: number;
}>;

export default function Saudibusiness({ width = 150, height = 80 }: LogoProps) {
  return (
    <Link
      href="https://eauthenticate.saudibusiness.gov.sa/inquiry?certificateRefID=0000192248"
      className="inline-flex"
      aria-label="saudibusiness"
    >
      <Image
        className="max-w-none"
        src={saudibusiness}
        width={width}
        height={height}
        alt="saudibusiness"
      />
    </Link>
  );
}
