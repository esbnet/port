import Bio from "../Bio"
import NavBar from "../Navbar"
import Socials from "../Socials"

export default function Header() {
  return (
    <div>
      <Bio />
      <NavBar />
      <div>
        <Socials />
      </div>
    </div>
  )
}
