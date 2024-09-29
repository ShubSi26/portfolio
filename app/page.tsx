
import Hero from "../components/hero";
import {BackgroundLines} from "@/components/backgroundlines";
import Body from "@/components/body";
import {HeroHighlight} from "@/components/herohighlight";
import {Projects} from "@/components/projects";

export default function Home() {
  return (<>
      <HeroHighlight>
        <div className="w-screen overflow-auto no-scrollbar ">
            <BackgroundLines>
              <Hero/>
            </BackgroundLines>
        </div>
      </HeroHighlight>
      <div className="min-h-screen bg-black pt-5 h-auto">
        <Body/>
      </div>
      <div className="min-h-screen bg-black pt-5 h-auto">
        <Projects/>
      </div>
  </>);
}
