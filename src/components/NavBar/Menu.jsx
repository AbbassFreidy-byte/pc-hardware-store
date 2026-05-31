import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons8-gear-96.apng.png";
import CaseLogo from "../../assets/icons8-case-64.png";
import CpuLogo from "../../assets/icons8-processor-64.png";
import MoboLogo from "../../assets/icons8-motherboard-64.png";
import GpuLogo from "../../assets/icons8-gpu-64.png";
import RamLogo from "../../assets/icons8-ram-64.png";
import StorageLogo from "../../assets/icons8-storage-48.png";
import PsuLogo from "../../assets/icons8-psu-60.png";
import CoolingLogo from "../../assets/icons8-fan-60.png";
import "../../styles/Menu.css";

const List = [
  { path: "/Case", icon: CaseLogo, label: "Cases" },
  { path: "/CPU", icon: CpuLogo, label: "Processors" },
  { path: "/Mobo", icon: MoboLogo, label: "Motherboards" },
  { path: "/GPU", icon: GpuLogo, label: "Graphics Cards" },
  { path: "/RAM", icon: RamLogo, label: "RAM Modules" },
  { path: "/Storage", icon: StorageLogo, label: "Storage Devices" },
  { path: "/PSU", icon: PsuLogo, label: "Power Supplies" },
  { path: "/Cooling", icon: CoolingLogo, label: "Cooling Fans" }
];

const Menu = () => {
  return (
    <details className="Menu-box">
      <summary>
        <img src={logo} height="50" alt="Menu Icon" />
      </summary>
      <div className="MenuOptions">
        <ul id="icons-List">
          {List.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                <img src={item.icon} alt={item.label} />
                <br />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
};

export default Menu;
