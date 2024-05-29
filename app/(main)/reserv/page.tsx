import Image from "next/image";
import { Card } from "@/components/ui/card";
import ReservationForm from "@/components/reservation-form";

export default function ReservationPage() {
  const today = new Date().toISOString().split("T")[0]
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
      <div className="min-h-[75vh] grid grid-cols-1 p-2 md:grid-cols-2">
        <div className="relative">
          <Image src="/img/img_illustration.png" alt="reserv" fill />
        </div>
        <Card className="shadow-md">
          <ReservationForm today={today} />
        </Card>
      </div>
    </div>
  )
}

