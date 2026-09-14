"use client";

export interface SelectOption {
    value: string;
    label: string;
}

interface SelectFieldProps {
    id: string;
    srOnly?: boolean
    label: string;
    value: string;
    name: string;
    onChange: any;
    options: SelectOption[];
    error?: string;
}

function SelectChevron() {
    return (
        <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 inset-e-4 my-auto h-2.5 w-2.5"
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 1L5 5L9 1" stroke="#A4A4A4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function SelectField({ id, label, name, value, onChange, options, error, srOnly = true }: SelectFieldProps) {
    const errorId = `${id}-error`;

    return (
        <div className="flex flex-col">
            <label htmlFor={id} className={`${srOnly ? "sr-only" : "text-5 text-text-disabled font-inter mb-2.5"}`}>
                {label}
            </label>
            <div className="relative">
                <select
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    className={`w-full appearance-none rounded-lg border h-14 bg-white py-2 ps-6 pe-10 text-7 text-neutral-600 ${error ? "border-red-500" : "border-neutral-400"
                        }`}
                >
                    <option value="">{label}</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <SelectChevron />
            </div>
            {error && (
                <p id={errorId} className="mt-1 text-6 text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}