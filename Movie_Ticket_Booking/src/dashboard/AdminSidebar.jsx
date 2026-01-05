import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { LayoutDashboardIcon,ListCollapseIcon, ListIcon, PlusSquareIcon,} from "lucide-react";

const AdminSidebar = () => {
  const user = {
    firstName: "Admin",
    lastName: "Profile",
    imageUrl: assets.profile,
  };

  const linkBase =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all";

  return (
    <aside className="w-59 h-screen bg-linear-to-b from-black via-[#140005] to-black text-white flex flex-col px-5 py-6">

      {/* Profile */}
      <div className="flex flex-col items-center mb-10">
        <img
          src={user.imageUrl}
          alt="profile"
          className="w-20 h-20 rounded-full  object-cover"
        />
        <h4 className="mt-3 text-sm font-medium text-gray-200">
          {user.firstName} {user.lastName}
        </h4>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2">
        <NavLink
          to=""
          className={({ isActive }) =>
            `${linkBase} ${isActive
              ? "bg-linear-to-r from-red-500 to-pink-500 text-white"
              : "text-gray-400 hover:bg-red-500/20 hover:text-white"
            }`
          }
        >
          <LayoutDashboardIcon size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/adminDashboard/add-shows"
          className={({ isActive }) =>
            `${linkBase} ${isActive
              ? "bg-linear-to-r from-red-500 to-pink-500 text-white"
              : "text-gray-400 hover:bg-red-500/20 hover:text-white"
            }`
          }
        >
          <PlusSquareIcon size={20} />
          <span>Add Shows</span>
        </NavLink>

        <NavLink
          to="/adminDashboard/list-shows"
          className={({ isActive }) =>
            `${linkBase} ${isActive
              ? "bg-linear-to-r from-red-500 to-pink-500 text-white"
              : "text-gray-400 hover:bg-red-500/20 hover:text-white"
            }`
          }
        >
          <ListIcon size={20} />
          <span>List Shows</span>
        </NavLink>

        <NavLink
          to="/adminDashboard/bookings"
          className={({ isActive }) =>
            `${linkBase} ${isActive
              ? "bg-linear-to-r from-red-500 to-pink-500 text-white"
              : "text-gray-400 hover:bg-red-500/20 hover:text-white"
            }`
          }
        >
          <ListCollapseIcon size={20} />
          <span>List Bookings</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
