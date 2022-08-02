import React from "react";
import { HeaderContainer, Logo, MenuItem, Menu } from './styles';

const Header = () => {
	return (
		<HeaderContainer>
			<Logo
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
				alt="Pokeshop Logo"
			/>
      <Menu>
        <MenuItem active={true}>
          Teste 1
        </MenuItem>
        <MenuItem>
          Teste 2
        </MenuItem>
        <MenuItem>
          Teste 4
        </MenuItem>
        
      </Menu>
      <MenuItem>
        Cart
      </MenuItem>
		</HeaderContainer>
	);
};

export default Header;