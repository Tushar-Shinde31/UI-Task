import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 relative overflow-hidden", className)}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
