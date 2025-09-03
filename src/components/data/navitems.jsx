import { BsCart3 } from "react-icons/bs";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";

export const menuItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Products", link: "/products" },
  {
    label: "Pages",
    dropdown: [
      { label: "Blog", link: "/blog" },
      { label: "Faq", link: "/faq" },
      { label: "Contact", link: "/contact" },
    ],
  },
];

export const socialIcons = [
  { icon: <BsCart3 />, badge: 0 },
  { icon: <RiShoppingBagLine /> },
  { icon: <IoSearchSharp /> },
];
