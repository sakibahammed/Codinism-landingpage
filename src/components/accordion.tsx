"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import * as React from "react";

export interface AccordionItemType {
  value: string;
  number?: string;
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemType[];
}

const Accordion: React.FC<AccordionProps> = ({ items = [] }) => {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      className="w-full"
      defaultValue={items[0]?.value}
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger number={item.number}>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </AccordionPrimitive.Root>
  );
};

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={classNames(
      "border-b border-b-[#011228] data-[state=open]:border-b-primary  data-[state=open]:border-b-2",
      className,
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Item>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    number?: string;
  }
>(({ children, number, className, ...props }, ref) => (
  <AccordionPrimitive.Header>
    <AccordionPrimitive.Trigger
      ref={ref}
      {...props}
      className={classNames(
        "group w-full flex items-center justify-between py-5 cursor-pointer px-1 transition-all",
        "data-[state=open]:bg-[#0A1A2F]/20",
        className,
      )}
    >
      <div className="flex items-center gap-5">
        {/* Number bubble */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#001636]   text-lg text-primary">
          {number}
        </div>

        <span className="text-white text-xl font-medium">{children}</span>
      </div>

      <ChevronDownIcon className="w-6 h-6 text-white transition-transform duration-300 group-data-[state=open]:rotate-180" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    {...props}
    className={classNames(
      "overflow-hidden text-gray-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp",
      className,
    )}
  >
    <div className="px-20 pb-6 pt-1 text-base leading-relaxed">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = "AccordionContent";

export default Accordion;
