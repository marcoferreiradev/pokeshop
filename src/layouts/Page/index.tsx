import Header from '../Header'

type PageProps = {
  children: React.ReactNode
}

const Page = ({ children }: PageProps) => {
  return (
    <section className='main'>
      <Header />
      {children}
    </section>
  )
}

export default Page