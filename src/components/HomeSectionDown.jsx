"use client";

export default function HomeSectionDown() {
  return (
    <div
      className="arrow__button"
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight - 60,
          behavior: "smooth",
        });
      }}
    >
      <svg
        width="8"
        height="30"
        viewBox="0 0 8 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.6266 29.3734C3.83282 29.5796 4.16717 29.5796 4.37339 29.3734L7.73394 26.0128C7.94016 25.8066 7.94016 25.4723 7.73394 25.2661C7.52772 25.0598 7.19337 25.0598 6.98715 25.2661L4 28.2532L1.01285 25.2661C0.806627 25.0598 0.472279 25.0598 0.266059 25.2661C0.0598393 25.4723 0.0598393 25.8066 0.266059 26.0128L3.6266 29.3734ZM3.47194 -2.30822e-08L3.47194 29L4.52806 29L4.52806 2.30822e-08L3.47194 -2.30822e-08Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
