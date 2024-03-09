import "@/styles/magnet_button.scss";

import MagnetWrapper from "./MagnetWrapper";

export default function MagnetButton({ children }) {
  return (
    <MagnetWrapper>
      <button className="magnet_button">{children}</button>
    </MagnetWrapper>
  );
}
