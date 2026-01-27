import { useState } from "react";
import { NavLink } from "react-router-dom";

const link =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors";
const active = "underline";

export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="border-b bg-white shadow-sm relative" style={{ borderColor: '#E2E8F0' }}>
            <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3 md:gap-4">
                    <img
                        src="/images/centum-logo.jpg"
                        alt="CENTUM Financial Group"
                        className="h-10 md:h-12 w-auto"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div className="size-10 rounded-xl flex items-center justify-center shadow-lg" style={{ display: 'none', backgroundColor: '#8F182C' }}>
                        <span className="text-white font-black text-lg">C</span>
                    </div>
                    <div className="leading-tight">
                        <p className="font-bold text-sm md:text-base" style={{ color: '#2D3748' }}>Anne Brill</p>
                        <p className="text-xs font-medium hidden sm:block" style={{ color: '#718096' }}>M08005655 • CENTUM Financial</p>
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-1">
                    <NavLink to="/" className={({ isActive }) => `${link} ${isActive ? active : ""}`} style={{ color: isActive => isActive ? '#8F182C' : '#718096' }}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `${link} ${isActive ? active : ""}`} style={{ color: isActive => isActive ? '#8F182C' : '#718096' }}>About</NavLink>
                    <NavLink to="/blog" className={({ isActive }) => `${link} ${isActive ? active : ""}`} style={{ color: isActive => isActive ? '#8F182C' : '#718096' }}>Blog</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${link} ${isActive ? active : ""}`} style={{ color: isActive => isActive ? '#8F182C' : '#718096' }}>Contact</NavLink>
                </nav>

                <a href="/contact" className="hidden md:inline-flex px-6 py-2 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200" style={{ backgroundColor: '#8F182C' }}>Get Pre-Approved</a>

                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {mobileMenuOpen && (
                <nav className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50" style={{ borderColor: '#E2E8F0' }}>
                    <div className="px-4 py-3 space-y-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive ? 'bg-red-50' : 'hover:bg-gray-50'}`}
                            style={({ isActive }) => ({ color: isActive ? '#8F182C' : '#4A5568' })}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive ? 'bg-red-50' : 'hover:bg-gray-50'}`}
                            style={({ isActive }) => ({ color: isActive ? '#8F182C' : '#4A5568' })}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive ? 'bg-red-50' : 'hover:bg-gray-50'}`}
                            style={({ isActive }) => ({ color: isActive ? '#8F182C' : '#4A5568' })}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive ? 'bg-red-50' : 'hover:bg-gray-50'}`}
                            style={({ isActive }) => ({ color: isActive ? '#8F182C' : '#4A5568' })}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </NavLink>
                        <div className="pt-2 pb-1">
                            <a
                                href="/contact"
                                className="block w-full px-4 py-3 text-center text-white font-semibold rounded-lg shadow-lg"
                                style={{ backgroundColor: '#8F182C' }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Get Pre-Approved
                            </a>
                        </div>
                    </div>
                </nav>
            )}
        </header>
    );
}
