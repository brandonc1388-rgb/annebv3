export default function Field({ label, suffix, ...rest }) {
    return (
        <label className="grid gap-1">
            <span className="text-sm text-slate-600">{label}</span>
            <div className="relative">
                <input
                    {...rest}
                    className="w-full rounded-lg border border-slate-200 px-3 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/30 min-h-[44px] text-base"
                />
                {suffix && <span className="absolute right-3 top-3 text-slate-400 text-sm">{suffix}</span>}
            </div>
        </label>
    );
}
