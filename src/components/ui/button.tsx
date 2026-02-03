import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow-lg",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-[#3EA6DE] to-[#272A6B] text-white hover:from-[#4eb8f0] hover:to-[#323580] shadow-[0_4px_14px_0_rgba(39,42,107,0.39)]",
        destructive:
          "bg-gradient-to-b from-red-500 to-red-700 text-white shadow-sm hover:from-red-400 hover:to-red-600",
        outline:
          "border-2 border-white bg-transparent text-white shadow-sm hover:bg-white/10",
        secondary:
          "bg-gradient-to-b from-[#3EA6DE] to-[#5ab5e8] text-white shadow-sm hover:from-[#4eb8f0] hover:to-[#6cc2f0]",
        ghost: "hover:bg-accent hover:text-accent-foreground shadow-none",
        link: "text-primary underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
