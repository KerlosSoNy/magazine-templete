import { useNavTheme } from "@/components/providers/NavThemeProvider";

const SOCIALS = [
    {
        icon:
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.75 12.25L6.15323 7.84677M7.84677 6.15323L12.25 12.25H9.33333L6.15323 7.84677L1.75 1.75H4.66667L7.84677 6.15323ZM12.25 1.75L7.84677 6.15323" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        , href: '#'
    },
    {
        icon:
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_9_1233)">
                    <path d="M12.25 0.875L1.74727 0.875C1.26602 0.875 0.875 1.27148 0.875 1.7582L0.875 12.2418C0.875 12.7285 1.26602 13.125 1.74727 13.125L12.25 13.125C12.7313 13.125 13.125 12.7285 13.125 12.2418L13.125 1.7582C13.125 1.27148 12.7313 0.875 12.25 0.875ZM4.57734 11.375L2.76172 11.375L2.76172 5.52891H4.58008L4.58008 11.375H4.57734ZM3.66953 4.73047C3.08711 4.73047 2.6168 4.25742 2.6168 3.67773C2.6168 3.09805 3.08711 2.625 3.66953 2.625C4.24922 2.625 4.72227 3.09805 4.72227 3.67773C4.72227 4.26016 4.25195 4.73047 3.66953 4.73047ZM11.3832 11.375H9.56758V8.53125C9.56758 7.85313 9.55391 6.98086 8.62422 6.98086C7.67812 6.98086 7.5332 7.71914 7.5332 8.48203L7.5332 11.375H5.71758L5.71758 5.52891L7.45938 5.52891L7.45938 6.32734H7.48398C7.72734 5.86797 8.3207 5.38398 9.20391 5.38398C11.0414 5.38398 11.3832 6.59531 11.3832 8.17031V11.375Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_9_1233">
                        <rect width="14" height="14" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        , href: '#'
    },
];

export default function FollowUs() {
    const isWhite = useNavTheme();
    return (
        <div className={`absolute top-1/2 -translate-y-1/2 inset-s-5 xl:inset-s-10 3xl:inset-s-40 z-30 hidden md:flex flex-col items-center gap-4 ${isWhite && "filter-teal"}`}>
            <div className="flex flex-col items-center gap-5">
                {SOCIALS.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        className="text-[10px] tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        {
                            social.icon
                        }
                    </a>
                ))}
            </div>
            <span
                className="text-6 tracking-[0.3em] mt-2 text-white uppercase"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(-360deg)' }}
            >
                Follow us
            </span>
            <div className="h-5 w-0.5 bg-white -mt-2" />
        </div>
    )
}
