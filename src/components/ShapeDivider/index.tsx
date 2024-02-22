export default function ShapeDivider() {
  return (
    <div className="absolute w-full overflow-hidden leading-[0] z-[-1] left-0 bottom-0" style={{transform: 'rotateX(180deg)'}}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%_+_1.3px)] h-[600px]"
      >
        <path
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="fill-[#128C1910]"
        ></path>
      </svg>
    </div>
  );
}
