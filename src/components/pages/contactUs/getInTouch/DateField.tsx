"use client";

import { useRef } from "react";

interface DateFieldProps {
    name: string;
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    error?: string;
}

export default function DateField({ name, label, value, onChange, onBlur, error }: DateFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const errorId = `${name}-error`;

    const openPicker = () => {
        if (inputRef.current && "showPicker" in inputRef.current) {
            (inputRef.current as HTMLInputElement).showPicker();
        }
    };

    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="sr-only">
                {label}
            </label>
            <div
                className={`relative h-14 max-h-14 rounded-lg border flex items-center pe-6 ps-6 cursor-pointer ${error ? "border-red-500" : "border-text-disabled"}`}
                onClick={openPicker}
            >
                <input
                    ref={inputRef}
                    name={name}
                    id={name}
                    type="date"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    title={label}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    className="w-full focus:border-0 focus:ring-0 focus:outline-none h-full bg-white text-7 text-text-placeholder [&::-webkit-calendar-picker-indicator]:opacity-0"
                />
                <svg className="absolute top-1/2 -translate-y-1/2 inset-e-6 pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 3V6M16 3V6M4 9H20M6 5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5Z" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {error && (
                <p id={errorId} className="mt-1 text-6 text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}
