import Link from 'next/link'
import { slug } from 'github-slugger'
import { convertToCroatian, convertToLatin } from 'utils/tagConverter'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(convertToLatin(text))}`}
      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mr-3 text-sm font-medium uppercase"
    >
      {convertToCroatian(text.split(' ').join('-'))}
    </Link>
  )
}

export default Tag
