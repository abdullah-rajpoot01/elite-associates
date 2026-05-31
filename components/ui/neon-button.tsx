import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const ButtonNeon = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => (
  <Button
    className={cn(
      "border-primary/90 bg-primary/90 text-primary-foreground shadow-indigo-400/70 shadow-lg hover:bg-primary dark:text-foreground dark:shadow-primary",
      className
    )}
    {...props}
  />
)
export default ButtonNeon ;