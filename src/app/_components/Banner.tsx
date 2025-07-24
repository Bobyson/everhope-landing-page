import { TbPhone } from "react-icons/tb";

export function Banner() {
  return (
    <div className="bg-[#D0093B] text-white py-1">
      <div className="max-w-6xl flex gap-2 text-xs justify-end">
        <h2 className="">Book an Appoinment</h2>
        <span className="hidden sm:block">+91 77950 60087</span>
        <span className="flex sm:hidden mr-2">
          <TbPhone className="h-4 w-4" /> Call
        </span>
      </div>
    </div>
  );
}
