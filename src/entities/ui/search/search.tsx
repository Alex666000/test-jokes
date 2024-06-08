import { ChangeEvent, forwardRef } from 'react'

import { JokesResponse } from '@/entities/model/type/jokes'
import { SearchField } from '@/entities/ui/search-field/search-field'
import { SearchJokesList } from '@/entities/ui/search-jokes-list/search-jokes-list'
import { Nullable } from '@/shared/types/nullable'
import { Flex } from '@/shared/ui/flex'

type Props = {
  data: Nullable<JokesResponse> | undefined
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
  isSuccess: boolean
  searchTerm: string
}

export const Search = forwardRef<HTMLInputElement, Props>(
  ({ data, handleSearch, isSuccess, searchTerm }, ref) => {
    return (
      <Flex direction={'column'} ref={ref}>
        <div className={'m-[128px_auto_60px] flex w-[50%] flex-col'}>
          <SearchField handleSearch={handleSearch} jokesData={data} searchTerm={searchTerm} />
        </div>
        {isSuccess && <SearchJokesList jokesData={data} />}
      </Flex>
    )
  }
)
Search.displayName = 'Search'
