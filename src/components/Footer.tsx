import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-6 md:px-8">
      <Separator className="bg-k-border" />
      <div className="flex flex-col items-center gap-1 py-10 text-center text-[13px] text-k-muted">
        <p>
          Kollaborate{" "}
          <span className="mx-1">&middot;</span> Montreal, QC
        </p>
        <p>yosef@kollaborate.ca</p>
        <p>&copy; 2026 Kollaborate</p>
      </div>
    </footer>
  );
}
