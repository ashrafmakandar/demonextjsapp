import { FC } from 'react'

interface PageProps {
  params: {
    name: string
  }
}

const Page: FC<PageProps> = ({ params }) => {
  const { name } = params

  return <div>Tasks by {name}</div>
}

export default Page
