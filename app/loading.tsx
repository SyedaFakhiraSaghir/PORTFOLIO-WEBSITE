import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="pt-16">
      <div className="section-container space-y-8 py-24">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-14 w-full max-w-xl" />
        <Skeleton className="h-6 w-full max-w-lg" />
        <div className="flex gap-3 pt-4">
          <Skeleton className="h-10 w-32 rounded-full" />
          <Skeleton className="h-10 w-40 rounded-full" />
        </div>
      </div>
      <div className="section-container grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-64 rounded-2xl" />
        ))}
      </div>
    </main>
  );
}
