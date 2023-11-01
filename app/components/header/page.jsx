"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav>
      <div className="fixed top-0 w-full z-10">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <Link
              href=""
              aria-label="Smart Home"
              title="Smart Home"
              className="inline-flex items-center"
            >
              <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase italic">
                Developer <span className="text-blue-500">Nahidul</span>
              </span>
            </Link>
            <ul className="hidden items-center space-x-8 lg:flex hover:text-blue-500 duration-300">
              <li>
                <Link
                  href=""
                  aria-label="Home"
                  title="Home"
                  className=" tracking-wide text-white transition-colors duration-300 hover:text-blue-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  title="courses"
                  className=" tracking-wide text-white transition-colors duration-300 hover:text-blue-500"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href=""
                  title="Blog"
                  className=" tracking-wide text-white transition-colors duration-300 hover:text-blue-500"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  title="FAQ"
                  className=" tracking-wide text-white transition-colors duration-300 hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  title="FAQ"
                  className=" tracking-wide text-white transition-colors duration-300 hover:text-blue-500"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
            <div>
              <button className="hidden lg:block border px-5 py-2 rounded hover:border-blue-500 hover:text-blue-500 text-xl duration-300 ease-out ">
                Contact me
              </button>
            </div>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-slate-900 border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          href=""
                          aria-label="Smart Home"
                          className="inline-flex items-center"
                        >
                          <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase italic">
                            Developer{" "}
                            <span className="text-blue-500">Nahidul</span>
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-white" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href=""
                            title="courses"
                            className=" tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Skills
                          </Link>
                        </li>

                        <li>
                          <Link
                            href=""
                            title="Blog"
                            className=" tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About me
                          </Link>
                        </li>
                        <li>
                          <Link
                            href=""
                            to="#projects"
                            title="FAQ"
                            className=" tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Projects
                          </Link>
                        </li>
                        <li>
                          <Link
                            href=""
                            to="#contact"
                            title="FAQ"
                            className=" tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Contact me
                          </Link>
                        </li>
                        <li>
                          <div
                            className="tooltip text-white"
                            data-tip="This page will add soon"
                          >
                            Blog
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
