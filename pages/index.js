import Head from 'next/head'
import { useQuery } from 'react-query'
import { getHomepagePosts } from '../queries/queries'
import PostCard from '../components/PostCard'

const Home = () => {
  const {
    status,
    data: posts,
    error,
    isFetching,
    isSuccess,
  } = useQuery('posts', async () => await getHomepagePosts())

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        {isSuccess &&
          posts.map((post) => (
            <PostCard
              title={post.title}
              body={post.body}
              key={post.id}
              image={post.featured_image.id}
            />
          ))}
      </main>
    </div>
  )
}

export default Home
