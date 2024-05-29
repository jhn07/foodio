"use client";


import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createReservation } from "@/action/user.action";
import { useRef } from "react";

export default function ReservationForm({ today }: { today: string }) {
  const formRef = useRef<HTMLFormElement | null>(null)
  return (
    <form ref={formRef} action={async (formData: FormData) => {
      await createReservation(formData)
      formRef?.current?.reset()
    }}>
      <CardHeader>
        <CardTitle>Reservation</CardTitle>
        <CardDescription>Reservation you</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="nameInp" className="font-medium text-sm">Name</label>
          <Input id="nameInp" type="text" name="name" placeholder="write your name"
            className="h-11 placeholder:text-[13.5px]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="emailInp" className="font-medium text-sm">Email</label>
          <Input id="emailInp" type="email" name="email" placeholder="write your email" required
            className="h-11 placeholder:text-[13.5px]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phonelInp" className="font-medium text-sm">Phone</label>
          <Input id="phoneInp" type="tel" name="phone" placeholder="write your phone" required
            className="h-11 placeholder:text-[13.5px]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="dateInp" className="font-medium text-sm">Date</label>
          <Input id="dateInp" type="date" min={today} name="date" placeholder="choose date"
            className="h-11 placeholder:text-[13.5px]"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit" variant="login">
          Reservation
        </Button>
      </CardFooter>
    </form>
  )
}