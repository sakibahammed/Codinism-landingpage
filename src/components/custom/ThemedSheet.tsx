import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

type ThemedSheetProps = {
  /** Sheet Title */
  title?: string;
  /** Optional description under the title */
  description?: string;
  /** Main content inside the sheet */
  children?: ReactNode;
  /** Footer content (e.g. buttons). If not provided, default Close button is used */
  footer?: ReactNode;
  /** Optional className for SheetContent */
  contentClassName?: string;
} & React.ComponentProps<typeof Sheet>;

export function ThemedSheet({
  title = "example title",
  description,
  children,
  footer,
  contentClassName,
  ...props
}: ThemedSheetProps) {
  return (
    <Sheet {...props}>
      <SheetContent className={contentClassName}>
        {(title || description) && (
          <SheetHeader className="bg-primary/10">
            {title && <SheetTitle>{title}</SheetTitle>}
            {description && <SheetDescription>{description}</SheetDescription>}
          </SheetHeader>
        )}

        {children && <div className="flex-1 grid auto-rows-min gap-6 px-4 mt-4">{children}</div>}

        <SheetFooter>
          {footer ? (
            footer
          ) : (
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
