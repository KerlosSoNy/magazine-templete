"use client";

interface CheckboxFieldProps {
    id: string;
    name: string;
    label: React.ReactNode;
    checked: boolean;
    onChange: any;
    onBlur?: any;
    error?: string;
}

function CheckIcon() {
    return (
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.75 4.75L3.75 7.75L10.75 0.75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function CheckboxField({
    id,
    name,
    label,
    checked,
    onChange,
    onBlur,
    error,
}: CheckboxFieldProps) {
    const errorId = `${id}-error`;

    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="flex items-start gap-2.5 cursor-pointer select-none">
                {/* Real input — visually hidden but still focusable/accessible */}
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    className="peer sr-only"
                />

                {/* Custom visual box, driven purely by peer state */}
                <span
                    className={`
                        mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center
                        rounded-md border transition-colors bg-[#dae1e0]
                        peer-checked:bg-primary-600 peer-checked:border-primary-600
                        peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-primary-500
                        ${error ? "border-red-500" : "border-[#9FB7B4] "}
                    `}
                >
                    <span className="opacity-0 peer-checked:opacity-100 [.peer:checked~span_&]:opacity-100">
                        <CheckIcon />
                    </span>
                </span>

                <span className="text-7 text-neutral-600">{label}</span>
            </label>

            {error && (
                <p id={errorId} className="mt-1 text-6 text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}