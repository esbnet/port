import Image from 'next/image';
import NavBar from '../nav-bar';

import  { Top } from './styles'

export default function Header() {
  return (
    <Top>
      <div className="logo">
        <div className="avatar">
          <Image src={'/../../../public/vercel.svg'} width={100} height={100} alt=''></Image>
        </div>
        <div className="bio">
          <div className="name">Edmilson Soares</div>
          <div className="role">Full Stack Developer</div>
        </div>
      </div>
      <NavBar />
    </Top>
  )
}
