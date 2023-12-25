import { Mail, PhoneCall, LocateIcon } from "lucide-react";
import Link from "next/link";

export const TopNav: React.FC = () => {
    return (
      <div className=" p-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* Brand Name */}
          <Link href="/" legacyBehavior>
            <a className="font-bold text-xl">CG</a>
          </Link>
  
          {/* Contact Information (Text for larger screens, Icons for smaller screens) */}
          <div className="hidden lg:flex items-center space-x-4">
            <span>Email: info@example.com </span>
            <span>Phone: 123-456-7890</span>
            <span>Locations: Your Locations</span>
          </div>
  
          <div className="flex lg:hidden items-center space-x-4">
            {/* Email Icon */}
            <span className="text-xl">
            <Mail />
            </span>
  
            {/* Phone Icon */}
            <span className="text-xl">
              <PhoneCall/>
            </span>
  
            {/* Locations Icon */}
            <span className="text-xl">
             <LocateIcon/>
            </span>
          </div>
        </div>
      </div>
    );
  };