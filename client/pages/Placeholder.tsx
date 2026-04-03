import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(90deg, #3B1B1E 18.39%, #3A2618 28.91%, #302D25 51.92%, #1F393F 86.91%)",
      }}
    >
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 text-center">
        <h1 className="text-white font-poppins text-3xl md:text-5xl font-semibold">
          {pageName}
        </h1>
        <p className="text-white/60 font-poppins text-lg max-w-md">
          This page is coming soon. Continue prompting to fill in this section's content.
        </p>
        <Link
          to="/"
          className="flex items-center gap-3 bg-brand-green text-white font-poppins text-base font-normal px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
        >
          Back to Home
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3333 4.16669C13.3333 4.78502 13.9442 5.70835 14.5625 6.48335C15.3575 7.48335 16.3075 8.35585 17.3967 9.02169C18.2133 9.52085 19.2033 10 20 10M20 10C19.2033 10 18.2125 10.4792 17.3967 10.9784C16.3075 11.645 15.3575 12.5175 14.5625 13.5159C13.9442 14.2917 13.3333 15.2167 13.3333 15.8334M20 10H0" stroke="white"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
