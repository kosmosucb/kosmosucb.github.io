import TopNavbar from "../topnavbar";
import React from "react";
import BoardMember from "../about-us/board_member";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <TopNavbar />
      <h1 className="text-m text-center font-semibold p-8">Meet KOSMOS's Sp'25 Board!</h1>
      <br />
      <h1 className="text-2xl text-center font-semibold p-8">EXEC TEAM</h1>
      <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <BoardMember name="Lianna" position="Executive" image="/members/lianna.jpg" />
        <BoardMember name="Justine" position="Executive" image="/members/justine.jpg" />
        <BoardMember name="Angelina" position="Internal Vice Exec" image="/members/angelina.jpg" />
        <BoardMember name="Vince" position="External Vice Exec" image="/members/vince.jpg" />
      </div>
      <br />
      <h1 className="text-2xl text-center font-semibold p-8">DESIGN & SOCIAL MEDIA</h1>
      <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <BoardMember name="Adriel" position="Design Chair" image="/members/adriel.jpg" />
        {/* FIX LATER */}
        <BoardMember name="Austin" position="Design Intern" image="/members/temporary.jpeg" />
        <BoardMember name="Madison" position="Social Media Chair" image="/members/madison.jpg" />
        <BoardMember name="Michelle" position="Social Media Chair" image="/members/michelle.jpg" />
      </div>
      <br />
      <h1 className="text-2xl text-center font-semibold p-8">TECH TEAM</h1>
      <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <BoardMember name="Anna" position="Tech Team Lead" image="/members/temporary.jpeg" />
        <BoardMember name="Chien-Hao" position="Tech Team Lead" image="/members/chien-Hao.jpg" />
        <BoardMember name="Jared" position="Tech Team Intern" image="/members/jared.jpg" />
        <BoardMember name="Vianna" position="Tech Team Intern" image="/members/vianna.jpg" />
        <BoardMember name="Yuki" position="Tech Team Intern" image="/members/temporary.jpeg" />
      </div>
      <br />
      <h1 className="text-2xl text-center font-semibold p-8">INTERNAL TEAM</h1>
      <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <BoardMember name="Sean" position="Finance Chair" image="/members/sean.jpg" />
        <BoardMember name="Juhi" position="Finance Intern" image="/members/juhi.jpg" />
        <BoardMember name="Cindy" position="Social Chair" image="/members/cindy.jpg" />
        <BoardMember name="Bella" position="Finance Intern" image="/members/bella.jpg" />
      </div>
      <h1 className="text-2xl text-center font-semibold p-8">CLOSER DIRECTORS</h1>
      <div className="mb-32 text-center grid lg:grid-cols-4 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
        <BoardMember name="Scott" position="Closer Director" image="/members/scott.jpg" />
        <BoardMember name="Wei-chi" position="Closer Director" image="/members/wei-chi.jpg" />
        <BoardMember name="Miriam" position="Closer Director Intern" image="/members/miriam.jpg" />
      </div>
    </main>
  );
}