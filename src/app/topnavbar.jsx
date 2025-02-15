"use client";
import Image from "next/image";
import Link from "next/link";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle, NavbarMenuItem} from "@nextui-org/react";
import React from "react";

export default function TopNavbar() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        { name: "About Us", link: "/about-us" },
        { name: "Covers", link: "/covers" },
        { name: "Members", link: "/members" },
        { name: "Photos", link: "/photos" },
        { name: "Performances", link: "/performances" },
    ];
    
    return (
        <div className="sticky top-0 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-black">
            <Navbar position="sticky" onMenuOpenChange={setIsMenuOpen} isBordered>
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
                    <NavbarItem>
                        <Link href="/about-us" className="hover:text-purple-500 hover:scale-105 transition-transform duration-200">
                            About Us
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/covers" className="hover:text-purple-500 hover:scale-105 transition-transform duration-200">
                            Covers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/members" className="hover:text-purple-500 hover:scale-105 transition-transform duration-200">
                            Board
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/photos" className="hover:text-purple-500 hover:scale-105 transition-transform duration-200">
                            Photos
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/performances" className="hover:text-purple-500 hover:scale-105 transition-transform duration-200">
                            Performances
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {/* Social Media Links */}
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="https://www.instagram.com/kosmoskpop/" target="_blank" className="hover:text-purple-500 hover:scale-105 transition-transform duration-200">
                            IG
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="https://www.youtube.com/@KOSMOSUCB" target="_blank" className="hover:text-purple-500 hover:scale-105 transition-transform duration-200">
                            YT
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="https://www.tiktok.com/@kosmosxucb" target="_blank" className="hover:text-purple-500 hover:scale-105 transition-transform duration-200">
                            TT
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {/* Mobile Menu */}
                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item.name}-${index}`}>
                            <Link
                                className="text-xl w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-black 
                                hover:text-purple-500 hover:scale-105 transition-transform duration-200"
                                href={item.link}
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}