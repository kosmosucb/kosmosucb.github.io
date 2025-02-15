'use client';
import TopNavbar from "../topnavbar";
import React from "react";
import BoardMember from "./board_member"
import BoardIteration from "./board_iteration"

export default function Page() {
    return (
    <main className="flex min-h-screen flex-col items-center p-8">
        <TopNavbar/>
        <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
            <h1 className="text-2xl text-left font-semibold">Our Mission Statement</h1>
            <br/>
            <p className="text-left font-light">
            KOSMOS is dedicated to spreading K-Pop's phenomenal influence around the world through establishing community through dance covers and performance.
            </p> 
            <br/>
            <br/>
            <h1 className="text-2xl text-left font-semibold">History of KOSMOS @ Cal</h1>
            <br/>
            <p className="text-left font-light">
            KOSMOS was founded in the Fall of 2019 by UC Berkeley students <span className="text-yellow-300"> Sean Kelly, Vivian Le, Janice Wenyao Ji, and Yeseul Cho</span>. After creating a cover of 
            <a href="https://www.instagram.com/kosmos_at_cal" className="text-blue-500"> Twice's "Fancy" </a> with a group of friends, they went on to produce more K-Pop covers from artists like BTS, Itzy, TXT, and Blackpink while recruiting even more friends 
            and classmates. After returning to in-person activities after the COVID-19 pandemic, KOSMOS has grown massively into a full-fledged
            dance team, with 100+ members producing 10+ dance covers per semester, and performs at events like KOSMOS's self-run "Show-and-Tell" events, Cal Day, EAU Night Market, AFX Showcase, and more!
            </p>
            <br/>
            <br/>
            <h1 className="text-2xl text-center font-semibold">Previous Board Iterations</h1>
            <p className="text-tiny text-center text-white/60">Click each image for more info</p>
        </div>
        <div className="mb-32 text-center grid lg:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            <BoardIteration 
            name="Fall 2024 (Gen 4)" 
            image="/fa24board.jpg" 
            execs={["Executive: Hoang Ton", "Executive: Lianna Soriano", "Vice Executive: Abbie Tsai", "Vice Executive: Grace Luong"]}
            board={["Social: Angelina Wang", "Finance: Justine Tan", "Social Media: Shiho Manabe", "Tech Team Lead: Monica Wang", "Design: Adriel Vijuan", "Closer: Vincent Baugh", "Closer: Fira Fatmasiefa"]}
            interns={["Executive Intern: Scott Joh", "Tech Team Intern: Chien-Hao Chen", "Tech Team Intern: Seoyun Kim", "Design Intern: Anna Wong", "Social Media Intern: Michelle Li", "Social Intern: Brendon Lin", "Finance Intern: Fiona Salisbury"]}
            />
            <BoardIteration 
            name="Spring 2024 (Gen 3.5)" 
            image="/sp24board.jpg" 
            execs={["Executive: Hoang Ton", "Executive: Lianna Soriano", "Vice Executive: Abbie Tsai", "Vice Executive: Grace Luong"]}
            board={["Social: Angelina Wang", "Finance: Justine Tan", "Social Media: Shiho Manabe", "Tech Team Lead: Monica Wang", "Design: Adriel Vijuan", "Closer: Vincent Baugh", "Closer: Fira Fatmasiefa"]}
            interns={["Executive Intern: Scott Joh", "Tech Team Intern: Chien-Hao Chen", "Tech Team Intern: Seoyun Kim", "Design Intern: Anna Wong", "Social Media Intern: Michelle Li", "Social Intern: Brendon Lin", "Finance Intern: Fiona Salisbury"]}
            />
            <BoardIteration 
            name="Fall 2023" 
            image="/fa23board.jpg (Gen 3)" 
            execs={["Executive: Annie Li", "Executive: Hoang Ton", "Vice Executive: Abbie Tsai", "Vice Executive: Lianna Soriano"]}
            board={["Social: Nathan Au-Yeung", "Finance: Justine Tan", "Social Media: Shiho Manabe", "Tech Team Lead: Monica Wang", "Design: Adriel Vijuan"]}
            interns={["Executive Intern: Grace Luong", "Executive Intern: Emily Wang", "Design Intern: Keira Ho", "Social Intern: Brendon Lin", "Finance Intern: Mahsa Mir"]}
            />
            <BoardIteration 
            name="Spring 2023" 
            image="/sp23board.jpg (Gen 2.5)" 
            execs={["Executive: Avery Perez", "Executive: Ethan Lai", "Vice Executive: Annie Li", "Vice Executive: Kaleigh Lin"]}
            board={["Social: Vincent Baugh", "Finance: Hannah Chen", "Social Media: Junkee Kim Kim", "Tech Team Lead: Abbie Tsai", "Design: Adriel Vijuan"]}
            interns={["Executive Intern: Hoang Ton", "Finance Intern: Justine Tan", "Social Media Intern: Kyle Kuida", "Social Intern: Wei-Chi Chen"]}
            />
            <BoardIteration 
            name="Fall 2022" 
            image="/fa22board.jpg (Gen 2)" 
            execs={["Executive: Avery Perez", "Executive: Ethan Lai", "Vice Executive: Junkee Kim Kim", "Vice Executive: Kaleigh Lin"]}
            board={["Social: Xin Wei Yap", "Social: Vincent Baugh", "Finance: Hannah Chen", "Social Media: Sarah Kung", "Tech Team Lead: Abbie Tsai", "Design: Adriel Vijuan"]}
            interns={["Executive Intern: Nicole Cheng", "Finance Intern: Angela Gao", "Tech Lead Intern: Yiwei Yu", "Communications Intern: Julia Pan", "Social Media Intern: Annie Li"]}
            />
            <BoardIteration 
            name="Spring 2022" 
            image="/sp22board.jpg (Gen 1)" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Vice Executive: Avery Perez", "Vice Executive: Ethan Lai"]}
            board={["Social: Kaleigh Lin", "Finance: Hannah Chen", "Social Media: Sarah Kung", "Tech Team Lead: Novia Kayvetz-Vuong", "Design: Adriel Vijuan"]}
            interns={["Executive Intern: Claire Lee", "Executive Intern: Harika Gopi", "Tech Lead Intern: William Xu"]}
            />
            <BoardIteration 
            name="Fall 2021" 
            image="/fa21board.jpg (Gen 1)" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Vice Executive: Giorgia Foresta"]}
            board={["Social: LeeAnne Brown", "Finance: Junkee Kim Kim", "Design: Sarah Kung", "Social Media: Harika Gopi", "Communications: Avery Perez", "Communications: Novia Kayvetz-Vuong"]}
            interns={["Executive Intern: Elle Yoo", "Social Media Intern: Anethia Pham", "Finance Intern: Hannah Chen"]}
            />
            <BoardIteration 
            name="Spring 2021 (Gen 1)" 
            image="/sp21board.jpg" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Vice Executive: Giorgia Foresta"]}
            board={["Communications: Novia Kayvetz-Vuong", "Social Media: Harika Gopi"]}
            interns={["None"]}
            />
            <BoardIteration 
            name="Fall 2020 (Gen 0)" 
            image="/fa20board.jpg" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly"]}
            board={["None"]}
            interns={["None"]}
            />
            <BoardIteration 
            name="Fall 2019 & Spring 2020 (Founding Generation)" 
            image="/ogboard.jpg" 
            execs={["Executive: Vivian Le", "Executive: Sean Kelly", "Executive: Janice Ji", "Executive: Yeseul Cho"]}
            board={["None"]}
            interns={["None"]}
            />
        </div>
    </main>
    );
  }
