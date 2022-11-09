import Link from "next/link"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineGlobal,
} from "react-icons/Ai"

export default function Socials() {
  return (
    <div className="flex justify-center items-center h-8 bg-slate-300 gap-4 text-slate-500">
      <Link href='https://github.com/esbnet' title="meu respositórios">
        <AiFillGithub size={24} />
      </Link>
      <Link href='https://www.linkedin.com/in/edmilson-soares/' title="resume/currículo">
        <AiFillLinkedin  size={24} />
      </Link>
      <Link href='https://www.youtube.com/@EdmilsonSoares' title="canal no youtube">
        <AiFillYoutube  size={24} />
      </Link>
      <Link href='https://esbnet.tec.br/' title="quarks_Code">
        <AiOutlineGlobal  size={24} />
      </Link>
    </div>
  )
}
