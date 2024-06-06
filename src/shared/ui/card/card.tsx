"use client";
import * as React from "react";
import {ComponentPropsWithoutRef, ElementRef, ElementType, forwardRef, ReactNode} from "react";

import clsx from "clsx";
import {PolymorphComponentPropsWithRef} from "@/shared/types/polymorph";

type Props<T extends ElementType> = PolymorphComponentPropsWithRef<T, ComponentPropsWithoutRef<T>>

type CardComponent = <T extends ElementType = 'div'>(props: Props<T>) => ReactNode

// eslint-disable-next-line react/display-name
export const Card: CardComponent = forwardRef(
  <T extends ElementType = 'div'>(
    { asComponent, className, ...rest }: Props<T>,
    ref: ElementRef<T>
  ) => {
    const Component = asComponent || 'div'

    return (
      <Component
        {...rest}
        className={clsx(
          `shadow-shadow-Light-100 rounded-[2px] border-[1px] border-Dark-300 bg-Dark-500 shadow-sm`,
          className
        )}
        ref={ref}
      />
    )
  }
)

