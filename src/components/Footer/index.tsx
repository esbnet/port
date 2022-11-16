import Socials from "components/Socials"
import { AiOutlineCopyrightCircle } from "react-icons/Ai"

export default function Footer() {
  return (
    <div className='flex items-center justify-between bg-slate-300 fixed bottom-0 w-[1100px]  px-2 h-8 text-sm text-slate-600'>
      <p className="flex">
        powered by:<strong className="flex mx-2">quarks_Code<AiOutlineCopyrightCircle className="text-[10px]"/>
        </strong>
        2022
      </p>
      <Socials />
    </div>
  )
}
