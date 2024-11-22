import React from 'react'

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center animate-pulse">
      <div className="bg-[url('/images/RMHS.png')] w-20 h-20 rounded-full bg-cover bg-center max-md:w-16 max-md:h-16 max-sm:w-12 max-sm:h-12">
        {/* <Image src="" width={50} height={50} className="rounded-full" /> */}
      </div>
    </div>
  );
}

export default Loading
