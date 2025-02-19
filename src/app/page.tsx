import Image from "next/image";
import TopNavbar from "./topnavbar";
import React from "react";
import Link from "next/link";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="fadeIn w-full flex justify-center items-center" style={{ animationDelay: "300ms" }}>
        <TopNavbar />
      </div>

      <div className="flex flex-col place-items-center relative mt-8">
        <div className="fadeIn" style={{ animationDelay: "0" }}>
          <Image
            src="/logocopy.png"
            alt="Kosmos Logo"
            width={350}
            height={100}
            priority
          />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* About Us Block */}
        <Link
          href="about-us"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <div>
            <h2
              className="fadeIn mb-3 text-2xl font-semibold"
              style={{ animationDelay: "500ms" }}
            >
              About Us{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className="fadeIn m-0 max-w-[30ch] text-sm opacity-50"
              style={{ animationDelay: "500ms" }}
            >
              Learn more about our team's history and structure!
            </p>
          </div>
        </Link>

        {/* Covers Block */}
        <a
          href="covers"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <div>
            <h2
              className="fadeIn mb-3 text-2xl font-semibold"
              style={{ animationDelay: "700ms" }}
            >
              Covers{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className="fadeIn m-0 max-w-[30ch] text-sm opacity-50"
              style={{ animationDelay: "700ms" }}
            >
              Watch our latest Solstice and Crescent dance covers!
            </p>
          </div>
        </a>

        {/* SP'25 Board Block */}
        <a
          href="members"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <div>
            <h2
              className="fadeIn mb-3 text-2xl font-semibold"
              style={{ animationDelay: "900ms" }}
            >
              SP'25 Board{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className="fadeIn m-0 max-w-[30ch] text-sm opacity-50"
              style={{ animationDelay: "900ms" }}
            >
              Meet our board members!
            </p>
          </div>
        </a>

        {/* Photos Block */}
        <a
          href="photos"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <div>
            <h2
              className="fadeIn mb-3 text-2xl font-semibold"
              style={{ animationDelay: "1100ms" }}
            >
              Photos{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className="fadeIn m-0 max-w-[30ch] text-sm opacity-50"
              style={{ animationDelay: "1100ms" }}
            >
              Go back in the past and check out our old photos and teams.
            </p>
          </div>
        </a>
      </div>
      {/* <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Link
          href="about-us"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            About Us{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn more about our team's history and structure!
          </p>
        </Link>

        <a
          href="covers"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Covers{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Watch our latest Solstice and Crescent dance covers!
          </p>
        </a>

        <a
          href="members"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            SP'25 Board{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Meet our board members!
          </p>
        </a>

        <a
          href="photos"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Photos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Go back in the past and check out our old photos and teams.
          </p>
        </a>
      </div> */}
    </main>
  );
}
