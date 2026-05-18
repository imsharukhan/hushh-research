import { SearchX, TableIcon } from "lucide-react"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
} from "@/components/ui/empty"
import { cn } from "@/lib/utils"

interface DataTableEmptyStateProps {
  isFiltered?: boolean
  title?: string
  description?: string
  className?: string
}

export function DataTableEmptyState({
  isFiltered = false,
  title,
  description,
  className,
}: DataTableEmptyStateProps) {
  const resolvedTitle =
    title ?? (isFiltered ? "No matching results" : "No data yet")

  const resolvedDescription =
    description ??
    (isFiltered
      ? "Try adjusting your search or filter to find what you're looking for."
      : "Data will appear here once it becomes available.")

  return (
    <Empty className={cn("border-none py-8 sm:py-10", className)}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          {isFiltered ? <SearchX /> : <TableIcon />}
        </EmptyMedia>
        <EmptyTitle>{resolvedTitle}</EmptyTitle>
        <EmptyDescription>{resolvedDescription}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}