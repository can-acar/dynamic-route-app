import useRouter from "src/lib/use-router";

const DefaultPage = (props) => {
  const router = useRouter()
  return (
      <div>
        <h1>Main Page</h1>
  
        <p>props detail:{JSON.stringify(props)}</p>
  
        <p>router detail:{JSON.stringify(router)}</p>
      </div>
  )
}

export default DefaultPage
