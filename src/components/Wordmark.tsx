import { useId } from "react";

interface WordmarkProps {
  className?: string;
}

// Renders "CénitCare" in Space Grotesk Bold with the tilde on the é in brand
// teal, matching the design system's lockup: the text is drawn twice (ink,
// then teal) and the teal copy is clipped to just the accent mark.
export const Wordmark = ({ className = "" }: WordmarkProps) => {
  const clipId = useId();

  return (
    <svg
      viewBox="0 0 224 64"
      className={className}
      role="img"
      aria-label="CénitCare"
    >
      <clipPath id={clipId}>
        <rect x="30.36" y="10.92" width="28.52" height="8.74" />
      </clipPath>
      <text
        x="0"
        y="33"
        dominantBaseline="central"
        fontFamily="Space Grotesk"
        fontWeight={700}
        fontSize={46}
        letterSpacing="-1.38"
        fill="currentColor"
      >
        Cénit<tspan dx="3.22">Care</tspan>
      </text>
      <g clipPath={`url(#${clipId})`}>
        <text
          x="0"
          y="33"
          dominantBaseline="central"
          fontFamily="Space Grotesk"
          fontWeight={700}
          fontSize={46}
          letterSpacing="-1.38"
          fill="#2ED9A6"
        >
          Cénit<tspan dx="3.22">Care</tspan>
        </text>
      </g>
    </svg>
  );
};
