const Favicon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff" />
          <stop offset="50%" stop-color="#7d6ee4" />
          <stop offset="100%" stop-color="#9c91e0" />
        </radialGradient>
        <filter id="inset-shadow">
          <feComponentTransfer in="SourceAlpha">
            <feFuncA type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feGaussianBlur stdDeviation="3" />
          <feOffset dx="2" dy="0" result="offsetblur" />
          <feFlood flood-color="#7d6ee4" result="color1" />
          <feFlood flood-color="#9c91e0" result="color2" />
          <feComposite in2="offsetblur" operator="in" />
          <feMerge>
            <feMergeNode in="color1" />
            <feMergeNode in="color2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="outer-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="-1" dy="0" stdDeviation="5" flood-color="#7d6ee4" />
          <feDropShadow dx="1" dy="0" stdDeviation="5" flood-color="#9c91e0" />
          <feDropShadow stdDeviation="4" flood-color="#fff" />
        </filter>
      </defs>
      <circle
        cx="10"
        cy="10"
        r="10"
        fill="url(#gradient)"
        filter="url(#inset-shadow)"
      />
      <circle cx="10" cy="10" r="10" fill="none" filter="url(#outer-shadow)" />
    </svg>
  );
};

export default Favicon;
