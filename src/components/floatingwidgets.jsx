import { useState } from 'react';
import { CalculatorIcon } from '@heroicons/react/24/outline';

export default function FloatingWidgets() {
    const [hoveredWidget, setHoveredWidget] = useState(null);

    const widgets = [
        {
            id: 'rates',
            href: 'https://www.centum.ca/rates',
            icon: '%',
            hoverText: "Check Out Today's Rates",
            position: 'bottom-32'
        },
        {
            id: 'calculator',
            href: 'https://www.centum.ca/calculators-mortgage',
            icon: 'calculator',
            hoverText: 'Calculate Your Mortgage Here',
            position: 'bottom-8'
        }
    ];

    return (
        <div className="fixed right-6 z-50">
            {widgets.map((widget) => (
                <div
                    key={widget.id}
                    className={`absolute ${widget.position} group`}
                    onMouseEnter={() => setHoveredWidget(widget.id)}
                    onMouseLeave={() => setHoveredWidget(null)}
                >
                    {/* Hover Text Tooltip */}
                    <div
                        className={`absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl transition-all duration-300 ${
                            hoveredWidget === widget.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
                        }`}
                    >
                        {widget.hoverText}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-900"></div>
                    </div>

                    {/* Widget Button */}
                    <a
                        href={widget.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-4 border-white"
                        style={{ backgroundColor: '#8F182C' }}
                    >
                        {widget.icon === 'calculator' ? (
                            <CalculatorIcon className="w-8 h-8 text-white" />
                        ) : (
                            <span className="text-white text-3xl font-black">{widget.icon}</span>
                        )}
                    </a>
                </div>
            ))}
        </div>
    );
}
