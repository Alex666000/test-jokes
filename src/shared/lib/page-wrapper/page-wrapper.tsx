import {ComponentPropsWithoutRef, CSSProperties} from "react";
import {ReturnComponent} from "@/shared/types/return-component";
import {HeadMeta} from "@/shared/lib/seo";

type Props = {
  description?: string
  favicon?: string
  paddingTop?: CSSProperties['paddingTop']
  padding?: CSSProperties['padding']
  title?: string
} & ComponentPropsWithoutRef<'section'>

export const PageWrapper = ({
  children,
  className,
  description,
  favicon,
  padding,
  paddingTop = '',
  style,
  title,
  ...rest
}: Props): ReturnComponent => {

  const styles: CSSProperties = {padding:padding, paddingTop: paddingTop, ...style }

  return (
    <main
      className={`w-full mx-auto block border-box `}
      style={styles}
      {...rest}
    >
      <section className={`w-full max-w-[1600px] mx-auto p-5 flex justify-center`}>
        <HeadMeta description={description} title={title} />
        {children}
      </section>
    </main>
  )
}
