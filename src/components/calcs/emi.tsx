import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatCurrency } from "@/lib/utils";
import { useState } from "react";

export function EmiCalculator() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(9);
  const [years, setYears] = useState(20);

  const r = rate / 12 / 100;
  const n = years * 12;
  const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">EMI Calculator</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Loan Amount (₹)</Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Interest Rate (%)</Label>
            <Input
              type="number"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Tenure (Years)</Label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
            />
          </div>
        </div>

        <div className="rounded-md bg-muted p-4">
          <p className="text-sm text-muted-foreground">Monthly EMI</p>
          <p className="text-2xl font-bold">₹ {formatCurrency(emi)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
