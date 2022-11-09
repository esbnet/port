import Image from "next/image"

import avatar from "../../assets/neno.jpg"

export default function Bio() {
  return (
    <div    className="flex flex-col items-center mt-4"

    >
      <div className=''>
        <Image
          className=" w-24 h-24 rounded-full outline-2 border-2"
          placeholder='blur'
          src={avatar}
          alt='Profile Avatar'
        />
      </div>
      <div className='text-4xl font-bold'>Edmilson Soares</div>
      <div className='role'>Full Stack Developer</div>
    </div>
  )
}
