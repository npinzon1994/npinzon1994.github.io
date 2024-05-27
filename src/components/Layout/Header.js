import classes from './Header.module.css';
import NavBar from './Navigation/NavBar';
import SideBar from './Navigation/SideBar';

const Header = () => {
  return (
    <header className={classes.header}>
        <NavBar />
        <SideBar />
    </header>
  )
}

export default Header