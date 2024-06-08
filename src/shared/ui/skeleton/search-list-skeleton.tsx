import { Flex } from '../flex'
import { Skeleton } from './skeleton'

export const SearchJokesListSkeleton = () => {
  return (
    <Flex>
      <Skeleton className={'mt-[310px]'} height={260} width={622} />
      <Skeleton className={'mt-[310px]'} height={260} width={622} />
    </Flex>
  )
}
