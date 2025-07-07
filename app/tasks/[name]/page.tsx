

const page = ({ params }: { params: { name: string } }) => {
  const { name } = params

  return <div>tasks by {name}</div>
}

export default page

