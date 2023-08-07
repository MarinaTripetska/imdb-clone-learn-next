import Image from "next/image";

export default function loading() {
  return (
    <div className="flex justify-center">
      <Image
        width={300}
        height={300}
        src="assets/icons/spinner.svg"
        alt="loading..."
      />
    </div>
  );
}
