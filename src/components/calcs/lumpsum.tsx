import { Result } from "@/components/common";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function LumpsumCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const total = amount * Math.pow(1 + rate / 100, years);
  const returns = total - amount;

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Lumpsum Calculator</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Investment Amount (₹)</Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
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
          <Result label="Invested" value={amount} />
          <Result label="Returns" value={returns} />
          <Result label="Total Value" value={total} />
        </div>
      </CardContent>
    </Card>
  );
}
