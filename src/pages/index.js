import Layout from "../components/Layout";
import Feed from "../components/Feed";
import Suggestions from "../components/Suggestions";

function Index({posts, suggestions}){
  return <Layout>
    <Feed posts={posts} />
    <Suggestions suggestions={suggestions} />
  </Layout>
}

export async function getServerSideProps(context) {

  var res = await fetch(`http://localhost:3001/posts`)
  const posts = await res.json()

  var res = await fetch(`http://localhost:3001/suggestions`)
  const suggestions = await res.json();

  return { props: { posts, suggestions } }
}

export default Index;