import useRouter from "src/lib/use-router";

const UsePage = (props) => {
  
  const router = useRouter();
  
  
  return (
      <div>
        <h1>User Page</h1>
        <p>props detail:{JSON.stringify(props)}</p>
  
        <p>router detail:{JSON.stringify(router)}</p>
      </div>
  );
}
export default UsePage
