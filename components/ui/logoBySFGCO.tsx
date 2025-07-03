import Image from "next/image";
import Link from "next/link";
import Stripes from "@/public/logo-sfgco.png";

type LogoBySFGCOProps = Readonly<{
  width?: number;
  height?: number;
}>;

export default function LogoBySFGCO({
  width = 350,
  height = 80,
}: LogoBySFGCOProps) {
  return (
    <Link
      href="https://sfgco.sa/tech/chatbot"
      className="inline-flex"
      aria-label="zazubot"
      target="_blank"
    >
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
