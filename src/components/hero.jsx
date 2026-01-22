import { PhoneIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export default function Hero() {
    const handleRateQuoteClick = () => {
        toast.success('🎉 Rate quote request sent! Anne will contact you within 24 hours.', {
            duration: 4000,
            style: {
                background: '#10B981',
                color: 'white',
                fontWeight: 'bold'
            }
        });
    };

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Hero Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Modern Toronto Home"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/75"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-transparent to-blue-100/60"></div>
            </div>

            {/* Subtle Floating Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-3 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full text-sm font-bold border border-emerald-200 shadow-lg">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                            <span>50+ Premium Lenders • Licensed M08005655</span>
                        </div>

                        {/* Main Headline with Premium Typography */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tight font-display text-shadow-xl">
                                <span className="block" style={{ color: '#2D3748' }}>Toronto's</span>
                                <span className="block" style={{ color: '#8F182C' }}>
                                    #1 Mortgage
                                </span>
                                <span className="block" style={{ color: '#2D3748' }}>Specialist</span>
                            </h1>
                        </div>

                        {/* Compelling Subtitle with Enhanced Typography */}
                        <div className="space-y-6">
                            <p className="text-2xl md:text-3xl font-light leading-relaxed text-shadow-lg" style={{ color: '#718096' }}>
                                Get <span className="font-bold" style={{ color: '#2D3748' }}>pre-approved in 24 hours</span> with competitive rates and expert guidance.
                            </p>
                            <p className="text-xl leading-relaxed max-w-xl font-medium" style={{ color: '#718096' }}>
                                Professional guidance through every step. <strong style={{ color: '#2D3748' }}>Over 1,000 successful mortgages closed</strong> across the GTA.
                            </p>
                        </div>

                        {/* Contact Info Pills */}
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
                                <span>🏛️</span>
                                <span className="font-semibold">Licensed M08005655</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
                                <span>📍</span>
                                <span className="font-semibold">200 Consumers Rd, Toronto</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-md">
                                <span>📞</span>
                                <span className="font-semibold">(416) 289-2224</span>
                            </div>
                        </div>

                        {/* Premium CTA Buttons with Magnetic Effects */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <a
                                href="/pre-approval"
                                className="group relative btn-premium inline-flex items-center justify-center px-10 py-5 text-xl font-black text-white rounded-2xl shadow-2xl hover:shadow-3xl magnetic overflow-hidden font-display"
                                onClick={handleRateQuoteClick}
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <span>Get Pre-Approved Now</span>
                                    <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>

                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </a>

                            <a
                                href="tel:4162892224"
                                className="group inline-flex items-center justify-center px-10 py-5 text-xl font-black text-slate-700 bg-white/95 backdrop-blur-md border-2 border-slate-300 rounded-2xl shadow-xl hover:shadow-2xl hover:border-red-300 magnetic transition-all duration-300 font-display"
                            >
                                <span className="flex items-center gap-3">
                                    <PhoneIcon className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                                    <span>Call: (416) 289-2224</span>
                                </span>
                            </a>
                        </div>

                        {/* Social Proof Indicators */}
                        <div className="flex flex-wrap items-center gap-4 pt-6 text-sm">
                            <div className="flex items-center gap-2 bg-green-50 text-green-700 px-3 py-2 rounded-full border border-green-200">
                                <span>⭐</span>
                                <span className="font-bold">5.0 Google Reviews</span>
                            </div>
                            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-2 rounded-full border border-blue-200">
                                <span>🏆</span>
                                <span className="font-bold">Ontario's #1 Mortgage Brokers</span>
                            </div>
                            <div className="flex items-center gap-2 bg-purple-50 text-purple-700 px-3 py-2 rounded-full border border-purple-200">
                                <span>🏦</span>
                                <span className="font-bold">Lender Network of 100+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
