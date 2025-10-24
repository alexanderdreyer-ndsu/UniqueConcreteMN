import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ logoImgPath, navItems, contactInfo }) {
    const [openDropdown, setOpenDropdown] = useState(null);

    function isExternal(path) {
        return /^https?:\/\//.test(path);
    }

    return (
        <>
            <header className="w-full h-auto flex bg-white justify-between text-sm py-1 px-10">
                <h4>{contactInfo.phone}</h4>
                <h4>{contactInfo.email}</h4>
            </header>

            <header className="w-full h-20 flex bg-gray-300/95 justify-around items-center">
                <Link to="/">
                    <img src={logoImgPath} className="w-48" alt="Logo" />
                </Link>

                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => setOpenDropdown(index)}
                        onMouseLeave={() => setOpenDropdown(null)}
                    >
                        {item.dropdown ? (
                            <>
                                <button
                                    className="text-2xl text-black cursor-pointer"
                                >
                                    {item.label + " ▾"}
                                </button>

                                {openDropdown === index && (
                                    <div className="absolute left-0 bg-white shadow-lg p-2 flex flex-col top-full">
                                        {item.dropdown.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                to={subItem.href}
                                                className="hover:bg-gray-200 pl-2 pr-20 py-3 text-base"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            isExternal(item.href) ? (
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl text-black"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <Link className="text-2xl text-black" to={item.href}>
                                    {item.label}
                                </Link>
                            )
                        )}
                    </div>
                ))}
            </header>
        </>
    );
}

export default Header;
