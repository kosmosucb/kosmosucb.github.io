import TopNavbar from "../topnavbar";
import React from "react";
import BoardMember from "../about-us/board_member";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <TopNavbar/>
      <h1 className="text-2xl text-center font-semibold p-8">Meet our Board!</h1>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Hoang" position="Executive"  image="/Hoang.jpg"/>
            <BoardMember name="Lianna" position="Executive"  image="/Hoang.jpg"/>
            <BoardMember name="Scott" position="Executive Intern"  image="/Hoang.jpg"/>
            <BoardMember name="Abbie" position="Vice Executive"  image="/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Grace" position="Vice Executive"  image="/Hoang.jpg"/>
            <BoardMember name="Adriel" position="Design"  image="/Hoang.jpg"/>
            <BoardMember name="Anna" position="Design Intern"  image="/Hoang.jpg"/>
            <BoardMember name="Fira" position="Closer Director"  image="/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Vince" position="Closer Director"  image="/Hoang.jpg"/>
            <BoardMember name="Monica" position="Tech Team"  image="/Hoang.jpg"/>
            <BoardMember name="Chien-Hao" position="Tech Team Intern"  image="/Hoang.jpg"/>
            <BoardMember name="Seoyun" position="Tech Team Intern"  image="/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Adriel" position="Design"  image="/Hoang.jpg"/>
            <BoardMember name="Shiho" position="Social Media"  image="/Hoang.jpg"/>
            <BoardMember name="Michelle" position="Social Media Intern"  image="/Hoang.jpg"/>
            <BoardMember name="Angelina" position="Social"  image="/Hoang.jpg"/>
        </div>
        <br/>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Brendon" position="Social Intern"  image="/Hoang.jpg"/>
            <BoardMember name="Justine" position="Finance"  image="/Hoang.jpg"/>
            <BoardMember name="Fiona" position="Finance Intern"  image="/Hoang.jpg"/>
        </div>
    </main>
  );
}
