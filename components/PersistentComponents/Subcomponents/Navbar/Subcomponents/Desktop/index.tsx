import Left from "./Left"
import Right from "./Right"

const NavbarDesktop = () => {
  return (
    <div className="flex justify-between items-center container mx-auto whitespace-nowrap">
        <Left/>
        <Right/>
    </div>
  )
}

export default NavbarDesktop