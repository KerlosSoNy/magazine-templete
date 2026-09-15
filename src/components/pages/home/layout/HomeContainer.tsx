'use client';
import dynamic from 'next/dynamic';
import useIsDesktop from '@/lib/functions/isDesktop';

const CoverflowSlider = dynamic(
    () => import('@/components/organisims/swiper/CoverflowSwiper'),
    { ssr: false, loading: () => <div className="w-screen h-screen bg-gray-100" /> }
);

const HeroSection = dynamic(() => import('@/components/pages/home/slides/heroSections'));
const Welcome = dynamic(() => import('@/components/pages/home/slides/welcome'));
const OurValues = dynamic(() => import('@/components/pages/home/slides/ourValues'));
const OurCase = dynamic(() => import('@/components/pages/home/slides/ourCase'));
const DownloadFile = dynamic(() => import('@/components/pages/home/slides/downloadFile'));
const OurSuccess = dynamic(() => import('@/components/pages/home/slides/ourSuccess'));
const Creative = dynamic(() => import('@/components/pages/home/slides/creative'));
const DiscoverBusiness = dynamic(() => import('@/components/pages/home/slides/discoverBusiness'));
const LatestNews = dynamic(() => import('@/components/pages/home/slides/latestNews'));
const GetInTouch = dynamic(() => import('@/components/pages/home/slides/getInTouch'));

export default function HomeContainer() {
    const isDesktop = useIsDesktop();

    if (isDesktop) {
        return (
            <div className="hide-scrollbar w-full max-w-full min-h-screen overflow-hidden">
                <div key="Desktop-View" className="hidden md:block">
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
                </div>
            </div>
        );
    }

    return (
        <div className="hide-scrollbar w-full max-w-full min-h-screen overflow-hidden">
            <div key="Mobile-View" className="flex flex-col md:hidden">
                <HeroSection key='11' />
                <Welcome key='12' />
                <OurValues key='13' />
                <OurCase key='14' />
                <DownloadFile key='15' />
                <OurSuccess key='16' />
                <Creative key='17' />
                <DiscoverBusiness key='18' />
                <LatestNews key='19' />
                <GetInTouch key='20' />
            </div>
        </div>
    );
}