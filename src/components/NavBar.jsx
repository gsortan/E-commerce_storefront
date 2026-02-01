import Link from "next/link";
import Profile from "@/components/ProfileDropdown";
import CartButton from "../app/(commerce)/cart/components/CartButton";
import Image from "next/image";
import shopBanner from "../../public/ShopLocal.png";
import SearchBar from "./SearchBar";


export default async function NavBar({ user }) {

  return (
    <>
      <div className="p-2 h-20 gap-3 flex justify-between  items-center bg-[#232f3e] shadow-md ">
        <Link href="/shop" className="h-full shrink-0">
          <Image
            src={shopBanner}
            alt="shop local"
            width={160}
            height={60}
            className="h-full w-auto object-contain"
            priority
          />
        </Link>

      <SearchBar/>

        <div className="flex items-center gap-4">
          <CartButton />
          <Profile user={user} />
        </div>
      </div>
    </>
  );
}
