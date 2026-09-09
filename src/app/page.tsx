import CoverflowSlider from '@/components/organisims/swiper/CoverflowSwiper';
import Image from 'next/image';

export default async function HomePage() {

  return <div className="w-full max-w-full overflow-hidden">
    <CoverflowSlider
      slides={[
        <div key="1" data-nav-bg="main" className="bg-main w-full h-full">
          <Image fill src="https://plus.unsplash.com/premium_photo-1788632973789-a9658ffa5851?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" className="object-cover" />
        </div>,
        <div key="2" data-nav-bg="white" className="bg-white w-full h-full">
          <Image fill src="https://images.unsplash.com/photo-1763259012707-3a5e383e76d4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" className="object-cover" />
        </div>,
        <div key="3" data-nav-bg="main" className="bg-main w-full h-full">
          <Image fill src="https://plus.unsplash.com/premium_photo-1788699536740-1bc1e09fe37b?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hero Image" className="object-cover" />
        </div>,
      ]}
    />
  </div>;
}