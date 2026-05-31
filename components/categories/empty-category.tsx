import { LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import Link from "next/link"

interface EmptyStateProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  primaryBtnTxt: string;
  primaryBtnUrl: string;
  secondaryBtnTxt: string;
  secondaryBtnUrl: string;

}
export function EmptyCategory({ Icon, title, description, primaryBtnTxt, primaryBtnUrl, secondaryBtnTxt, secondaryBtnUrl }: EmptyStateProps) {
  return (
    <Empty className="min-h-[80vh] bg-secondar">
      <EmptyHeader>
        <EmptyMedia className=" p-3 bg-accent rounded-md" >
          <Icon className="size-7" />
        </EmptyMedia>
        <EmptyTitle className="capitalize text-xl">{title}</EmptyTitle>
        <EmptyDescription className="text-lg">
          {description}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Link href={primaryBtnUrl} className="hover:animate-tada hover:animate-iteration-count-once"> <Button>{primaryBtnTxt}</Button></Link>
        <Link href={secondaryBtnUrl} className="hover:animate-tada hover:animate-iteration-count-once">  <Button variant="outline">{secondaryBtnTxt}</Button></Link>
      </EmptyContent>
    </Empty>
  )
}
