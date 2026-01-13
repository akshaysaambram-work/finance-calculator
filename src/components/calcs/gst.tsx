import { Result } from "@/components/common";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function GstCalculator() {
  const [amount, setAmount] = useState(10000);
  const [rate, setRate] = useState(18);

  const gst = (amount * rate) / 100;
  const total = amount + gst;

  return (
    <Card>
      <CardContent className="space-y-4 pt-6">
        <h2 className="text-xl font-semibold">GST Calculator</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Base Amount (₹)</Label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(+e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>GST Rate (%)</Label>
            <Input
              type="number"
              value={rate}
              onChange={(e) => setRate(+e.target.value)}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Result label="GST Amount" value={gst} />
          <Result label="CGST" value={gst / 2} />
          <Result label="SGST" value={gst / 2} />
        </div>

        <div className="rounded-md bg-muted p-4">
          <p className="text-sm text-muted-foreground">Total Amount</p>
          <p className="text-2xl font-bold">₹ {total.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
}
