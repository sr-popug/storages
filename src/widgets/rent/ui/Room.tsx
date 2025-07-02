export default function Room({ size }: { size: number[] }) {
  return (
    <div className='h-fit'>
      {size.map((el, i) => {
        if (i % 2 === 1 && i > 0) {
          return (
            <div key={i} className='relative'>
              <div
                className={`border-2 border-red-700 bg-[#200d0e]`}
                style={{
                  width: `${size[i - 1] / 2}px`,
                  height: `${el / 2}px`,
                }}
              ></div>
              {size.length == 4 && i == 1 && (
                <div
                  className={` border-2 border-b-0 border-red-700 absolute z-5 top-0  bg-[#200d0e]`}
                  style={{
                    width: `${size[i - 1] / 2}px`,
                    height: `${(el + 2) / 2}px`,
                  }}
                ></div>
              )}
            </div>
          )
        }
        return null
      })}
    </div>
  )
}
