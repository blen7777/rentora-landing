// components/SiteBackdrop.tsx
export function SiteBackdrop() {
    return (
        <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
            {/* Base */}
            <div className="absolute inset-0 bg-[#050A14]" />

            {/* Global blue tone across the whole page */}
            <div
                className="absolute inset-0 opacity-[0.65]
        bg-[radial-gradient(1200px_700px_at_20%_10%,rgba(59,130,246,0.18),transparent_60%),
            radial-gradient(1200px_700px_at_80%_15%,rgba(0,180,196,0.12),transparent_62%),
            radial-gradient(1100px_700px_at_50%_90%,rgba(59,130,246,0.10),transparent_65%)]"
            />

            {/* Very subtle top-to-bottom depth */}
            <div className="absolute inset-0 opacity-[0.55] bg-gradient-to-b from-[#0B1A36] via-transparent to-[#050A14]" />

            {/* Super faint texture line */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.10),transparent)]" />
        </div>
    );
}
