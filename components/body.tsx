import {CardContainer} from "./cardcontainer";
import {CardSpotlight} from "./card-spotlight";
import {Button} from "./movingborder";
import {TechStack} from "./techstack";

export default function body() {

    return (<>
    <div className="w-full pb-3">
        <div className="flex justify-center items-center gap-3 pl-40 pr-40">
            <CardContainer className="inter-var rounded-md min-w-fit w-1/3">
                <CardSpotlight className="text-white h-96 w-96 bg-slate-900" > 
                <AboutMe/> 
                </CardSpotlight>
            </CardContainer>
            <CardSpotlight className="text-white h-96 w-2/3">
                <TechStacks/>
            </CardSpotlight>
        </div>
        <div className="flex justify-center items-center gap-x-3 pt-3 pl-40 pr-40">
        <CardContainer className="inter-var rounded-md min-w-fit w-1/3">
                <CardSpotlight className="text-white h-96 w-full">
                    <Card1/>
                </CardSpotlight>
            </CardContainer>
            <CardContainer className="inter-var rounded-md min-w-fit w-1/3">
                <CardSpotlight className="text-white h-96 w-full">
                    <Card1/>
                </CardSpotlight>
            </CardContainer>
            <CardContainer className="inter-var rounded-md min-w-fit w-1/3">
                <CardSpotlight className="text-white h-96 w-full">
                    <Card1/>
                </CardSpotlight>
            </CardContainer>
        </div>
    </div>
    </>)
}

function AboutMe(){
    return (
        <div className="text-neutral-200 relative z-20">
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
        <div className="font-bold font-serif  text-2xl">
            Dedicated to continuous learning and refining skills to stay ahead in an evolving tech landscape
        </div>
    )
}