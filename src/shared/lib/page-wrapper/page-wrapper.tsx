import {ComponentPropsWithoutRef, CSSProperties} from "react";
import {ReturnComponent} from "@/shared/types/return-component";
import {HeadMeta} from "@/shared/lib/seo";


type Props = {
  description?: string
  favicon?: string
  paddingTop?: CSSProperties['paddingTop']
  title?: string
} & ComponentPropsWithoutRef<'section'>

export const PageWrapper = ({
  children,
  className,
  description,
  favicon,
  paddingTop = '24px',
  style,
  title,
  ...rest
}: Props): ReturnComponent => {

  const styles: CSSProperties = { paddingTop: paddingTop, ...style }

  return (
    <section
      className={`flex justify-center max-w-[1280px] mx-auto min-h-full w-full focus-visible:outline-none`}
      style={styles}
      {...rest}
    >
      <HeadMeta description={description} title={title} />
      {children}
    </section>
  )
}
