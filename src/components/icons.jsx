// Small stroke icons, 24px grid. Color comes from `currentColor`.
function Icon({ className = 'size-5', children, strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      {children}
    </svg>
  )
}

export const CheckIcon = (p) => (
  <Icon strokeWidth={2.2} {...p}>
    <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
  </Icon>
)

export const XIcon = (p) => (
  <Icon strokeWidth={2} {...p}>
    <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />
  </Icon>
)

export const ArrowIcon = (p) => (
  <Icon strokeWidth={2} {...p}>
    <path d="M4.5 12h14.5M13.5 6l6 6-6 6" />
  </Icon>
)

export const PhoneIcon = (p) => (
  <Icon {...p}>
    <path d="M5.2 3.5h3.3l1.6 4.3-2.3 1.6a11.8 11.8 0 0 0 6.8 6.8l1.6-2.3 4.3 1.6v3.3a2 2 0 0 1-2.1 2A16.6 16.6 0 0 1 3.2 5.6a2 2 0 0 1 2-2.1z" />
  </Icon>
)

export const PinIcon = (p) => (
  <Icon {...p}>
    <path d="M12 21.5s-7-6.1-7-11.6a7 7 0 0 1 14 0c0 5.5-7 11.6-7 11.6z" />
    <circle cx="12" cy="9.9" r="2.6" />
  </Icon>
)

export const MessageIcon = (p) => (
  <Icon {...p}>
    <path d="M4.5 5.5h15a1 1 0 0 1 1 1v9.5a1 1 0 0 1-1 1H10l-4.6 3.6v-3.6H4.5a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1z" />
  </Icon>
)

export const DeviceIcon = (p) => (
  <Icon {...p}>
    <rect x="6.5" y="2.5" width="11" height="19" rx="2.2" />
    <path d="M10.5 18.5h3" />
  </Icon>
)

export const PlusIcon = (p) => (
  <Icon strokeWidth={2} {...p}>
    <path d="M12 5.5v13M5.5 12h13" />
  </Icon>
)
