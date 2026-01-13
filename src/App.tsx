import { EmiCalculator } from "@/components/calcs/emi";
import { FdCalculator } from "@/components/calcs/fd";
import { GstCalculator } from "@/components/calcs/gst";
import { LoanCalculator } from "@/components/calcs/loan";
import { LumpsumCalculator } from "@/components/calcs/lumpsum";
import { RdCalculator } from "@/components/calcs/rd";
import { SipCalculator } from "@/components/calcs/sip";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  return (
    <div className="min-h-screen flex flex-col px-12">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b bg-background">
        <div className="flex items-center justify-between p-4 mx-auto">
          <h1 className="text-2xl font-semibold">Finance Calculator</h1>
          <Button variant="outline">Buy me a coffee</Button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 mx-auto container w-full p-4">
        <Tabs defaultValue="emi" className="w-full">
          <TabsList className="grid grid-cols-7 w-full">
            <TabsTrigger value="emi">EMI</TabsTrigger>
            <TabsTrigger value="sip">SIP</TabsTrigger>
            <TabsTrigger value="loan">Loan</TabsTrigger>
            <TabsTrigger value="gst">GST</TabsTrigger>
            <TabsTrigger value="fd">FD</TabsTrigger>
            <TabsTrigger value="rd">RD</TabsTrigger>
            <TabsTrigger value="lumpsum">Lumpsum</TabsTrigger>
          </TabsList>

          <TabsContent value="emi" className="mt-6">
            <EmiCalculator />
          </TabsContent>
          <TabsContent value="sip" className="mt-6">
            <SipCalculator />
          </TabsContent>
          <TabsContent value="loan" className="mt-6">
            <LoanCalculator />
          </TabsContent>
          <TabsContent value="gst" className="mt-6">
            <GstCalculator />
          </TabsContent>
          <TabsContent value="fd" className="mt-6">
            <FdCalculator />
          </TabsContent>
          <TabsContent value="rd" className="mt-6">
            <RdCalculator />
          </TabsContent>
          <TabsContent value="lumpsum" className="mt-6">
            <LumpsumCalculator />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t text-center py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Finance Calculator
      </footer>
    </div>
  );
}

export default App;
