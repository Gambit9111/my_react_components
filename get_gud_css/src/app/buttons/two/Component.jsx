import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPlane,
  faMoon,
  faWifi,
  faVolumeXmark,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

function Component() {
  return (
    <div className="buttons-two">
      <label>
        <input type="checkbox" name="check" />
        <span></span>
        <FontAwesomeIcon icon={faPhone} className="myIcon w-6" />
      </label>
      <label>
        <input type="checkbox" name="check" />
        <span></span>
        <FontAwesomeIcon icon={faPlane} className="myIcon w-6" />
      </label>
      <label>
        <input type="checkbox" name="check" />
        <span></span>
        <FontAwesomeIcon icon={faMoon} className="myIcon w-6" />
      </label>
      <label>
        <input type="checkbox" name="check" />
        <span></span>
        <FontAwesomeIcon icon={faWifi} className="myIcon w-6" />
      </label>
      <label>
        <input type="checkbox" name="check" />
        <span></span>
        <FontAwesomeIcon icon={faVolumeXmark} className="myIcon w-6" />
      </label>
      <label>
        <input type="checkbox" name="check" />
        <span></span>
        <FontAwesomeIcon icon={faAmbulance} className="myIcon w-6" />
      </label>
    </div>
  );
}

export default Component;
