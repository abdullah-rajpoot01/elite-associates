import { ArrowUpRightIcon, Search } from "lucide-react"

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

export function EmptyCategory() {
  return (
    <Empty className="min-h-[80vh] bg-secondar">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Search />
        </EmptyMedia>
        <EmptyTitle className="capitalize">No Listing found in This Category Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Link href={"/categories"} className="hover:animate-tada hover:animate-iteration-count-once"> <Button>Back to Categories</Button></Link>
        <Link href={"/"} className="hover:animate-tada hover:animate-iteration-count-once">  <Button variant="outline">Home</Button></Link>
      </EmptyContent>
    </Empty>
  )
}
