import Image from "next/image";
import "./style.css";

import logoImage from "../../../../public/buttons/two/cocacola_logo.png";
import colaImage from "../../../../public/buttons/two/cocacola.png";

function Component() {
  return (
    <div className="cards-two">
      <div className="circle ii1">
        <Image className="logo" src={logoImage} alt={logoImage} />
      </div>
      <div className="content">
        <h2>Cocacola</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At lectus
          urna duis convallis convallis. Adipiscing elit pellentesque habitant
          morbi tristique senectus et netus.
        </p>
        <a href="#">Explore More</a>
      </div>
      <Image className="product_img" src={colaImage} alt={colaImage} />
    </div>
  );
}

export default Component;
