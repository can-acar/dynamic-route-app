import useRouter from "src/lib/use-router";

const BlogPostPage = (props) => {
 
  const router = useRouter();
  
  
  return (
      <div>
        <h1>Blog Post</h1>
        <p>Post detail:{JSON.stringify(props)}</p>
        <p>Router detail:{JSON.stringify(router)}</p>
      </div>
  );
}
export default BlogPostPage
