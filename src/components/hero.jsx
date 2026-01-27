import { PhoneIcon, StarIcon, TrophyIcon, BuildingLibraryIcon } from '@heroicons/react/24/solid';
import toast from 'react-hot-toast';

export default function Hero() {
    const handleRateQuoteClick = () => {
        toast.success('Rate quote request sent! Anne will contact you within 24 hours.', {
            duration: 4000,
            style: {
                background: '#10B981',
                color: 'white',
                fontWeight: 'bold'
            }
        });
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 lg:bg-none">
            <div
                className="absolute inset-0 lg:hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/img_1847 copy.jpeg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/95"></div>
            </div>

            <div className="hidden lg:block absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    <div className="space-y-5 md:space-y-6">
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight font-display">
                                <span className="block" style={{ color: '#2D3748' }}>Toronto's</span>
                                <span className="block" style={{ color: '#8F182C' }}>#1 Mortgage</span>
                                <span className="block" style={{ color: '#2D3748' }}>Specialist</span>
                            </h1>
                        </div>

                        <p className="text-base md:text-lg leading-relaxed max-w-xl font-medium" style={{ color: '#4A5568' }}>
                            Professional guidance through every step. <strong style={{ color: '#2D3748' }}>Over 1,000 successful mortgages closed</strong> across the GTA.
                        </p>

                        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
                            <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
                                <BuildingLibraryIcon className="w-3.5 h-3.5 text-slate-600" />
                                <span className="font-semibold text-slate-700">Licensed M08005655</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
                                <svg className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="font-semibold text-slate-700">200 Consumers Rd, Toronto</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
                                <PhoneIcon className="w-3.5 h-3.5 text-slate-600" />
                                <span className="font-semibold text-slate-700">(416) 289-2224</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <a
                                href="/contact"
                                className="group relative btn-premium inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 text-base md:text-lg font-bold text-white rounded-xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300"
                                onClick={handleRateQuoteClick}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <span>Get Pre-Approved Now</span>
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </a>

                            <a
                                href="tel:4162892224"
                                className="group inline-flex items-center justify-center px-6 md:px-8 py-3.5 md:py-4 text-base md:text-lg font-bold text-slate-700 bg-white/95 backdrop-blur-md border-2 border-slate-300 rounded-xl shadow-lg hover:shadow-xl hover:border-red-300 transition-all duration-300"
                            >
                                <span className="flex items-center gap-2">
                                    <PhoneIcon className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                                    <span>Call: (416) 289-2224</span>
                                </span>
                            </a>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-3 text-xs">
                            <div className="flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1.5 rounded-full border border-green-200">
                                <StarIcon className="w-3.5 h-3.5" />
                                <span className="font-bold">5.0 Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2.5 py-1.5 rounded-full border border-blue-200">
                                <TrophyIcon className="w-3.5 h-3.5" />
                                <span className="font-bold">Top Mortgage Brokers</span>
                            </div>
                            <div className="flex items-center gap-1.5 bg-slate-50 text-slate-700 px-2.5 py-1.5 rounded-full border border-slate-200">
                                <BuildingLibraryIcon className="w-3.5 h-3.5" />
                                <span className="font-bold">100+ Lenders</span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block relative">
                        <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50">
                            <img
                                src="/images/img_1847.jpeg"
                                alt="Anne Brill - Mortgage Specialist"
                                className="w-full h-[550px] rounded-xl shadow-lg object-cover object-top"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
