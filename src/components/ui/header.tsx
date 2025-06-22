"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {  ChevronDownIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { getHeaderRes } from "../../../helper";

// types/header.ts
 interface ImageAsset {
  url: string;
  title?: string; // Optional since it's not used in your component
}

interface NavLinkItem {
  linklogo: ImageAsset | null;
  linktitle: string;
}

interface MultiLinkItem {
  multititle: string;
  upperlink: NavLinkItem[];
  lowertitle: string[];
}

interface NavLinks {
  singlink: string[];
  multilink: MultiLinkItem[];
}

 interface StartButtonLink {
  linklogo: ImageAsset | null;
  linktitle: string;
}

interface StartButton {
  signinmenu: string;
  link: StartButtonLink[];
}

interface HeaderData {
  logoimage: ImageAsset;
  navlinkimg: ImageAsset;
  navlinks: NavLinks;
  startbutton: StartButton;
}

function Header1() {
  const [isOpen, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
const [openDropdown, setOpenDropdown] = useState(false);

  const [header, setHeader] = useState<HeaderData | null>(null);
      const [,setLoading] = useState(true)
    
      useEffect(() => {
        const fetchHeader = async () => {
          try {
            const data = await getHeaderRes()
            setHeader(data)
          } catch (err) {
            console.error('Failed to fetch header data:', err)
          } finally {
            setLoading(false)
          }
        }
    
        fetchHeader()
      }, [])
      
  const toggleSubmenu = (title: string) => {
    if (openSubmenu === title) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(title);
    }
  };
  return (
<header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-[3rem] w-[96%] max-w-[82rem] border border-[#cefae849] backdrop-blur-lg bg-gradient-to-b from-[#022b29]/70 to-[#022b29]/70">
  <div className=" relative mx-auto flex min-h-20 items-center justify-between px-3 sm:px-5 lg:px-6">
       
       
        {/* 👇 LEFT SIDE */}
    <div className="flex items-center gap-2 lg:gap-10"> {/* gap between logo and nav */}
                  {/* Left side - Logo */}
                          {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Button 
            variant="ghost" 
            onClick={() => setOpen(!isOpen)}
            className="text-white hover:bg-transparent"
          >
              <motion.div
                className="flex flex-col gap-1.5 w-5"
                animate={isOpen ? "open" : "closed"}
                initial={false}
              >
                <motion.span
                  className="h-0.5 w-full bg-white rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 3 },
                  }}
                />
                <motion.span
                  className="h-0.5 w-full bg-white rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                />
              </motion.div>          </Button>
        </div>
{header?.logoimage?.url && (
  <Image
    src={header.logoimage.url}
    alt="Logo"
    width={90}
    height={30}
  />
)}
        {/* Center - Navigation */}
        <div className="hidden  lg:flex items-center justify-center">
          <NavigationMenu>
<NavigationMenuList className="flex gap-1">
  {/* Center NavLinks from singlink */}
  {header?.navlinks?.singlink?.map((title: string) => (
    <NavigationMenuItem key={title}>
      <NavigationMenuLink className="group relative px-1 py-1 text-sm font-medium text-white transition-none">
        {title}
        <span className="underline-animate absolute left-[10%] bottom-0 w-[80%] h-[2px]"></span>
      </NavigationMenuLink>
    </NavigationMenuItem>
  ))}

  {/* Dropdowns from multilink */}
  {header?.navlinks?.multilink?.map((item) => (
    <NavigationMenuItem key={item.multititle}>
      <NavigationMenuTrigger className="group relative px-2 py-1 text-sm font-medium text-white transition-none">
        {item.multititle}
        <span className="absolute left-[10%] bottom-0 w-[80%] h-[2px]"></span>
      </NavigationMenuTrigger>

      <NavigationMenuContent className="!w-[950px] max-w-[80vw] p-0 bg-white rounded-xl shadow-lg flex border-none overflow-hidden">
        <div className="relative w-[45%] min-h-[400px] bg-[#022b29]">
          {header?.navlinkimg?.url && (
  <Image
    src={header.navlinkimg.url}
            alt="menu bg"
            fill
            className="object-cover"
  />
)}
          <p className="absolute bottom-9 left-9 text-white/90 text-4xl font-light z-10">
            {item.multititle}
          </p>
        </div>

        <div className="w-[55%] p-8 flex flex-col justify-between">
          {/* Top Items */}
          <div className="flex flex-col">
            {item.upperlink?.map((subItem) => (
              <NavigationMenuLink
                key={subItem.linktitle}
                href="#"
                className="flex justify-between items-center px-3 py-2 text-lg font-medium text-[#022b29] hover:bg-[#EBF2F2] rounded-md transition-colors"
              >
                <div className="flex items-center gap-3">
                  {subItem.linklogo?.url && (
                    <Image
                      src={subItem.linklogo.url}
                      alt={subItem.linktitle + " icon"}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  )}
                  <span>{subItem.linktitle}</span>
                </div>
                <ChevronRightIcon className="w-4 h-4 dark-green-text" />
              </NavigationMenuLink>
            ))}
          </div>

          {/* Bottom Items */}
          <div className="flex flex-col">
            {item.lowertitle?.map((bottomTitle: string) => (
              <NavigationMenuLink
                key={bottomTitle}
                href="#"
                className="flex justify-between items-center px-3 py-2 text-lg font-medium text-[#022b29] hover:bg-[#EBF2F2] rounded-md transition-colors"
              >
                <span>{bottomTitle}</span>
                <ChevronRightIcon className="w-4 h-4 dark-green-text" />
              </NavigationMenuLink>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  ))}
</NavigationMenuList>
          </NavigationMenu>
        </div>
</div>


        {/* Right side - Buttons */}
        <div className="flex items-center gap-6">
<button className="relative group lg:block hidden text-sm text-white transition-colors">
  Sign In
  <span className="underline-animate absolute left-0 bottom-0 w-full h-[2px]"></span>
</button>
<div className="relative">
  <Button 
    className="light-green rounded-3xl px-[1.3rem] py-[1.4rem] dark-green-text"
    onClick={() => setOpenDropdown(!openDropdown)}
  >
  {header?.startbutton?.signinmenu || "Get started"}
  </Button>
  
  <AnimatePresence>
    {openDropdown && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute right-0 top-full mt-6 w-64 rounded-xl bg-white shadow-lg z-50 overflow-hidden"
      >
        <div className="p-2">
{header?.startbutton?.link?.map((linkItem) => (
  <Link
    key={linkItem.linktitle}
    href={`/${linkItem.linktitle.toLowerCase().replace(/\s+/g, '-')}`} // OR linkItem.href if it exists
    className="flex rounded-md justify-between items-center px-4 py-3 text-sm font-medium text-[#022b29] hover:bg-[#EBF2F2] transition-colors"
  >
    <div className="flex gap-2">
      {linkItem.linklogo?.url && (
        <Image
          src={linkItem.linklogo.url}
          alt={linkItem.linktitle}
          width={20}
          height={20}
          className="object-contain"
        />
      )}
      <span>{linkItem.linktitle}</span>
    </div>
    <ChevronRightIcon className="w-4 h-4 dark-green-text" />
  </Link>
))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>
        </div>

        {/* Mobile menu */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className="absolute max-h-[75vh] overflow-y-auto rounded-3xl z-20 top-20 left-0 right-0 bg-white border-t border-black/10 flex flex-col w-full p-8 gap-6 lg:hidden"
    >
      {/* Single Links (No dropdown) */}
      {header?.navlinks?.singlink?.map((title: string) => (
        <Link
          key={title}
          href="#"
          className="flex justify-between pb-4 border-b border-black/10 items-center text-black hover:text-black/80 transition-colors"
        >
          <span className="text-lg font-sans">{title}</span>
        </Link>
      ))}

      {/* MultiLinks with dropdown */}
      {header?.navlinks?.multilink?.map((item) => (
        <div key={item.multititle} className="flex flex-col gap-3">
          <button
            onClick={() => toggleSubmenu(item.multititle)}
            className="flex justify-between pb-4 border-b border-black/10 items-center w-full text-black"
          >
            <span className="text-lg font-sans">{item.multititle}</span>
            <motion.div
              animate={{
                rotate: openSubmenu === item.multititle ? 180 : 0
              }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDownIcon className="w-4 h-4 stroke-1" />
            </motion.div>
          </button>

          {openSubmenu === item.multititle && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden space-y-4 px-4 pt-2 flex flex-col gap-4"
            >
              {/* Upper Links First */}
              {item.upperlink?.map((subItem) => (
                <Link
                  key={subItem.linktitle}
                  href="#"
                  className="flex items-center justify-between text-lg text-black hover:text-black/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {subItem.linklogo?.url && (
                      <Image
                        src={subItem.linklogo.url}
                        alt={subItem.linktitle + " icon"}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    )}
                    <span>{subItem.linktitle}</span>
                  </div>
                  <ChevronRightIcon className="w-4 h-4 stroke-1" />
                </Link>
              ))}

              {/* Lower Links After */}
              {item.lowertitle?.map((bottomTitle: string) => (
                <Link
                  key={bottomTitle}
                  href="#"
                  className="flex justify-between text-lg text-black hover:text-black/80 transition-colors"
                >
                  <span>{bottomTitle}</span>
                  <ChevronRightIcon className="w-4 h-4 stroke-1" />
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </header>
  );
}

export { Header1 };