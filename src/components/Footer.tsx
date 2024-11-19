import React from "react";
import { Separator } from "./ui/separator";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-primary-100 text-white space-y-4">
      <div className="container mx-auto flex justify-between py-16">
        <p className="text-3xl font-bold">Karcis.com</p>
        <div className="flex flex-col gap-y-2">
          <h4 className="font-medium text-xl">About Us</h4>
          <p className="font-medium text-base">About Karcis.com</p>
          <p className="font-medium text-base">How it works</p>
          <p className="font-medium text-base">Careers</p>
          <p className="font-medium text-base">Press</p>
          <p className="font-medium text-base">Blog</p>
          <p className="font-medium text-base">Forum</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="font-medium text-xl">Partner with Us</h4>
          <p className="font-medium text-base">Partnership Programs</p>
          <p className="font-medium text-base">Affiliate Program</p>
          <p className="font-medium text-base">Connectivity Partners</p>
          <p className="font-medium text-base">Promotions and events</p>
          <p className="font-medium text-base">Integrations</p>
          <p className="font-medium text-base">Community</p>
          <p className="font-medium text-base">Loyalty Program</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="font-medium text-xl">Support</h4>
          <p className="font-medium text-base">Help Center</p>
          <p className="font-medium text-base">Contact Us</p>
          <p className="font-medium text-base">Privacy Policy</p>
          <p className="font-medium text-base">Terms of Service</p>
          <p className="font-medium text-base">Trust and Safety</p>
          <p className="font-medium text-base">Accessibility</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h4 className="font-medium text-xl">Get The App</h4>
          <p className="font-medium text-base">Karcis.com for Android</p>
          <p className="font-medium text-base">Karcis.com for iOS</p>
          <p className="font-medium text-base">Mobile Site</p>
          <p className="font-medium text-base">Playstore</p>
          <p className="font-medium text-base">App Store</p>
        </div>
      </div>
      <Separator className="bg-white border-white" />
      <div className="container mx-auto flex justify-between items-center pb-4">
        <div className="flex items-center gap-x-4">
          <FaXTwitter size={20} />
          <FaInstagram size={20} />
          <FaFacebook size={20} />
        </div>
        <p>© 2021 Karcis.com</p>
      </div>
    </div>
  );
};

export default Footer;
