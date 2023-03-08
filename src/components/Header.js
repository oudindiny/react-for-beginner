import React from "react";

const Header = () => {
  return (
    <div className="Header">
      <div className="dropdown">
        <button className="dropdown-btn">버튼</button>
        <div className="dropdown-submenu">
          <a href="#none">메인페이지</a>
          <a href="#none">지도</a>
          <a href="#none">예약현황</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
