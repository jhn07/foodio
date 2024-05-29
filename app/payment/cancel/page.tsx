import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="h-screen max-w-7xl mx-auto flex flex-col items-center justify-center">
      <Card className="w-full min-h-[50vh] shadow-md">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-medium text-red-400">Somthing went wrong</h1>
          <Button variant="link" asChild>
            <Link href="/menu">Go back home</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}
