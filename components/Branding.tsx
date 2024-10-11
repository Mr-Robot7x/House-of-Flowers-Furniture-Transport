import Image from "next/image";
import professional from "../public/images/professionals.png";
import pricing from "../public/images/affordable-pricing.png";
import booking from "../public/images/booking.png";
import years from "../public/images/ten-years.png";
import brand from "../public/images/branding-image.jpg";
import moves from "../public/images/moves.png";
function Branding() {
  return (
    <section className="md:mt-20 mt-0 w-full grid md:grid-cols-3 grid-cols-1 md:gap-x-1 gap-y-8 md:px-28">
      <div className="min-80 col-span-1 relative md:order-1 order-2">
        <div className="w-full h-[530px] relative bg-gray-200">
          <Image
            src={brand}
            alt="branding image"
            className="object-cover"
            fill
            placeholder="blur"
          />
        </div>
        <div className="md:w-[370px] w-full bg-white shadow-lg shadow-neutral-100 rounded-2xl p-3 absolute md:bottom-0 -bottom-6 md:left-[1.2px]">
          <div className="relative w-16 h-16 bg-neutral-50 rounded-full mb-2">
            <Image alt="icon" src={moves} fill className="object-contain p-3" />
          </div>
          <h3>أكثر من 850 حركة مكتملة</h3>
          <p className="text-xl gr mt-2">
            خبراء ذوي خبرة محترفون في مجالهم، يقدمون خدمات عالية الجودة
          </p>
        </div>
      </div>
      <div className="min-80 pt-14 col-span-2 md:px-5  md:order-2 order-1">
        <p>لماذا تختارنا؟</p>
        <h2>شركتنا هي الأفضل في نقل الأثاث بالإمارات</h2>
        <p className="mt-5">
          لا تهدر وقتك الثمين في نقل بيتك. انقل مسؤولياتك إلينا. دع شركة بيت
          الزهور، أكبر وأفضل خدمة نقل في الإمارات العربية المتحدة، تتولى نقل
          بيتك بينما تستمتع بالراحة والطمأنينة.
        </p>
        <div className="md:pl-5 w-full mt-10 px-2 flex md:flex-row flex-col gap-5">
          <div className="md:basis-1/2 basis-full bg-white shadow-lg shadow-neutral-100 rounded-2xl p-3">
            <div className="relative w-16 h-16 bg-neutral-50 rounded-full mb-2">
              <Image
                alt="icon"
                src={professional}
                fill
                className="object-contain p-3"
              />
            </div>
            <h3>خبراء ذوي خبرة</h3>
            <p className="text-xl gr mt-2">
              خبراء ذوي خبرة محترفون في مجالهم، يقدمون خدمات عالية الجودة
            </p>
          </div>
          <div className="md:basis-1/2 basis-full bg-white shadow-lg shadow-neutral-100 rounded-2xl p-3">
            <div className="relative w-16 h-16 bg-neutral-50 rounded-full mb-2">
              <Image
                alt="icon"
                src={pricing}
                fill
                className="object-contain p-3"
              />
            </div>
            <h3>أسعار معقولة</h3>
            <p className="text-xl gr mt-2">
              أسعار معقولة تناسب الجميع، دون المساومة على الجودة.
            </p>
          </div>
        </div>
        <div className="md:pl-5 w-full mt-5 flex  md:flex-row flex-col gap-5">
          <div className="md:basis-1/2 basis-full bg-white shadow-lg shadow-neutral-100 rounded-2xl p-3">
            <div className="relative w-16 h-16 bg-neutral-50 rounded-full mb-2">
              <Image
                alt="icon"
                src={booking}
                fill
                className="object-contain p-3"
              />
            </div>
            <h3>عملية الحجز الفوري</h3>
            <p className="text-xl gr mt-2">
              عملية حجز رقمية سريعة، حجز غرفتك من أي مكان
            </p>
          </div>
          <div className="md:basis-1/2 basis-full bg-white shadow-lg shadow-neutral-100 rounded-2xl p-3">
            <div className="relative w-16 h-16 bg-neutral-50 rounded-full mb-2">
              <Image
                alt="icon"
                src={years}
                fill
                className="object-contain p-3"
              />
            </div>
            <h3>خبرة 10 سنوات</h3>
            <p className="text-xl gr mt-2">
              خبرة 10 سنوات في المجال، ضمان للخدمة المتميزة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Branding;
