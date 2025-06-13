"use client";

import Image from "next/image";
import { Partner } from "@/data/partners";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

interface PartnerCardProps {
  partner: Partner;
}

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center space-y-4">
      <div className="relative w-32 h-32 mx-auto">
        <Image src={partner.logo} alt={partner.service} fill className="object-contain" />
      </div>
      <h3 className="text-xl font-bold">{partner.service}</h3>
      <div className="flex justify-center text-purple-700 space-x-4 text-2xl">
        <a href={partner.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-purple-900">
          <FaInstagram />
        </a>
        <a href={`mailto:${partner.email}`} className="hover:text-purple-900">
          <FaEnvelope />
        </a>
        <a href={`tel:${partner.phone}`} className="hover:text-purple-900">
          <FaPhone />
        </a>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full">
        {partner.images.map((img, idx) => (
          <div key={idx} className="relative w-full h-28 rounded-md overflow-hidden">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
