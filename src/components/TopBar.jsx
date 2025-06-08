import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#494949] text-white text-sm py-2 px-4 flex justify-between items-center">
      {/* Mobile View */}
      <div className="flex sm:hidden pb-2 pt-2 justify-between w-full items-center">
       <a href="https://www.facebook.com/doctorteethdental"   target="_blank"
  rel="noopener noreferrer"><Facebook className="w-6 h-6 text-[#A6BF39] cursor-pointer transition-transform duration-200 hover:scale-110" />  </a>
          
   <button className="bg-[#A6BF39] cursor-pointer text-black px-3 py-1.5 rounded text-sm font-semibold transition duration-200 hover:bg-[#90aa32] hover:scale-105">
          Book appointment
        </button>
   <a  href="https://www.instagram.com/doctorteethclinic/"   target="_blank"
  rel="noopener noreferrer">     <Instagram className="w-6 h-6 text-[#A6BF39] cursor-pointer transition-transform duration-200 hover:scale-110" /></a>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-y-2 w-full">
        {/* Left: Address & Phone */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-6 gap-y-1 sm:max-w-[60%] w-full text-base break-words">
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-[#A6BF39] transition-transform duration-200 hover:scale-110" />
            <span className="leading-tight">Ajmal Center, near Nadra Executive Office, opp. Gourmet Bakers, Batala Colony Faisalabad</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5 text-[#A6BF39] transition-transform duration-200 hover:scale-110" />
            <span className="leading-tight">+92 321 6739504</span>
          </div>
        </div>

        {/* Right: Social Icons & Buttons */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-base w-full sm:w-auto">
          <div className="flex items-center space-x-3">
          <a href="https://www.facebook.com/doctorteethdental"   target="_blank"
  rel="noopener noreferrer"><Facebook className="w-6 h-6 text-[#A6BF39] cursor-pointer transition-transform duration-200 hover:scale-110" />  </a>
          
   <a  href="https://www.instagram.com/doctorteethclinic/"   target="_blank"
  rel="noopener noreferrer">     <Instagram className="w-6 h-6 text-[#A6BF39] cursor-pointer transition-transform duration-200 hover:scale-110" /></a>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white" />

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
           <a
  href="https://wa.me/923216739504"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#A6BF39] cursor-pointer text-black px-4 py-2 rounded text-base font-semibold transition duration-200 hover:bg-[#90aa32] hover:scale-105">
    Book Appointment
  </button>
</a>

           <a
  href="https://g.co/kgs/k3KWKpS"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-[#A6BF39] cursor-pointer text-black px-4 py-2 rounded text-base font-semibold transition duration-200 hover:bg-[#90aa32] hover:scale-105">
    Google Reviews
  </button>
</a>

          </div>
        </div>
      </div>
    </div>
  );
}
