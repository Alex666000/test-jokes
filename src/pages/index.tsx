import { Jokes } from '@/entities/ui'
import { PageWrapper } from '@/shared/lib/layouts'

// redux для тотал каунт

const HomePage = () => {
  return (
    <PageWrapper>
      <Jokes />
    </PageWrapper>
  )
}

export default HomePage
