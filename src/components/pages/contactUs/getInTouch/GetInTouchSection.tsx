import Image from "next/image";
import { getTranslations } from "next-intl/server";
import ContactBookingForm from "./ContactBookingForm";
import ContactDetails, { ContactDetailItem, defaultContactDetails } from "./ContactDetails";
import ScrollDownIndicator from "./ScrollDownIndicator";
import SocialSidebar, { SocialLink, defaultSocialLinks } from "./SocialSidebar";
import MotionDiv from "@/components/shared/motionDiv";

interface GetInTouchSectionProps {
    title?: string;
    highlight?: string;
    subtitle?: string;
    contactDetails?: ContactDetailItem[];
    socialLinks?: SocialLink[];
}

export default async function GetInTouchSection({
    title,
    highlight,
    subtitle,
    contactDetails = defaultContactDetails,
    socialLinks = defaultSocialLinks,
}: GetInTouchSectionProps) {
    const t = await getTranslations("ContactUsPage.getInTouch");
    const resolvedTitle = title ?? t("title");
    const resolvedHighlight = highlight ?? t("highlight");
    const resolvedSubtitle = subtitle ?? t("subtitle");

    return (
        <div className="relative w-full overflow-hidden bg-white px-10 py-20 lg:py-35.25 xl:px-25">
            <Image
                alt={t("backgroundAlt")}
                src="/images/home/successBg.png"
                width={764}
                height={726}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 h-167.5 -translate-y-1/2 w-3xl"
            />

            <SocialSidebar links={socialLinks} />
            <ScrollDownIndicator id="map" />

            <div className="relative z-1 mx-auto flex w-full max-w-330 xl:max-w-355.5 flex-col items-center">
                <MotionDiv delay={0.2}>
                    <span className="text-2 md:text-1 font-bold leading-1 text-center text-text-secondary">
                        {resolvedTitle} <span className="text-main">{resolvedHighlight}</span>
                    </span>
                </MotionDiv>

                <div className="mt-16 flex w-full flex-col-reverse items-center justify-center gap-12 xl:flex-row lg:gap-18">
                    <div className="flex max-w-200 xl:max-w-175 flex-col items-start">
                        <MotionDiv delay={0.4}>
                            <span className="max-w-200 xl:max-w-175 text-4 2xl:text-2 font-bold leading-3 2xl:leading-2 text-[#171918]">
                                {resolvedSubtitle}
                            </span>
                        </MotionDiv>

                        <div className="mt-8">
                            <ContactDetails items={contactDetails} />
                        </div>
                    </div>

                    <ContactBookingForm />
                </div>
            </div>
        </div>
    );
}
