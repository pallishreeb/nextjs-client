import { Mail, PhoneCall, LocateIcon, LocateFixedIcon } from "lucide-react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export const TopNav: React.FC = () => {
  const latitude = 20.66249607748869;
  const longitude = 85.59409979447742;

  const handleOpenLocation = () => {
    // Construct the Google Maps URL with the coordinates
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

    // Open the URL in a new window or tab
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div className=" p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <Link href="/" legacyBehavior>
          <a className="font-bold text-xl">
            <img src="./images/cg.png" alt="cg-logo" width={40} height={35} />
          </a>
        </Link>

        {/* Contact Information (Text for larger screens, Icons for smaller screens) */}
        <div className="hidden lg:flex items-center space-x-4">
          <span>
            {" "}
            <a
              href={`mailto:${"kroztekintegratedsolution@gmail.com"}?subject=Email%20Subject&body=Hello%2C%20I%20want%20to%20email`}
            >
              kroztekintegratedsolution@gmail.com
            </a>
          </span>
          <span>+918637214899</span>
          <span onClick={handleOpenLocation} className="cursor-pointer">
            Dhenkanal,Odisha
          </span>
          <ThemeSwitcher />
        </div>

        <div className="flex lg:hidden items-center space-x-4">
          {/* Email Icon */}
          <span className="text-xl">
            <a
              href={`mailto:${"kroztekintegratedsolution@gmail.com"}?subject=Email%20Subject&body=Hello%2C%20I%20want%20to%20email`}
            >
              <Mail />
            </a>
          </span>

          {/* Phone Icon */}
          <span className="text-xl">
            <a href="tel:+918637214899">
              {" "}
              <PhoneCall />
            </a>
          </span>

          {/* Locations Icon */}
          <span className="text-xl" onClick={handleOpenLocation}>
            <LocateFixedIcon />
          </span>
          <span className="text-xl">
            <ThemeSwitcher />
          </span>
        </div>
      </div>
    </div>
  );
};
