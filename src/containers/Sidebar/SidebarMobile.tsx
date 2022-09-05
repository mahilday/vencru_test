import React, { useState } from "react";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import NavbarItems from "../../components/Navbaritems/NavbarItems";
import SidebarFooter from "../../components/SidebarFooter/SidebarFooter";

export default function SidebarMobile() {
    const [show, setShow] = useState(false)
  return (
    <div className="h-16  sticky top-0 flex flex-col justify-between">
      <div className="flex justify-between relative z-10">
        <Logo />
        <button type="button" onClick={()=> setShow(true)}>
          <img src="/icons/Icon.svg" alt="hamburger" />
        </button>
      </div>

      <div
        id="defaultModal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${show === true? "" : "hidden"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 bg-gray-700/90 h-screen`}
      >
        <div className="relative md:w-10/12 xs:w-full sm:w-full max-w-2xl h-full">
          {/* Modal content */}
          <div className="relative w-full bg-white h-full shadow">
            {/* Modal header */}
            <div className="flex justify-between items-center p-4 rounded-t border-b">
              <Logo />
              <button
                type="button"
                className="text-gray-500 bg-transparent hover:opacity-70 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={()=>setShow(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <Input type="text" iconName="search" />
              <div className="flex flex-col h-full overflow-auto tiny_scrollbar">
                <NavbarItems styles ="h-full flex flex-col justify-between"/>
              </div>
            </div>
            {/* Modal footer */}
            <div className="px-6 absolute bottom-0 w-full">
             <SidebarFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
