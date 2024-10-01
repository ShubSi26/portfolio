import {CardContainer} from "./cardcontainer";
import {CardSpotlight} from "./card-spotlight";
import {Button} from "./movingborder";
import {TechStack} from "./techstack";
import {CardSpotlight2} from "./cardcanvasrevealeffect";
import Image from 'next/image';

export default function body() {

    return (<>
    <div className="w-full pb-3">
        <div className="flex justify-center flex-col sm:flex-row items-center gap-3 sm:pl-40 sm:pr-40 pl-0 pr-0">
            <CardContainer >
                <CardSpotlight className=" rounded-3xl text-white h-96 1/36 bg-slate-900" > 
                    <AboutMe/> 
                </CardSpotlight>
            </CardContainer>
            <CardSpotlight className=" rounded-3xl text-white h-96 sm:w-2/3 w-full">
                <TechStacks/>
            </CardSpotlight>
        </div>
        <div className="flex justify-center flex-col sm:flex-row items-center gap-x-3 pt-3 sm:pl-40 sm:pr-40 h-fit gap-y-2">
            <CardContainer className="inter-var relative rounded-3xl min-w-fit sm:w-1/3 w-full border-2 border-cyan-700 h-96">
                    <Card1/>
                    <CardSpotlight2
                        animationSpeed={3}
                        containerClassName="bg-sky-600 h-96 rounded-3xl"
                        colors={[[125, 211, 252]]}
                    />
            </CardContainer>
            <CardContainer className="inter-var relative rounded-3xl min-w-fit sm:w-1/3 w-full border-2 border-lime-700 h-96">
                    <Card2/>
                    <CardSpotlight2
                        animationSpeed={3}
                        containerClassName="bg-lime-900 h-96 rounded-3xl"
                        colors={[[125, 211, 252]]}
                    />
            </CardContainer>
            <CardContainer className="inter-var relative rounded-3xl min-w-fit sm:w-1/3 w-full border-2 border-orange-700 h-96">
                    <Card3/>
                    <CardSpotlight2
                        animationSpeed={3}
                        containerClassName="bg-red-600 h-96 rounded-3xl"
                        colors={[[125, 211, 252]]}
                    />
            </CardContainer>
            
        </div>
    </div>
    </>)
}

function AboutMe(){
    return (
        <div className=" text-neutral-200 relative z-20">
            <Button borderRadius="1.75rem"className="bg-transparent dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800">
                WhoAmI
            </Button>
            <p>
                Hi, I’m Shubham Singh, a MERN stack developer from India with a strong focus on building efficient and scalable web applications. I work with React, Node.js, Express, and MongoDB to create seamless user experiences. I enjoy solving complex problems and continuously explore new technologies to stay updated. Along with coding, I focus on improving UI/UX design to deliver optimized, modern web solutions.
            </p>
        </div>
    )
}
function TechStacks(){
    return(<>
        <div className="text-neutral-200 relative z-20 w-full">
           <TechStack name={["react","mongodb","html","css","react","mongodb","html","css"]} direction="left" speed="normal" pauseOnHover={false}/>
           <TechStack name={["docker","javascript","python","prisma","nodejs","docker","javascript","python","prisma","nodejs"]} direction="right" speed="normal" pauseOnHover={false}/>
           <TechStack name={["nextjs","typescript","tailwind","git","nextjs","typescript","tailwind","git "]} direction="left" speed="normal" pauseOnHover={false}/>
           <TechStack name={["express","cpp","figma","postgres","linux","express","cpp","figma","postgres","linux"]} direction="right" speed="normal" pauseOnHover={false}/>
        </div>
        <div className="absolute top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2">
            <Button borderRadius="1.75rem"className="bg-slate-800 dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800">
                My Tech Stack
            </Button>
        </div>
   </> )
}

function Card1(){
    return(
        <div className="p-2 flex items-center justify-center text-white font-bold font-mono relative z-50 pointer-events-none text-2xl min-w-fit w-full">
            <Image
                src={"/images/card1.png"}
                alt="Picture of the author"
                width={200}
                height={300}
            />
            <p className="text-center">I am dedicated to continuous learning and refining skills to stay ahead in an evolving tech landscape</p>
        </div>
    )
}
function Card2(){
    return(
        <div className="p-2 flex items-center flex-col justify-center text-white font-bold font-mono relative z-50 pointer-events-none text-2xl min-w-fit w-full">
            <Image
                src={"/images/learn.png"}
                alt="Picture of the author"
                width={300}
                height={300}
            />
            <p className="text-center">I focus on creating intuitive, scalable, and efficient applications that drive results</p>
        </div>
    )
}
function Card3(){
    return(
        <div className="p-2 flex items-center justify-center text-white font-bold font-mono relative z-50 pointer-events-none text-2xl min-w-fit w-full">
            <p className="text-center">A problem-solver at heart, transforming challenges into opportunities with innovative solutions</p>
            <Image
                src={"/images/think.png"}
                alt="Picture of the author"
                width={200}
                height={300}
            />
        </div>
    )
}