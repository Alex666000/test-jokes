import { CSSProperties, ReactNode } from 'react'

import { clsx } from 'clsx'

type Props = {
  children?: ReactNode
  className?: string
  height?: number | string
  width?: number | string
}

export const Skeleton = (props: Props) => {
  const { className, height, width, ...rest } = props

  const styles: CSSProperties = {
    height,
    width,
  }

  return (
    <div
      {...rest}
      className={clsx(
        `opacity-1 relative w-full shadow-[0_7px_12px_1px_rgba(243,241,236,0.2)]
        before:absolute before:-left-[-150px] before:top-0 before:block before:h-full before:w-[80%]
        before:animate-pulse before:bg-gradient-to-r before:from-slate-100 before:to-slate-200 before:opacity-5`,
        className
      )}
      style={styles}
    />
  )
}
