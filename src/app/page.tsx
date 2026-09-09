import CoverflowSlider from '@/components/organisims/swiper/CoverflowSwiper';
import Creative from '@/components/pages/home/slides/creative';
import DiscoverBusiness from '@/components/pages/home/slides/discoverBusiness';
import DownloadFile from '@/components/pages/home/slides/downloadFile';
import GetInTouch from '@/components/pages/home/slides/getInTouch';
import HeroSection from '@/components/pages/home/slides/heroSections';
import LatestNews from '@/components/pages/home/slides/latestNews';
import OurCase from '@/components/pages/home/slides/ourCase';
import OurSuccess from '@/components/pages/home/slides/ourSuccess';
import OurValues from '@/components/pages/home/slides/ourValues';
import Welcome from '@/components/pages/home/slides/welcome';

export default async function HomePage() {

  return <div className="w-full max-w-full overflow-hidden">
    <CoverflowSlider
      slides={[
        <HeroSection key='1' />,
        <Welcome key='2' />,
        <OurValues key='3' />,
        <OurCase key='4' />,
        <DownloadFile key='5' />,
        <OurSuccess key='6' />,
        <Creative key='7' />,
        <DiscoverBusiness key='8' />,
        <LatestNews key='9' />,
        <GetInTouch key='10' />
      ]}
    />
  </div>;
}