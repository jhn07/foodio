import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { PopularMenu } from "@/components/popular-menu"

export default function Home() {
  return (
    <div className="flex flex-col gap-32 bg-gray-50 py-10">
      <section className="w-full max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="flex flex-col items-center gap-y-5 justify-center">
            <h1 className="max-w-[400px] text-5xl font-bold leading-tight">
              Best Restaurant
              In <span className="text-red-500/95">Town.</span>
            </h1>
            <p className="max-w-[400px] text-xl text-primary/85 font-normal">
              We provide best food in town, we provide home delivery and dine in services.
            </p>
            <div className="flex items-center gap-5 mt-5">
              <Button size="lg" className="rounded-lg bg-red-400 hover:bg-red-500" asChild>
                <Link href="/menu">Order now</Link>
              </Button>
              <Button size="lg" className="bg-black/85 hover:bg-black" asChild>
                <Link href="/reserv">Reservation</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/img/img_illustration.png"
            alt="food"
            height={1000}
            width={1000}
            className="object-cover scale-95 rounded-lg md:scale-100"
          />
        </div>
      </section>
      <section className="p-4 bg-[rgba(237,241,237,1)]">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <Image
              src="/img/img_kindpng_3443995.png"
              alt="food"
              height={500}
              width={500}
              className="object-cover scale-85 rounded-lg md:scale-100"
            />
            <div className="flex flex-col gap-y-5 justify-center">
              <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl font-bold">
                  Our Most Popular{" "}
                  <span className="text-red-500">Dish.</span>
                </h1>
                <p className="text-xl text-primary/85">
                  This dish is full of flavor and nutrition! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.
                </p>
                <Button size="lg" className="rounded-lg bg-red-400 hover:bg-red-500" asChild>
                  <Link href="/menu">
                    Order now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl mx-auto py-4">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold">Our Popular Menu</h1>
        </div>
        <PopularMenu />
      </section>
    </div>
  )
}
