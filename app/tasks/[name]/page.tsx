

const page = ({params}) => {

    const {name}=params
  return (
    <div>tasks by {name}</div>
  )
}

export default page