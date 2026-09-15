import GetInTouchSection from "@/components/pages/contactUs/getInTouch/GetInTouchSection";
import LocationMap from "@/components/shared/map/LocationMap";
import SmallBanner from "@/components/shared/smallBanner";
import { getTranslations } from "next-intl/server";

const OFFICE_LOCATION = {
    latitude: 26.4048,
    longitude: 50.0898,
};

export default async function Page() {
    const t = await getTranslations("ContactUsPage");
    return (
        <div className="pt-18 xl:pt-32">
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
