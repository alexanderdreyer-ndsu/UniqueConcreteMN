import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ logoImgPath, navItems, contactInfo }) {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    function isExternal(path) {
        return /^https?:\/\//.test(path);
    }

    return (
        <>
            {/* Top Contact Bar */}
            <header className="w-full flex flex-col sm:flex-row bg-white justify-center sm:justify-between text-sm py-2 px-6 sm:px-10 text-gray-700 gap-1 sm:gap-0">
                <h4>{contactInfo.phone}</h4>
                <h4>{contactInfo.email}</h4>
            </header>

            {/* Main Navbar */}
            <header className="w-full flex items-center justify-between bg-gray-300/95 py-3 px-6 sm:px-10 relative shadow-md sticky top-0 z-50">
                {/* Logo */}
                <Link to="/">
                    <img src={logoImgPath} className="w-40 sm:w-48" alt="Logo" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 items-center">
                    {navItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative"
                            onMouseEnter={() => setOpenDropdown(index)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            {item.dropdown ? (
                                <>
                                    <button className="text-xl font-semibold text-black hover:text-gray-700 transition">
                                        {item.label} ▾
                                    </button>

                                    {openDropdown === index && (
                                        <div className="absolute left-0 bg-white shadow-lg p-2 flex flex-col top-full z-50 w-40">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.href}
                                                    className="hover:bg-gray-100 px-4 py-2 text-gray-700"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : isExternal(item.href) ? (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xl font-semibold text-black hover:text-gray-700 transition"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link
                                    className="text-xl font-semibold text-black hover:text-gray-700 transition"
                                    to={item.href}
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>

                {/* Mobile Menu Dropdown */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white text-black flex flex-col items-center py-4 shadow-lg z-40 md:hidden">
                        {navItems.map((item, index) => (
                            <div key={index} className="w-full text-center">
                                {item.dropdown ? (
                                    <details className="w-full cursor-pointer">
                                        <summary className="py-3 text-lg font-semibold hover:bg-gray-100">
                                            {item.label}
                                        </summary>
                                        <div className="flex flex-col bg-gray-50">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    to={subItem.href}
                                                    className="py-2 hover:bg-gray-200 text-base"
                                                    onClick={() => setMenuOpen(false)}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </details>
                                ) : isExternal(item.href) ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block py-3 text-lg hover:bg-gray-100"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.href}
                                        className="block py-3 text-lg hover:bg-gray-100"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </header>
        </>
    );
}

export default Header;
