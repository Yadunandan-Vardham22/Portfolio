import React from "react";
import logo from "../../assets/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import {darkMode} from "../../store/themeSlice"
import NavItems from "./NavItems";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const darkModeState = useSelector((store) => store.theme.themeMode)

  const handleThemeChange = () => {
    dispatch(darkMode(!darkModeState))
    document.body.classList.toggle("dark", !darkModeState)
  };

  return (
    <div className={`${darkModeState?"dark":""}`}>
      <div className="flex justify-between w-3/4 mx-auto mt-10 ">
        <div>
          <img src={logo} alt="" className="w-12 h-12 rounded-[50%] aspect-w-4 aspect-h-3" />
        </div>
        <div>
          <NavItems />
        </div>
      </div>
      <div
        className="mt-1 absolute top-12 left-[650px] cursor-pointer dark:text-white"
        onClick={handleThemeChange}
      >
        {darkModeState ? (
          <FontAwesomeIcon icon={faSun} style={{ fontSize: "30px" }} />
        ) : (
          <FontAwesomeIcon icon={faMoon} style={{ fontSize: "30px" }} />
        )}
      </div>
    </div>
  );
};

export default Header;
