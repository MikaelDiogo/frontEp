interface TextProps {
  text: string;
  link: string
}

interface ColContentProps {
  texts: TextProps[];
}

import { Link } from 'react-router-dom';
import './styles.css'

export function ColContent({ texts }: ColContentProps) {
  return (
    <div className="arrayTexts">
      {texts.map((text) => <Link to={text.link}>{text.text}</Link>)}
    </div>
  )
}