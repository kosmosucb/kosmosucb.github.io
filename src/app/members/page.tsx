import TopNavbar from "../topnavbar";
import React from "react";
import BoardMember from "../about-us/board_member";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <TopNavbar/>
      <h1 className="text-2xl text-center font-semibold p-8">Meet our Board!</h1>
        <br/>
        <h1 className="text-1xl text-center font-semibold p-8">EXEC TEAM</h1>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Lianna" position="Executive"  image="/members/Lianna.jpg"/>
            <BoardMember name="Justine" position="Executive"  image="/members/Justine.jpg"/>
            <BoardMember name="Angelina" position="Internal Vice Exec"  image="/members/Angelina.jpg"/>
            <BoardMember name="Vince" position="External Vice Exec"  image="/members/Vince.jpg"/>
        </div>
        <br/>
        <h1 className="text-1xl text-center font-semibold p-8">DESIGN & SOCIAL MEDIA</h1>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Adriel" position="Design Chair"  image="/members/Adriel.jpg"/>
            <BoardMember name="Austin" position="Design Intern"  image="/members/Austin.jpg"/>
            <BoardMember name="Madison" position="Social Media Chair"  image="/members/Madison.jpg"/>
            <BoardMember name="Michelle" position="Social Media Chair"  image="/members/Michelle.jpg"/>
        </div>
        <br/>
        <h1 className="text-1xl text-center font-semibold p-8">TECH TEAM</h1>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Anna" position="Tech Team Lead"  image="/members/Anna.jpg"/>
            <BoardMember name="Chien-Hao" position="Tech Team Lead"  image="/members/Chien-Hao.jpg"/>
            <BoardMember name="Jared" position="Tech Team Intern"  image="/members/Jared.jpg"/>
            <BoardMember name="Vianna" position="Tech Team Intern"  image="/members/Vianna.jpg"/>
        </div>
        <br/>
        <h1 className="text-1xl text-center font-semibold p-8">INTERNAL TEAM</h1>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Sean" position="Finance Chair"  image="/members/Sean.jpg"/>
            <BoardMember name="Juhi" position="Finance Intern"  image="/members/Juhi.jpg"/>
            <BoardMember name="Cindy" position="Social Chair"  image="/members/Cindy.jpg"/>
            <BoardMember name="Bella" position="Finance Intern"  image="/members/Bella.jpg"/>
        </div>
        <h1 className="text-1xl text-center font-semibold p-8">CLOSER DIRECTORS</h1>
        <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardMember name="Scott" position="Closer Director"  image="/members/Scott.jpg"/>
            <BoardMember name="Wei-chi" position="Closer Director"  image="/members/Wei-chi.jpg"/>
            <BoardMember name="Miriam" position="Closer Director Intern"  image="/members/Miriam.jpg"/>
        </div>
    </main>
  );
}
