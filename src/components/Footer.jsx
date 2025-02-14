import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF className="sm:size-4 size-3" />,
      color: "bg-blue-600",
    },
    { icon: <FaTwitter className="sm:size-4 size-3" />, color: "bg-sky-400" },
    { icon: <FaInstagram className="sm:size-4 size-3" />, color: "bg-red-500" },
    {
      icon: <FaLinkedinIn className="sm:size-4 size-3" />,
      color: "bg-blue-800",
    },
  ];

  const footerLinks = [
    { title: "Quick Links", links: ["Home", "Menu", "Services", "Reviews"] },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Use", "Payment Policy", "Cookies"],
    },
  ];