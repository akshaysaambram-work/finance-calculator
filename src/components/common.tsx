import { formatCurrency } from "@/lib/utils";

export function Result({
  label,
  value,
}: Readonly<{ label: string; value: number }>) {
  return (
    <div className="rounded-md bg-muted p-4">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-xl font-bold">₹ {formatCurrency(value)}</p>
    </div>
  );
}
