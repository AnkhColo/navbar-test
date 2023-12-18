import React from "react";
import { FaPoop, FaFire } from "react-icons/fa";
import { BsApple, BsAmazon } from "react-icons/bs";

const Sidebar = () => {
  return (
    <>
      <div className="fixed flex flex-col w-16 p-1 h-screen top-0 left-0 m-0 shadow-lg bg-gray-700">
        <SidebarIcon icon={<FaPoop size={30} />} />
        <SidebarIcon icon={<FaFire size={30} />} />
        <SidebarIcon icon={<BsApple size={30} />} />
      </div>
      <div className="fixed bottom-2 p-2">
        <SidebarIcon icon={<BsAmazon size={30} />} />
      </div>
    </>
  );
};

const SidebarIcon = ({ icon }) => {
  return <div class="sidebar-icon">{icon}</div>;
};

export default Sidebar;
