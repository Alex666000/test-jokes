import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import { HeadMeta } from '@/shared/lib/seo'
import { ReturnComponent } from '@/shared/types/return-component'

type Props = {
  description?: string
  favicon?: string
  padding?: CSSProperties['padding']
  paddingTop?: CSSProperties['paddingTop']
  title?: string
} & ComponentPropsWithoutRef<'section'>

export const PageWrapper = ({
  children,
  className,
  description,
  favicon,
  padding,
  paddingTop,
  style,
  title,
  ...rest
}: Props): ReturnComponent => {
  const styles: CSSProperties = { padding: padding, paddingTop: paddingTop, ...style }

  return (
    <section
      className={`border-box mx-auto block w-full max-w-[1600px] justify-center p-5`}
      style={styles}
      {...rest}
    >
      <HeadMeta description={description} title={title} />
      {children}
    </section>
  )
}
