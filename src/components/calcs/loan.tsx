import { Result } from "@/components/common";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function LoanCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [interest, setInterest] = useState(10);

  const interestAmount = (principal * interest) / 100;
  const totalPayable = principal + interestAmount;

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">Loan Calculator</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Principal (₹)</Label>
            <Input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(+e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Interest (%)</Label>
            <Input
              type="number"
              value={interest}
              onChange={(e) => setInterest(+e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Result label="Interest Amount" value={interestAmount} />
          <Result label="Total Payable" value={totalPayable} />
        </div>
      </CardContent>
    </Card>
  );
}
