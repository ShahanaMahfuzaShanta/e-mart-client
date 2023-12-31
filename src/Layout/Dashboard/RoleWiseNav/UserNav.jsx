import React from "react";
import { BsCart3 } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineCreditCard,
  AiOutlineHeart,
} from "react-icons/ai";
import { BiCalendar, BiCategory, BiDuplicate } from "react-icons/bi";
import { IoWalletOutline, IoSettingsOutline } from "react-icons/io5";
import { MdAddCard, MdOutlineReviews } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { ImProfile } from "react-icons/im";
// import { MdAddCard } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const UserNav = () => {
    return (
        <>
                
                <li>
                  <Link className="focus:bg-accent" to="/dashboard/user-profile">
                    <ImProfile />
                    User Profile
                  </Link>
                </li>
                <li>
                  <Link className="focus:bg-accent" to="/dashboard/myCart">
                    <BsCart3 />
                    My Cart
                  </Link>
                </li>
                {/* <li>
                  <Link className="focus:bg-accent" to="/dashboard/wish-list">
                    <AiOutlineHeart />
                    Wish List
                  </Link>
                </li> */}
                <li>
                  <Link className="focus:bg-accent" to="/dashboard/payment-history">
                    <IoWalletOutline />
                    Payment History
                  </Link>
                </li>
                <li>
                  <Link className="focus:bg-accent" to="/dashboard/order-details">
                    <BiCalendar />
                    Order Details
                  </Link>
                </li>
                <li>
                  <Link className="focus:bg-accent" to="/dashboard/add-review/delivered">
                    <MdAddCard />
                    Delivered Orders
                  </Link>
                </li>
              </>
    );
};

export default UserNav;