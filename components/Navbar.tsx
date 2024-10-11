"use client";
import Image from "next/image";
import logo from "../public/images/logo.png";
import { movingServices, navbar, popularCitiesUAE } from "./data";
import Link from "next/link";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import {
  IconArrowDown,
  IconCircleArrowDownFilled,
  IconMenu4,
  IconPhoneCall,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
function Navbar() {
  const pathname = usePathname();
  const [serSub, setSerSub] = useState(false);
  const [are, setAre] = useState(false);
  const [side, setSide] = useState(false);

  return (
    <>
      <header
        dir="ltr"
        className="bg-white/95 py-1 shadow-lg shadow-neutral-100 fixed top-0 left-0 w-full flex justify-center z-40"
      >
        <nav className="w-full  rounded-2xl p-2 md:w-11/12 flex justify-between items-center">
          <div className="md:w-40 w-32 md:h-16 h-12 relative">
            <Image
              alt="Company Logo"
              src={logo}
              loading="eager"
              aria-label="Company Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="md:block hidden">
            {navbar.map((item, i) => (
              <Link
                key={i}
                className={`pt-3 pb-4 px-4 text-xl rounded-3xl mx-1 hover:bg-neutral-50 ${
                  pathname === item.link
                    ? "bg-white shadow-md shadow-neutral-200/50"
                    : ""
                }`}
                aria-label={item.name}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Button variant="outline" className="md:block hidden">
            Contact Now
          </Button>

          <div className="md:hidden flex gap-x-3">
            <div className="h-[46.5px]  bg-white w-20 border border-[#6e9d31] rounded-3xl px-2 flex items-center justify-between">
              <IconPhoneCall className="b" />
              <IconCircleArrowDownFilled className="w-6 h-6 l" />
            </div>
            <Button onClick={() => setSide(true)} size="icon">
              <IconMenu4 />
            </Button>
          </div>
        </nav>
      </header>
      {side && (
        <div className="ani no-scroll fixed h-full overflow-y-auto bg-white/80  backdrop-blur-md w-3/4 z-50 top-0 right-0 shadow-2xl shadow-neutral-200 rounded-e-[50px] px-4 pb-5 ">
          <Button
            onClick={() => setSide(!side)}
            className="absolute top-4 right-3"
            size="icon"
          >
            <IconX />
          </Button>
          <div className="mt-24">
            {navbar.map((item, i) => (
              <div
                key={i}
                className="block bg-neutral-50 p-3 my-2 rounded-lg relative"
              >
                <Link href={item.link}> {item.name}</Link>
                {item?.sub && i === 2 ? (
                  <IconArrowDown
                    onClick={() => setSerSub(!serSub)}
                    strokeWidth={0.5}
                    className={`absolute left-3 transition-transform top-1 w-9 h-9 gr px-2 ${
                      serSub ? "rotate-180" : ""
                    }`}
                  />
                ) : null}
                {item?.sub && i === 3 ? (
                  <IconArrowDown
                    onClick={() => setAre(!are)}
                    strokeWidth={0.5}
                    className={`absolute left-3 top-1 w-9  h-9 gr px-2 transition-transform ${
                      are ? "rotate-180" : ""
                    }`}
                  />
                ) : null}
                {serSub && i === 2
                  ? movingServices.map((service, i) => (
                      <Link
                        key={i}
                        className="block bg-neutral-50 p-3 my-2 rounded-xl"
                        href={service.link}
                      >
                        {service.name}
                      </Link>
                    ))
                  : null}
                {are && i === 3
                  ? popularCitiesUAE.map((city, i) => (
                      <Link
                        key={i}
                        className="block bg-neutral-50 p-3 my-2 rounded-xl"
                        href={city.link}
                      >
                        {city.name}
                      </Link>
                    ))
                  : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
