import {ComponentPropsWithoutRef, CSSProperties} from "react";
import {ReturnComponent} from "@/shared/types/return-component";
import {HeadMeta} from "@/shared/lib/seo";

type Props = {
  description?: string
  favicon?: string
  paddingTop?: CSSProperties["paddingTop"]
  padding?: CSSProperties["padding"]
  title?: string
} & ComponentPropsWithoutRef<"section">

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

  const styles: CSSProperties = {padding: padding, paddingTop: paddingTop, ...style};

  return (

    <section className={`w-full max-w-[1600px] mx-auto p-5 justify-center block border-box`}
             style={styles} {...rest}>
      <HeadMeta description={description} title={title}/>
      {children}
    </section>
  );
};
