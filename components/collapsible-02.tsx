"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface ShowMoreCollapsibleProps {
  description?: string;
  maxLines?: number; // Optional: allows customizing max lines, defaults to 3
}

export default function ShowMoreCollapsible({
  description,
  maxLines = 3
}: ShowMoreCollapsibleProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  if (!description) return null;
  return (
    <Collapsible
      className="w-full space-y-2"
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <CollapsibleContent
        className="space-y-2 data-[state=closed]:hidden"
        forceMount
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {description}
        </p>
      </CollapsibleContent>

      <CollapsibleContent
        className="space-y-2 data-[state=open]:hidden"
        forceMount
      >
        <p
          className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: maxLines,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {description}
        </p>
      </CollapsibleContent>

      {/* Only show buttons if description is long enough to need truncation */}
      {description.split(/\s+/).length > (maxLines * 15) && (
        <>
          <CollapsibleTrigger asChild>
            <Button
              className="mt-2 data-[state=open]:hidden"
              size="sm"
              variant="outline"
            >
              Show more <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleTrigger asChild>
            <Button
              className="mt-2 hidden data-[state=open]:inline-flex"
              size="sm"
              variant="outline"
            >
              Show less <ChevronUp className="ml-1 h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
        </>
      )}
    </Collapsible>
  );
}