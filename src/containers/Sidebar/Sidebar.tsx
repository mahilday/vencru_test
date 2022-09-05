import React from "react";
import Input from "../../components/Input/Input";
import Logo from "../../components/Logo/Logo";
import NavbarItems from "../../components/Navbaritems/NavbarItems";
import SidebarFooter from "../../components/SidebarFooter/SidebarFooter";
import Card from "../Card/Card";

export default function Sidebar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between">
      <Logo />
      <Input type="text" iconName="search" />
      <div className="flex flex-col h-4/6 overflow-auto tiny_scrollbar">
        <NavbarItems />
        <Card />
      </div>
      <SidebarFooter />
    </div>
  );
}
