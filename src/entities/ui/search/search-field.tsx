import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useRef } from 'react'

import { Nullable } from '@/shared/types/nullable'

import { JokesResponse } from '../../model/type/jokes'

type Props = {
  className?: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
  jokesData: Nullable<JokesResponse> | undefined
  searchTerm: string
} & ComponentPropsWithoutRef<'input'>

export const SearchField = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, handleSearch, jokesData, searchTerm, ...rest } = props
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <input
        {...rest}
        autoFocus
        className={className}
        onChange={handleSearch}
        placeholder={'Search jokes...'}
        ref={inputRef}
        type={'text'}
        value={searchTerm}
      />
      {jokesData && inputRef.current?.value !== '' && searchTerm !== '' && (
        <span className={'mb-4 block pl-[40px]'}>{`Total count: ${jokesData.total}`}</span>
      )}
    </div>
  )
})

SearchField.displayName = 'SearchField'
