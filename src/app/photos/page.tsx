'use client';
import TopNavbar from "../topnavbar";
import React from "react";
import TeamPhoto from "./team_photo"

export default function Page() {
    return (
    <main className="flex min-h-screen flex-col items-center p-8">
        <TopNavbar/>
        <div className="my-8 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left p-10">
            <h1 className="text-2xl text-center font-semibold">Kosmos Through the Years</h1>
            <p className="text-tiny text-center text-white/60">Click each image for more info</p>
        </div>
        <div className="mb-32 text-center grid lg:grid-cols-2 lg:mb-0 lg:w-full lg:max-w-5xl lg:text-left">
            {/* <TeamPhoto 
            name="Spring 2025" 
            image="/sp25team.jpg" 
            team=""
            /> */}
            
            <TeamPhoto 
            name="Fall 2024" 
            image="/fa24team.jpg" 
            team=""
            />

            <TeamPhoto 
            name="Spring 2024" 
            image="/sp24team.jpg" 
            team=""
            />
            <TeamPhoto 
            name="Fall 2023" 
            image="/fa23team.jpg" 
            team="Solstice: Abbie Tsai, Allyson Yang, Ariel Cardona, Avery Perez, Carol Chen, Cat Simmons, Celine He, Emily Luo, Fira Fatmasiefa, Hannah Chen, 
            Harmony He, Hoang Ton, Iris Ho, Jay Choi, Ji Won Kim, Justine Tan, Kaleigh Lin, Kristine Sun, Lianna Soriano, Ly La, Michelle Li, Michelle Wang, 
            Minh To, Miranda Cheung, Monica Wang, Orion Khounthep, Renee Zhang, Scott Joh, Shannon Liu, Shiho Manabe, Teresa Huang, Tiarra Wu, Vincent Baugh, 
            Wei-Chi Chen"
            />
            <TeamPhoto 
            name="Spring 2023" 
            image="/sp23team.jpg" 
            team="Solstice: Abbie Tsai, Alex Rodriguez, Allyson Yang, Angelina Wang, Annie Li, Ariane Vidal, Avery Perez, Chanel Jung, Elizabeth Hung
            Elsa Dai, Emily Luo, Ethan Chung, Ethan Lai, Fianna Ton, Fira Fatmasiefa, Giorgia Foresta, Hannah Chen, Harmony He, Hoang Ton, Ingrid Chien
            Jay Choi, Jenny Lee, Jieshan(Shannon) Liu, Julia Pan, Junkee Kim Kim, Justine Tan, Kaleigh Lin, Kyle Kuida, Nathaniel Lum, Orion Khounthep
            Shiho Manabe, Temmie Park, Terra Lin, Tiffany Tu, Tongyuan(Sandra) Sun, Vince Baugh, Vivian Hwang, Wei-Chi Chen, Wilson Ye"
            />
            <TeamPhoto 
            name="Fall 2022" 
            image="/fa22team.jpg" 
            team="Solstice: Vincent Baugh, Hannah Chen, Wei-Chi Chen, Zoe Chen, Nicole Cheng, Miranda Cheung, Ingrid Chien, Jay Choi, 
            Ethan Chung, Fira Fatmasiefa, Giorgia Foresta, Harmony He, Veronica Hong, Vivian Hwang, Jun Kee Kim Kim, Sarah Kung, Ethan Lai, 
            Kaleigh Lin, Terra Lin, Catherlin Lu, Megan Lui,  Emily Luo, Jennifer Luo, Donna Ma, Julia Pan, Avery Perez, Fianna Ton, Hoang Ton, 
            Mari Torii-Karch, Abbie Tsai, Alicia Wang, Angelina Wang, Tiffany Wong, Elsa (Ruihan) Xu, Rachel Xu, Allyson Yang, Xin Wei Yap, Wilson Ye"
            />
            <TeamPhoto 
            name="Spring 2022" 
            image="/sp22team.jpg" 
            team="Solstice: Vincent Baugh, Allen Cao, Queeny Chan, Hannah Chen, Tiffany Chen, Nicole Cheng, Miranda Cheung, Ingrid Chien, Jay Choi, Robin Chu, Ethan Chung, Andrew Dacayanan, 
            Wayne Deng, Giorgia Foresta, Harika Thejaswini Gopi, Annie Huang, Novia Kayvetz-Vuong, Sean Kelly, Junkee Kim Kim, Sarah Kung, Ethan Lai, Vivian Le, Annie Li, Kaleigh Lin, Julia Liu, 
            Jennifer Luo, Kevin New, Kobe Oh, Francis Pan, Avery Perez, Ari Rigan, Carolina Rios-Martinez, Alex Rodriguez, Abbie Tsai, Maya Valeriano, Lin Vuong, Angelina Wang, Lilian Xu, 
            Celine Yang, Nancy Ye, Wilson Ye, Yuqi Ye, Yiwei Yu"
            />
            <TeamPhoto 
            name="Fall 2021" 
            image="/fa21team.jpg" 
            team="Solstice: Alex Rodriguez, Andrew Dacayanan, Angeline Lee, Annabelle Yao, Annie Huang, Antheia Pham, Avery Perez, Carolina Rios-Martinez
            Elle Yoo, Ethan Lai, Giorgia Foresta, Grayce Yang, Hannah Chen, Harika Thejaswini Gopi, Jerry Chen, Jay Choi, Jun Kee Kim Kim, Kaleigh Lin
            Kobe Oh, LeeAnne Brown, Lin Vuong, Lucia Liu, Maya Valeriano, Miranda Cheung, Nancy Ye, Nicole Cheng, Novia Kay, Sarah Kung, Sean Kelly
            Tiffany Chen, Vivian Le, Yookyeong (Lia) Kim"
            />
            <TeamPhoto 
            name="Spring 2020" 
            image="/sp20team.jpg" 
            team="Angelina Wang, Elena Cullen, Elise Ho, Fira Fatmasiefa, Giorgia Foresta, Grace Yi, Hannah Chen, Janice Ji, Jun Kee Kim Kim, Kaleigh Lin
            Karen Arias, LeeAnne Brown, Lynsey Inthasone, Maya Valeriano, Nicole Macam, Novia Kayvetz-Vuong, Oriana Guo, Sarah Kung, Sean Kelly,
            Vivian Le, YeSeul Cho"
            />
        </div>
    </main>
    );
  }
