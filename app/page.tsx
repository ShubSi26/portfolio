
import Hero from "../components/hero";
import {BackgroundLines} from "@/components/backgroundlines";
import Body from "@/components/body";
import {HeroHighlight} from "@/components/herohighlight";
import {Projects} from "@/components/projects";
import {CardHoverEffectDemo} from "@/components/findme";
import {Footr} from "@/components/footr";

export default function Home() {
  return (<>
      <HeroHighlight>
        <div className="w-screen no-scrollbar ">
            <BackgroundLines className="flex sm:block justify-center items-center">
              <Hero/>
            </BackgroundLines>
        </div>
      </HeroHighlight>

      <div className="min-h-screen bg-black pt-5 h-auto">
        <Body/>
      </div>
      <div className="min-h-fit bg-black pt-5 h-auto">
        <Projects/>
      </div>
      <div className="bg-black">
        <CardHoverEffectDemo/>
      </div>
      <div className="bg-black">
        <Footr/>
      </div>
  </>);
}
