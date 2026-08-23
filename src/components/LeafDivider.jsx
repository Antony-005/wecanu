export default function LeafDivider({ className = "", color = "var(--color-fern)" }) {
  return (
    <svg
      viewBox="0 0 400 24"
      className={className}
      style={{ width: "100%", height: "24px" }}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 12 H160 M240 12 H400"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M160 12 C 172 12, 178 2, 190 2 M160 12 C 172 12, 178 22, 190 22 M190 2 L 200 8 M190 22 L 200 16"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M200 8 C 212 4, 228 4, 240 12 C 228 20, 212 20, 200 16"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
