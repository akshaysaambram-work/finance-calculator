import { Result } from "@/components/common";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function FdCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);

  const total = principal * Math.pow(1 + rate / 100, years);
  const interest = total - principal;

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">FD Calculator</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Deposit Amount (₹)</Label>
            <Input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(+e.target.value)}
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

        <div className="grid md:grid-cols-2 gap-4">
          <Result label="Interest Earned" value={interest} />
          <Result label="Maturity Amount" value={total} />
        </div>
      </CardContent>
    </Card>
  );
}
