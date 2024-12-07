interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, className = '', children, ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={`text-white hover:text-blue-600 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}