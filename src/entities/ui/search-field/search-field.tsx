import { ChangeEvent, ComponentPropsWithoutRef, useEffect, useRef } from 'react'

import { Nullable } from '@/shared/types/nullable'

import { JokesResponse } from '../../model/type/jokes'

type Props = {
  className?: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
  jokesData: Nullable<JokesResponse> | undefined
  placeholder?: string
  searchTerm: string
  type?: string
} & ComponentPropsWithoutRef<'input'>

export const SearchField = (props: Props) => {
  const {
    className,
    handleSearch,
    jokesData,
    placeholder = 'Search jokes...',
    searchTerm,
    type = 'text',
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div>
      <input
        {...rest}
        autoFocus
        className={`shadow-text-[#656ec2] mb-5 w-full max-w-[632px]
          border-none bg-transparent p-[20px_35px] text-xl shadow-[0_7px_12px_1px_rgba(99,99,110,0.2)] outline-none
          placeholder:text-[#656ec2]`}
        onChange={handleSearch}
        placeholder={placeholder}
        ref={inputRef}
        type={type}
        value={searchTerm}
      />
      {jokesData && inputRef.current?.value !== '' && searchTerm !== '' && (
        <span className={'mb-4 block pl-[40px]'}>{`Total count: ${jokesData.total}`}</span>
      )}
    </div>
  )
}
