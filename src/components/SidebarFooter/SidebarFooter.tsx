import React from "react";

export default function SidebarFooter() {
  return (
    <div className=" bg-white">
      <section className="text-xs flex items-center justify-between h-20 border-t ">
        <div className="flex items-center">
          <img src="/avatars/Avatar.jpg" alt="avatar" />
          <div className="mx-2">
            <h5 className="font-semibold">Olivia Rhye</h5>
            <p className="text-gray-500">olivia@untitledui.com</p>
          </div>
        </div>
        <img src="/icons/Icon-1.svg" alt="logout" />
      </section>
    </div>
  );
}
