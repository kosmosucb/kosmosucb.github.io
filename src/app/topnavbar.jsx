"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import React from "react";

export default function TopNavbar({ socialOnly = false }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "About Us", link: "/about-us" },
    { name: "Covers", link: "/covers" },
    { name: "Members", link: "/members" },
    { name: "Photos", link: "/photos" },
    { name: "Performances", link: "/performances" },
  ];

  return (
    <div
      className={`sticky top-0 z-10 w-full bg-black ${
        socialOnly
          ? "flex justify-center items-center"
          : "max-w-5xl flex justify-between items-center"
      } font-mono text-sm`}
    >
      <Navbar position="sticky" onMenuOpenChange={setIsMenuOpen} isBordered>
        {socialOnly ? (
          // Social-only navbar: Only social media icons centered across the page
          <NavbarContent className="w-full flex justify-center items-center">
            <NavbarItem>
              <Link
                href="https://www.youtube.com/@KOSMOSUCB"
                target="_blank"
                className="hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="/youtube.png"
                  alt="YouTube"
                  width={28}
                  height={28}
                  className="filter invert"
                />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="https://www.instagram.com/kosmoskpop"
                target="_blank"
                className="hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="filter invert"
                />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                href="https://www.tiktok.com/@kosmosxucb"
                target="_blank"
                className="hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="/tiktok.svg"
                  alt="TikTok"
                  width={20}
                  height={20}
                  className="filter invert"
                />
              </Link>
            </NavbarItem>
          </NavbarContent>
        ) : (
          // Full navbar: logo, menu items, and social media icons
          <>
            <NavbarContent>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
              />
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src="/logocopy.png"
                    alt="KOSMOS Logo"
                    width={100}
                    height={25}
                    priority
                    className="hover:scale-105 transition-transform duration-200"
                  />
                </Link>
              </NavbarBrand>
            </NavbarContent>

            {/* Main Navbar Items */}
            <NavbarContent className="hidden sm:flex gap-6" justify="center">
              {menuItems.map((item, index) => (
                <NavbarItem key={`${item.name}-${index}`}>
                  <Link
                    href={item.link}
                    className="hover:text-purple-500 hover:scale-105 transition-transform duration-200"
                  >
                    {item.name}
                  </Link>
                </NavbarItem>
              ))}
            </NavbarContent>

            {/* Social Media Links */}
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link
                  href="https://www.youtube.com/@KOSMOSUCB"
                  target="_blank"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src="/youtube.png"
                    alt="YouTube"
                    width={28}
                    height={28}
                    className="hover:scale-105 transition-transform duration-200 filter invert"
                  />
                </Link>
              </NavbarItem>
              <NavbarItem className="hidden lg:flex">
                <Link
                  href="https://www.instagram.com/kosmoskpop"
                  target="_blank"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="hover:scale-105 transition-transform duration-200 filter invert"
                  />
                </Link>
              </NavbarItem>
              <NavbarItem className="hidden lg:flex">
                <Link
                  href="https://www.tiktok.com/@kosmosxucb"
                  target="_blank"
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <Image
                    src="/tiktok.svg"
                    alt="TikTok"
                    width={20}
                    height={20}
                    className="hover:scale-105 transition-transform duration-200 filter invert"
                  />
                </Link>
              </NavbarItem>
            </NavbarContent>

            {/* Mobile Menu */}
            <NavbarMenu>
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item.name}-${index}`}>
                  <Link
                    href={item.link}
                    className="text-xl w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-black hover:text-purple-500 hover:scale-105 transition-transform duration-200"
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </>
        )}
      </Navbar>
    </div>
  );
}