import Image from "next/image";
import { TextAnimate } from "./ui/text-animate";

export default function Hero() {
  return (
    <div className="w-full h-auto pt-[100px]">
      <div className="relative w-64 mx-auto flex flex-col items-center">
        {/* Lingkaran dengan gambar */}
        <div className="relative w-52 h-52 rounded-full overflow-hidden border-2 flex items-center justify-center">
          <Image
            src="/ang.jpg"
            alt="Circle Image"
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
        <p className="font-bold text-center text-2xl flex flex-row mt-4 text-white">CENTRAL PHOTO</p>
        {/* Garis horizontal */}
        <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent rounded-full mt-2" />
        {/* Teks di bawah lingkaran */}
      </div>
      <div className="max-w-md text-center mx-auto justify-center flex mt-4 px-6">
      <TextAnimate animation="slideLeft" by="word" className="text-white" duration={1000} delay={30}>
         Kami menyediakan berbagai layanan seperti cetak foto dan canvas cetak besaran cetak banner bingkai foto album foto album kolase Dll.
    </TextAnimate>
      </div>
    </div>
  );
}

