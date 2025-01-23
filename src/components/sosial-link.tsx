import { Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function NeoBrutalismSocialLinks() {
  return (
    <nav className="max-w-xs mx-auto space-y-5 mt-[50px]">
      {/* WhatsApp Link */}
      <Link
        href="https://wa.link/x9la67"
        className="flex items-center justify-center relative bg-[#25D366] text-white rounded-none border-4 border-black p-2.5 w-full hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
      >
        <MessageCircle className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12" />
        <span className="text-2xl font-bold uppercase text-center block">WhatsApp</span>
      </Link>

      {/* Gmail Link */}
      <Link
        href="mailto:centralphototangerang@gmail.com"
        className="flex items-center justify-center relative bg-[#EA4335] text-white rounded-none border-4 border-black p-2.5 w-full hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
      >
        <Mail className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12" />
        <span className="text-2xl font-bold uppercase text-center block">Gmail</span>
      </Link>

      {/* Google Maps Link */}
      <Link
        href="https://goo.gl/maps/yourlocation"
        className="flex items-center justify-center relative bg-[#4285F4] text-white rounded-none border-4 border-black p-2.5 w-full hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
      >
        <MapPin className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12" />
        <span className="text-2xl font-bold uppercase text-center block">Maps</span>
      </Link>
    </nav>
  );
}
