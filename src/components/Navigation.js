import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  let menu;
  let overlay;

  if (showMenu) {
    menu = (
      <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">
        <div className="border-b p-3">
          <span className="font-bold">This is menu</span>
        </div>
      </div>
    );
    overlay = (
      <div
        className="fixed bg-gray-800 top-0 left-0 h-full w-full z-50"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }
  return (
    <nav>
      <span className="text=xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {overlay}
      {menu}
    </nav>
  );
}
export default Navigation;
