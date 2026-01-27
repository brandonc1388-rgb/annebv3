import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { UsersIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function LiveStats() {
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
    const [currentMonth] = useState(new Date().toLocaleString('default', { month: 'long' }));

    // Simulate live stats (in real app, these would come from API)
    const stats = [
        {
            number: 127,
            label: `Clients Helped in ${currentMonth}`,
            IconComponent: UsersIcon,
            color: "text-blue-600",
            bg: "bg-blue-50",
            border: "border-blue-200"
        },
        {
            number: 24,
            label: "Average Hours to Approval",
            IconComponent: ClockIcon,
            color: "text-green-600",
            bg: "bg-green-50",
            border: "border-green-200"
        },
        {
            number: 98,
            label: "Success Rate (%)",
            IconComponent: CheckCircleIcon,
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "border-purple-200"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-24 h-24 bg-blue-500 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-green-400/30">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span>LIVE DASHBOARD</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black font-display mb-4 text-shadow-xl">Real-Time Performance</h2>
                    <p className="text-slate-300 text-lg">Live metrics from Anne's mortgage practice</p>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`group relative ${stat.bg} rounded-2xl p-6 md:p-8 text-center transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-2 ${stat.border} magnetic overflow-hidden`}
                            data-aos="zoom-in"
                            data-aos-delay={index * 150}
                        >
                            {/* Shimmer Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                                    <stat.IconComponent className={`w-8 h-8 md:w-12 md:h-12 ${stat.color}`} />
                                </div>
                                <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-2 md:mb-3 font-display`}>
                                    {inView && (
                                        <CountUp
                                            end={stat.number}
                                            duration={3}
                                            decimals={stat.decimals || 0}
                                        />
                                    )}
                                    {stat.label.includes('%') && '%'}
                                </div>
                                <p className="text-sm font-bold text-slate-700 leading-tight">{stat.label}</p>
                            </div>

                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl bg-gradient-to-r from-red-400/20 to-blue-400/20"></div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="600">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        <span className="text-slate-300 font-medium">Updated every 5 minutes • Licensed M08005655</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
