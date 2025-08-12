import describes from "@/shared/lib/describes";
import RentButton from "@/shared/ui/RentButton";
import Image from "next/image";

export default function Describe() {
  return (
    <article className='mt-44 relative'>
      <section className='absolute top-100 -right-[23vw] -z-1 rotate-180'>
        <Image src={"/big-arrow.svg"} height={1250} width={1550} alt='' />
      </section>
      <section>
        {describes.map((el, i) => (
          <article
            key={i}
            className='block lg:flex nth-[2n]:flex-row-reverse mb-16 justify-between'
          >
            <section className=''>
              <h2 className='mb-8  text-3xl  lg:text-4xl font-extrabold max-w-[630px]'>
                {el.title}
              </h2>
              <section className='mb-8'>
                {el.pars.map((par, i) => (
                  <p
                    className='mt-4 max-w-[530px]  text-[16px] lg:text-lg font-extralight text-justify'
                    key={i}
                  >
                    {par}
                  </p>
                ))}
              </section>
              {i == describes.length - 1 ? <RentButton /> : ""}
            </section>
            <Image
              src={el.image}
              width={440}
              height={440}
              alt={el.title}
              className='rounded-full hidden lg:block'
            />
          </article>
        ))}
      </section>
    </article>
  );
}
