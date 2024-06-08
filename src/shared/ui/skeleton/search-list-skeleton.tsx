import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

export const SearchJokesListSkeleton = () => {
  return (
    <div className={`flex`}>
      <Skeleton className={'mt-[310px]'} height={260} width={622} />
      <Skeleton className={'mt-[310px]'} height={260} width={622} />
    </div>
  )
}
