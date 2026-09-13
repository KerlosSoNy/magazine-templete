import BoardOfDirectors from "@/components/pages/about/boardOfDirectors";
import Explore from "@/components/pages/about/explore";
import GirlSection from "@/components/pages/about/GirlSection";
import Legacy from "@/components/pages/about/legacy";
import StandFor from "@/components/pages/about/standFor";
import Visions from "@/components/pages/about/visions";
import ScrollDownIndicator from "@/components/pages/contactUs/getInTouch/ScrollDownIndicator";
import SocialSidebar, { defaultSocialLinks } from "@/components/pages/contactUs/getInTouch/SocialSidebar";
import GetInTouch from "@/components/pages/home/slides/getInTouch";
import LogosMarquee from "@/components/shared/logosMarquee/LogosMarquee";
import SmallBanner from "@/components/shared/smallBanner";

export default function page() {
    return (
        <div className="pt-18 xl:pt-32">
            <SmallBanner title="About" />
            <SocialSidebar links={defaultSocialLinks} />
            <ScrollDownIndicator id="story" />
            <GirlSection />
            <Visions />
            <StandFor />
            <BoardOfDirectors />
            <Legacy />
            <LogosMarquee />
            <Explore />
            <GetInTouch key='10' />
        </div>
    )
}
