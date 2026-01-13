import { Result } from "@/components/common";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function RdCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);

  const n = years * 12;
  const r = rate / 100 / 12;
  const invested = monthly * n;
  const total = monthly * n + (monthly * n * (n + 1) * r) / 2;

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">RD Calculator</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Monthly Deposit (₹)</Label>
            <Input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(+e.target.value)}
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

        <div className="grid md:grid-cols-3 gap-4">
          <Result label="Invested" value={invested} />
          <Result label="Interest" value={total - invested} />
          <Result label="Maturity Amount" value={total} />
        </div>
      </CardContent>
    </Card>
  );
}
