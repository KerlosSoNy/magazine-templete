"use client";

import dynamic from "next/dynamic";
import type { LocationMapProps } from "./LocationMapCanvas";

const LocationMapCanvas = dynamic(() => import("./LocationMapCanvas"), {
    ssr: false,
    loading: () => <div className="h-full w-full bg-secondary" />,
});

export type { LocationMapProps };

export default function LocationMap(props: LocationMapProps) {
    return <LocationMapCanvas {...props} />;
}
