import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'

import { CartContext } from '../../contexts/cart.context';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';
import { signOutUser } from '../../utils/firebase/firebase.utils'


const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink className='nav-link' to='/auth'>
                SIGN IN
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation