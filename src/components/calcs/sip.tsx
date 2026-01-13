import { Result } from "@/components/common";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function SipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(20);

  const r = rate / 12 / 100;
  const n = years * 12;
  const invested = monthly * n;
  const total = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">SIP Calculator</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Monthly Investment (₹)</Label>
            <Input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(+e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Expected Return (%)</Label>
            <Input
              type="number"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Time Period (Years)</Label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Result label="Invested" value={invested} />
          <Result label="Returns" value={total - invested} />
          <Result label="Total Value" value={total} />
        </div>
      </CardContent>
    </Card>
  );
}
