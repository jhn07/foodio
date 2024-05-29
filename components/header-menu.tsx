import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { NavItem } from "./nav-item"


export const HeaderMenu = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/img/img_header_logo.svg"}
            alt="logo"
            height={110}
            width={110}
          />
        </Link>

        <NavItem />

        {/* <div className="flex items-center gap-4">
          <Button size="lg" variant="login">Login</Button>
        </div> */}
      </div>
    </div>
  )
}



