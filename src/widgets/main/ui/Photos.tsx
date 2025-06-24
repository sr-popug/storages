import PhotosSlider from '@/shared/ui/PhotoSlider'

export default function Photos() {
  return (
    <article className='mt-44 relative'>
      <h2 className='mb-10 text-3xl  lg:text-4xl font-extrabold max-w-[630px] '>
        Фотографии склада
      </h2>
      <PhotosSlider />
    </article>
  )
}
