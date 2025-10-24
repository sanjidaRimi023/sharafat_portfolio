"use client";
import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  Home,

  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Code,

  FolderGit,
  Briefcase,
  Phone,
  File,
} from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    path: "https://github.com/sanjidaRimi023",
    icon: <Github size={18} />,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/sanjida-akter-rimi711909",
    icon: <Linkedin size={18} />,
  },
  {
    name: "Email",
    path: "mailto:sanjidarimi023@gmail.com",
    icon: <Mail size={18} />,
  },
];

const menuItems = [
  {
    icon: <Home className="h-5 w-5" />,
    label: "Home",
    href: "#",
    iconColor: "group-hover:text-[#03d9d7] dark:group-hover:text-[#03d9d7]",
  },
  {
    icon: <Code className="h-5 w-5" />,
    label: "Skills",
    href: "#",
    iconColor: "group-hover:text-[#03d9d7] dark:group-hover:text-[#03d9d7]",
  },
  {
    icon: <FolderGit className="h-5 w-5" />,
    label: "Projects",
    href: "#",
    iconColor: "group-hover:text-[#03d9d7] dark:group-hover:text-[#03d9d7]",
  },
  {
    icon: <Briefcase className="h-5 w-5" />,
    label: "Service",
    href: "#",
    iconColor: "group-hover:text-[#03d9d7] dark:group-hover:text-[#03d9d7]",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Contact",
    href: "#",
    iconColor: "group-hover:text-[#03d9d7] dark:group-hover:text-[#03d9d7]",
  },
  {
    icon: <File className="h-5 w-5" />,
    label: "Resume",
    href: "#",
    iconColor: "group-hover:text-[#03d9d7] dark:group-hover:text-[#03d9d7]",
  },

];

const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5 },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="w-full flex flex-col items-center border-b border-gray-300 dark:border-gray-700 py-4"
      initial="initial"
    >
      {/* Top Section */}
      <div className="w-full flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={100}
          className="object-contain"
        />

       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Nav */}
        <motion.ul className="hidden md:flex items-center gap-6 justify-center">
          {menuItems.map((item) => (
            <motion.li key={item.label} className="relative">
              <motion.div
                className="block rounded-xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                  variants={glowVariants}
                  style={{ opacity: 0 }}
                />
             
                <motion.a
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 relative z-10 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors rounded-xl"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom",
                  }}
                >
                  <span className={item.iconColor}>{item.icon}</span>
                  <span className="font-medium text-sm md:text-base">
                    {item.label}
                  </span>
                </motion.a>
              
                <motion.a
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 absolute inset-0 z-10 transition-colors rounded-xl"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    transform: "rotateX(90deg)",
                  }}
                >
                  <span className={item.iconColor}>{item.icon}</span>
                  <span className="font-medium text-sm md:text-base">
                    {item.label}
                  </span>
                </motion.a>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Social + Mode */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((item) => (
            <motion.a
              whileHover={{ scale: 1.2 }}
              key={item.name}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary border rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {item.icon}
            </motion.a>
          ))}
          <ModeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 mt-4 items-center md:hidden"
        >
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-[#03d9d7]"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
          <div className="flex gap-4 mt-3">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary border rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {item.icon}
              </a>
            ))}
            <ModeToggle />
          </div>
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default MenuBar;
