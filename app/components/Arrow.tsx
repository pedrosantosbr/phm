export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg
      className="arrow"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={down ? "M7 1v12M2 8l5 5 5-5" : "M1 7h12M8 2l5 5-5 5"}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Recurring motif: four states joined by a line; the third — human
   validation — is a filled clay circle. `fill` is the surrounding surface. */
export function FlowMark({ fill = "var(--bone)" }: { fill?: string }) {
  return (
    <svg className="flow-mark" viewBox="0 0 64 12" aria-hidden="true">
      <line className="ln" x1="6" y1="6" x2="58" y2="6" />
      <rect className="st" x="1.5" y="1.5" width="9" height="9" fill={fill} />
      <rect className="st" x="19" y="1.5" width="9" height="9" fill={fill} />
      <circle className="hu" cx="41" cy="6" r="5" />
      <rect className="st" x="53.5" y="1.5" width="9" height="9" fill={fill} />
    </svg>
  );
}

/* Brand mark shared with web-app (public/favicon.svg there): a hexagonal
   frame split into three faces. Fills with currentColor; the seams take the
   colour of the surface so they read as gaps. */
export function LogoMark({ seam = "var(--bone)" }: { seam?: string }) {
  return (
    <svg viewBox="0 0 100 100" className="logo-mark" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M50 14 81.2 32v36L50 86 18.8 68V32Zm0 15.8L32.5 40v20L50 70.2 67.5 60V40Z"
      />
      <path
        fill="none"
        stroke={seam}
        strokeWidth="1.5"
        d="M18.8 32 32.5 40M81.2 32 67.5 40M50 86V70.2"
      />
    </svg>
  );
}
