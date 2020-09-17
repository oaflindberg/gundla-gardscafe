import { PaperItem } from './Style'

interface MenuItemProps {
  title: String
  description: String
}

export default function MenuItem({ title, description }: MenuItemProps) {
  return (
    <PaperItem>
      <h1>{title}</h1>
      <p>{description}</p>
    </PaperItem>
  )
}
