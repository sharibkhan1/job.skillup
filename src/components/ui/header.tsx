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
import { ArrowRight, ChevronDownIcon, ChevronRightIcon, Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Header1() {
  const navigationItems = [
  {
    title: "For buyers",
    href: "/for-buyers",
  },
  {
    title: "For sellers",
    href: "/for-sellers",
  },
{
    title: "Products",
    items: [
      {
        title: "Gynger Pay",
        href: "/products/gynger-pay",
      },
      {
        title: "AP Financing",
        href: "/products/ap-financing",
      },
      {
        title: "AR Financing",
        href: "/products/ar-financing",
      },
    ],
    botItems:[
              {
        title: "undate Pay",
        href: "/products/gynger-pay",
      },
      {
        title: "AP Integration",
        href: "/products/ap-financing",
      },
    ]
  },
    {
      title: "Solutions",
      items: [
        {
          title: "For finance",
          href: "/about",
        },
        {
          title: "For go-to-market",
          href: "/fundraising",
        },
        {
          title: "For AI",
          href: "/investors",
        },
        {
          title: "For software",
          href: "/contact",
        },


      ],
        botItems:[
            {
          title: "What does Gynger finace>",
          href: "/contact",
        },    
        ]
    },
      {
    title: "Resources",
items: [
        {
          title: "Documentation",
          href: "/about",
        },
        {
          title: "Customer stories",
          href: "/fundraising",
        },
        {
          title: "Blogs",
          href: "/investors",
        },
      ],  
    },
  {
    title: "Company",
 items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Newsroom",
          href: "/fundraising",
        },
        {
          title: "Careers",
          href: "/investors",
        },
      ],
  },
  ];

  const [isOpen, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (title: string) => {
    if (openSubmenu === title) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(title);
    }
  };
  return (
<header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 rounded-[3rem] w-[90%] max-w-[82rem] border border-[#cefae849] backdrop-blur-lg bg-gradient-to-b from-[#022b29]/70 to-[#022b29]/70">
  <div className=" relative mx-auto flex min-h-20 items-center justify-between px-5 lg:px-6">
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
          <p className="text-xl font-semibold text-white">TWBlocks</p>

        {/* Center - Navigation */}
        <div className="hidden  lg:flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <Link href={item.href} legacyBehavior passHref>
<NavigationMenuLink className="group relative px-1 py-1 text-sm font-medium text-white transition-none">
  {item.title}
  <span className="underline-animate absolute left-[10%] bottom-0 w-[80%] h-[2px]"></span>
</NavigationMenuLink>

                    </Link>
                  ) : (
                    <>
<NavigationMenuTrigger className="group relative px-2 py-1 text-sm font-medium text-white transition-none">
  {item.title}
  <span className="absolute left-[10%] bottom-0 w-[80%] h-[2px]"></span>
</NavigationMenuTrigger>


<NavigationMenuContent className="!w-[950px]  max-w-[80vw] p-0 bg-white rounded-xl shadow-lg flex border-none overflow-hidden">
  {/* Left Side Image */}
  <div className="relative w-[45%] min-h-[400px] bg-[#022b29]">
    <Image
      src="/navbl.jpg" // Replace with your actual image path
      alt="menu bg"
      fill
      className="object-cover"
    />
    <p className="absolute bottom-9 left-9 text-white/90 text-4xl font-light z-10">
      {item.title}
    </p>
  </div>

  {/* Right Side Content */}
  <div className="w-[55%] p-8 flex flex-col justify-between">
    {/* Top Items */}
    <div className="flex flex-col">
      {item.items?.map((subItem) => (
        <NavigationMenuLink
          key={subItem.title}
          href={subItem.href}
          className="flex justify-between items-center px-3 py-2 text-lg font-medium text-[#022b29] hover:bg-gray-100 rounded-md transition-colors"
        >
          <span>{subItem.title}</span>
          <ChevronRightIcon className="w-4 h-4 text-gray-400" />
        </NavigationMenuLink>
      ))}
    </div>

    {/* Bottom Items */}
    <div className="flex flex-col">
      {item.botItems?.map((subItem) => (
        <NavigationMenuLink
          key={subItem.title}
          href={subItem.href}
          className="flex justify-between items-center px-3 py-2 text-lg font-medium text-[#022b29] hover:bg-gray-100 rounded-md transition-colors"
        >
          <span>{subItem.title}</span>
          <ChevronRightIcon className="w-4 h-4 text-gray-400" />
        </NavigationMenuLink>
      ))}
    </div>
  </div>
</NavigationMenuContent>

                    </>
                  )}
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
          <Button className="bg-[#54e7a3] rounded-3xl px-[1.3rem] py-[1.4rem] text-[#022b29] hover:bg-white/90">
            Get started
          </Button>
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
                
              {navigationItems.map((item) => (
                <div key={item.title} className="">
                  <div className="flex flex-col gap-3">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="flex justify-between  pb-4 border-b border-black/10 items-center text-black hover:text-black/80 transition-colors"
                      >
                        <span className="text-lg font-sans">{item.title}</span>
                      </Link>
                    ) : (
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={() => toggleSubmenu(item.title)}
                          className="flex justify-between pb-4 border-b border-black/10 items-center w-full text-black"
                        >
                          <span className="text-lg">{item.title}</span>
                          <motion.div
                            animate={{
                              rotate: openSubmenu === item.title ? 180 : 0
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDownIcon className="w-4 h-4 stroke-1" />
                          </motion.div>
                        </button>
                        {openSubmenu === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden space-y-4 px-6 pt-2 flex flex-col gap-3"
                          >
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="flex font-sans justify-between text-lg items-center text-black hover:text-black transition-colors"
                              >
                                <span>{subItem.title}</span>
                                <ChevronRightIcon className="w-4 h-4 stroke-1" />
                              </Link>
                            ))}
                            {item.botItems?.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                className="flex font-sans justify-between text-lg items-center text-black hover:text-black transition-colors"
                              >
                                <span>{subItem.title}</span>
                                <ChevronRightIcon className="w-4 h-4 stroke-1" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    )}
                  </div>
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