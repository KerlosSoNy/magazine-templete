"use client";

interface TextFieldProps {
    icon?: any;
    name: string;
    label: string;
    type?: "text" | "tel" | "number";
    placeholder: string;
    value: string;
    onChange: any;
    onBlur?: any;
    min?: number;
    error?: string;
}

export default function TextField({
    name,
    label,
    type = "text",
    placeholder,
    value,
    onBlur,
    onChange,
    min,
    icon,
    error,
}: TextFieldProps) {
    const errorId = `${name}-error`;
    return (
        <div className="flex flex-col">
            {label && <label htmlFor={name} className="sr-only">
                {label}
            </label>}
            <div className={`relative h-14 max-h-14 rounded-lg  border flex items-center bg-white ${icon ? "ps-15" : "ps-6"} pe-6 ${error ? "border-red-500" : "border-text-disabled"}`}>
                <div className="absolute top-1/2 -translate-y-1/2 inset-s-6">
                    {icon}
                </div>
                <input
                    autoComplete="off"
                    name={name}
                    id={name}
                    type={type}
                    min={min}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    title={label}
                    onBlur={onBlur}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    className={`w-full  focus:border-0 focus:ring-0 focus:outline-none  h-full bg-white text-7 text-text-placeholder 
                    `}
                />
            </div>
            {error && (
                <p id={errorId} className="mt-1 text-6 text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}