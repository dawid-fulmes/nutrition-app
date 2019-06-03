import React from "react";
import NavItem from "./NavItem/NavItem";

const linksConfig = [
  { label: "Main", path: "/" },
  { label: "About", path: "/about" },
  { label: "Search", path: "/search" },
];

const NavItems = () => {
  return (
    <nav>
      <ul>
        {linksConfig.map(config => (
          <NavItem {...config} key={config.label} />
        ))}
      </ul>
    </nav>
  );
};

export default NavItems;
