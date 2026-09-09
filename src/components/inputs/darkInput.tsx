export default function DarkField({
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    icon,
}: {
    name: string;
    placeholder: string;
    value: string;
    onChange: any;
    onBlur?: any;
    error?: string;
    icon?: React.ReactNode;
}) {
    const errorId = `${name}-error`;
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="sr-only">
                {placeholder}
            </label>
            <div className={`relative h-14 max-h-14 rounded-lg border flex items-center ${icon ? "pl-15" : "pl-6"} pe-6 ${error ? "border-red-400" : "border-white/15"} bg-[#0E3832]`}>
                {icon && (
                    <div className="absolute top-1/2 -translate-y-1/2 inset-s-6 text-white/60">
                        {icon}
                    </div>
                )}
                <input
                    autoComplete="off"
                    name={name}
                    id={name}
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    title={placeholder}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    className="w-full h-full bg-transparent text-7 text-white placeholder:text-white/60 focus:border-0 focus:ring-0 focus:outline-none"
                />
            </div>
            {error && (
                <p id={errorId} className="mt-1 text-6 text-red-400">
                    {error}
                </p>
            )}
        </div>
    );
}