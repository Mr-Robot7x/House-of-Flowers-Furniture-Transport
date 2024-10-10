"use client";
import Image from "next/image";
import hero from "../../public/images/main-hero-image.jpg";
import { Button } from "../Button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconCode } from "@tabler/icons-react";
function HeroSection() {
  const [message, setMessage] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className=" grid md:grid-cols-2 grid-cols-1 w-full md:gap-x-4 gap-y-6 mt-28 justify-center items-center">
      {message && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-80 h-80 bg-white rounded-3xl flex items-center justify-center flex-col gap-y-4 drop-shadow-2xl">
          <Button size="icon">
            <IconCode />
          </Button>
          <h3>التطبيق قيد التطوير</h3>
          <Button
            onClick={() => setMessage(false)}
            variant="outline"
            className="mt-6"
          >
            حسنًا
          </Button>
        </div>
      )}
      <div className="md:px-12 md:mr-10">
        <h1>
          شرکة بيت من الزهور
          <br /> نقل اثاث
        </h1>
        <h3 className="mt-5 l">موفرين نقل موثوقين تعبئة وتفريغ احترافية</h3>
        <p className="mt-3">
          هل تبحث عن نقل دون ضغوط؟ يوفر فريقنا الماهر التعبئة الموثوقة والتنقل
          الفعال بأسعار تنافسية. اتصل بنا للحصول على عرض أسعار مجاني.
        </p>
        <div className="mt-6 flex gap-x-3">
          <Button>
            <Link href={"tel:0509699083"}>اتصل الآن 0509699083</Link>
          </Button>
          <Button className="" variant="secondary">
            <Link aria-label="Our Services" href={"/services"}>
              خدماتنا
            </Link>
          </Button>
        </div>
      </div>
      <div className="md:min-h-[500px] min-h-96 w-full relative overflow-hidden">
        <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-10">
          <span className="absolute bottom-4 right-4 text-white ts text-3xl">
            شركة نقل أثاث احترافية <br />
            منذ عام 2015{" "}
          </span>
        </div>
        <Image
          src={hero}
          alt="Rose Furniture Mover"
          fill
          className="object-cover object-center"
          loading="eager"
          priority={true}
        />
      </div>
    </section>
  );
}

export default HeroSection;
