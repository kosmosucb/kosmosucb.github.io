"use client";
import TopNavbar from "../topnavbar";
import React from "react";
import CoverThumbnail from "../covers/cover_thumbail";
import {User, Link} from "@nextui-org/react"
import Member from "../member";

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <TopNavbar/>
      
      <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
            
            <h1 className="text-2xl text-center font-semibold">Latest Performance</h1>
            <br/>
            <div className="mb-32 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left flex lg:flex-row flex-col items-center justify-between">
                <iframe className="lg:w-[560px] lg:h-[315px]" src="https://www.youtube.com/embed/ClwjnN1KMys" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                text-align="center" 
                />
                <div className="flex flex-col list-none">
                    <li>Setlist: </li>
                    <li>SNSD - The Boys</li>
                    <li>IZ*ONE - La Vie en Rose</li>
                    <li>NCT U - Make a Wish (Birthday Song)</li>
                    <li>ATEEZ - Crazy Form</li>
                    <li>BTS - ON</li>
                </div>
                <br/>
            </div>

            <h1 className="text-2xl text-center font-semibold pt-8">Spring 2024 Performances</h1>
            <p className="text-tiny text-center text-white/60 pb-8">Click each image for more info</p>
            <div className="gap-2 grid place-items-center lg:grid-cols-4">

                <CoverThumbnail name="Sp '24 AFX Showcase - Balcony View" image="ClwjnN1KMys"/>
                <CoverThumbnail name="Sp '24 AFX Showcase - Front View" image="Ukjh9EOQfwo"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Fall 2023 Performances</h1>
            <div className="gap-2 grid place-items-center lg:grid-cols-4">

                <CoverThumbnail name="Fa '23 AFX Showcase - Balcony View" image="nf7MDiQ50ns" />
                <CoverThumbnail name="Fa '23 AFX Showcase - Front View" image="UEoVfHTaPoI" />

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Summer 2023 Performances</h1>
            <div className="gap-2 grid place-items-center lg:grid-cols-4">

                <CoverThumbnail name="Su '23 AFX Showcase" image="NtssjeQ38_Y"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Spring 2023 Performances</h1>
            <div className="gap-2 grid place-items-center lg:grid-cols-4">

                <CoverThumbnail name="Sp '23 AFX Showcase - Balcony View" image="G-ZSRyj_UAs" />
                <CoverThumbnail name="Sp '23 AFX Showcae - Front View " image="H-7jaW6POCc" />
                <CoverThumbnail name="Sp '23 Session A Show & Tell" image="ao3P_wjVwUw" />
                <CoverThumbnail name="Sp '23 SJ Made Festival Performance" image="-dd3CaU8bMw" />

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Fall 2022 Performances</h1>
            <div className="gap-2 grid place-items-center lg:grid-cols-4">

                <CoverThumbnail name="Fa '22 AFX Showcase - Balcony View" image="6MWpTxhfAuk" />
                <CoverThumbnail name="Fa '22 AFX Showcase - Front View" image="XCafApVVrIo" />
                <CoverThumbnail name="Fa '22 Session A Show & Tell" image="g1Ck85ZaA70" />
                <CoverThumbnail name="Fa '22 Session B Show & Tell" image="16wmS-OIdVw"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Summer 2022 Performances</h1>
            <div className="gap-2 grid place-items-center lg:grid-cols-4">

                <CoverThumbnail name="Su '22 AFX Showcase Performance" image="a8YXhKiafXc"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Spring 2022 Performances</h1>
            <div className="gap-2 grid place-items-center lg:grid-cols-4">

                <CoverThumbnail name="Sp '22 AFX Showcase - Balcony View" image="WiaRw3eUB2o"/>
                <CoverThumbnail name="Sp '22 AFX Showcase - Front View" image="fE41eH5YADY"/>
                <CoverThumbnail name="Sp '22 EAU Performance" image="mcGAjxn6eoI"/>
                <CoverThumbnail name="Sp '22 KASA Performance" image="rkPPAunlEaI"/>
                <CoverThumbnail name="Sp '22 Cal Day Performance" image="CKE0ukPirP0"/>
                <CoverThumbnail name="Sp '22 BDC Showcase Performance" image="9oyrDbKbJ4w"/>

            </div>

            <h1 className="text-2xl text-center font-semibold p-8">Fall 2021 Performances</h1>
            <div className="gap-2 grid place-items-center lg:grid-cols-4">

                <CoverThumbnail name="Fa '21 AFX Showcase - Balcony View" image="pp5WV2Xtnd4"/>
                <CoverThumbnail name="Fa '21 AFX Showcase - Front View" image="jzUtc_w2OW0"/>

            </div>


            <h1 className="text-2xl text-center font-semibold p-8">Spring 2020 Performances</h1>
            <div className="gap-2 grid place-items-center lg:grid-cols-4">

                <CoverThumbnail name="LION ((G)-IDLE) + Feel Special (TWICE) School Performance" image="o51hLHVQlYw"/>

            </div>

        </div>
    </main>
  );
}