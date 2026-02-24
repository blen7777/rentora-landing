// components/HeaderBackdrop.tsx
export function HeaderBackdrop() {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[640px] overflow-hidden -z-0">
            {/* ✅ Image background */}
            <div
                className="absolute inset-0 bg-[url('/bg/header.jpg')] bg-cover bg-center opacity-[0.55]"
            />

            {/* ✅ Blue overlay to match the tone and keep readability */}
            <div className="absolute inset-0 bg-[#0B1A36]/50" />

            {/* ✅ Soft radial lights like the design */}
            <div
                className="absolute inset-0 opacity-[0.55]
        bg-[radial-gradient(900px_520px_at_20%_20%,rgba(59,130,246,0.25),transparent_62%),
            radial-gradient(900px_520px_at_75%_30%,rgba(0,180,196,0.18),transparent_62%)]"
            />

            {/* ✅ Geometric watermark (left) */}
            <svg
                className="absolute left-0 top-24 h-[520px] w-[720px] opacity-[0.10]"
                viewBox="0 0 720 520"
                fill="none"
            >
                <g stroke="white" strokeWidth="2">
                    <path opacity="0.35" d="M40 430 L280 70 L520 430 Z" />
                    <path opacity="0.25" d="M130 430 L280 180 L430 430 Z" />
                    <path opacity="0.18" d="M40 430 L280 300 L520 430 Z" />
                    <path opacity="0.18" d="M280 70 L280 430" />
                    <path opacity="0.12" d="M40 430 L520 430" />
                </g>
            </svg>

            {/* Fade to the rest of the page */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#050A14]" />
        </div>
    );
}
