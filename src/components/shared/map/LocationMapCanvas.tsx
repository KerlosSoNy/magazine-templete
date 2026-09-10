"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export interface LocationMapProps {
    latitude: number;
    longitude: number;
    zoom?: number;
    popupText?: string;
    markerColor?: string;
    dragging?: boolean;
    className?: string;
}

function createPinIcon(color: string) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="46" viewBox="0 0 34 46">
        <path d="M17 0C7.611 0 0 7.611 0 17c0 12.75 17 29 17 29s17-16.25 17-29C34 7.611 26.389 0 17 0z" fill="${color}"/>
        <circle cx="17" cy="17" r="6.5" fill="#fff"/>
    </svg>`;

    return L.divIcon({
        html: svg,
        className: "",
        iconSize: [34, 46],
        iconAnchor: [17, 46],
        popupAnchor: [0, -42],
    });
}

export default function LocationMapCanvas({
    latitude,
    longitude,
    zoom = 15,
    popupText,
    markerColor = "#145048",
    dragging = true,
    className = "",
}: LocationMapProps) {
    const position: [number, number] = [latitude, longitude];

    return (
        <MapContainer
            center={position}
            zoom={zoom}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            touchZoom={false}
            boxZoom={false}
            keyboard={false}
            dragging={dragging}
            className={`h-full w-full z-1 ${className}`}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={createPinIcon(markerColor)}>
                {popupText && <Popup>{popupText}</Popup>}
            </Marker>
        </MapContainer>
    );
}
