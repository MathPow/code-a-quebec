import LogoSvg from "@/images/logos/logo.png";
import clsx from "clsx";
import Image from "next/image";

export function Logo(props: Omit<React.ComponentProps<typeof Image>, "src" | "alt">) {
  return (
    <Image
      {...props}
      alt="Logo"
      src={LogoSvg.src}
      className={clsx("rounded-full bg-blue-700 shadow-xl", props.className)}
    />
  );
}
