import React from "react";
import Sidebar from "../../containers/Sidebar/Sidebar";
import SidebarMobile from "../../containers/Sidebar/SidebarMobile";
import TopBar from "../../containers/TopBar/TopBar";

type Props = {
  title: string;
  children: React.ReactNode;
  description: string;
};

const AdminLayout: React.FC<Props> = ({ title, description, children }) => {
  return (
    <div className="w-full flex xs:flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row">
      <aside className="w-2/12 px-5 border-r hidden xs:hidden sm:hidden md:hidden lg:hidden xl:flex">
        <Sidebar />
      </aside>
      <aside className="w-full px-5 border-b flex xs:flex sm:flex md:flex lg:flex xl:hidden">
        <SidebarMobile />
      </aside>
      <main className="bg-vencru_bg_dark xs:w-full sm:w-full md:w-full lg:w-full xl:w-10/12 px-10 ">
        <div className="xl:sticky xl:top-0 bg-vencru_bg_dark">
          <div className="h-28 flex flex-col justify-center">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <h4 className="text-gray-500 mt-2">{description}</h4>
          </div>
          <div>
            <TopBar />
          </div>
        </div>
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
