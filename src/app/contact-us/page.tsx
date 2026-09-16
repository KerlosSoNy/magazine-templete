import GetInTouchSection from "@/components/pages/contactUs/getInTouch/GetInTouchSection";
import LocationMap from "@/components/shared/map/LocationMap";
import SmallBanner from "@/components/shared/smallBanner";
import JsonLd from "@/components/shared/JsonLd";
import { contactPageSchema } from "@/lib/seo/schema";
import { getLocale, getTranslations } from "next-intl/server";
import { ORG_GEO } from "@/lib/constant/site";
import { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import { resolveLocale } from "@/lib/i18n/locale";

const OFFICE_LOCATION = {
    latitude: ORG_GEO.latitude,
    longitude: ORG_GEO.longitude,
};

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("ContactUsPage.meta");
    const locale = resolveLocale(await getLocale());
    return pageMetadata({ locale, title: t("title"), description: t("description"), path: "/contact-us" });
}

export default async function Page() {
    const t = await getTranslations("ContactUsPage");
    return (
        <div className="pt-18 xl:pt-32">
            <JsonLd data={contactPageSchema()} />
            <SmallBanner title={t("bannerTitle")} />
            <GetInTouchSection />
            <div id="map" className="h-100 md:h-150 xl:h-192 w-full">
                <LocationMap
                    latitude={OFFICE_LOCATION.latitude}
                    longitude={OFFICE_LOCATION.longitude}
                    popupText="Minds Advisory"
                />
            </div>
        </div>
    )
}
