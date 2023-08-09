import Feed from '@components/Feed'

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Quotes</span>
    </h1>
    <p className='desc text-center'>
      Explore wisdom, ignite minds: Unveil, connect, and inspire with Quotopia
      today!
    </p>

    <Feed />
  </section>
)

export default Home
