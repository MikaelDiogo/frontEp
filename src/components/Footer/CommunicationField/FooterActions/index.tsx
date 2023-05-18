interface LinkProps{
  href: string;
  icon: React.ReactNode;
  text?: string;
  id?: string;
}

export function FooterActions({icon, text, id, href}: LinkProps) {
  return(
    <a href={href} target="_blank" id={id}>
    {icon}
    <span>{text}</span>
  </a>
  )
}