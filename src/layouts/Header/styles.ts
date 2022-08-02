import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 2.4rem;
  background-color: var(--color-base-white);
`;

export const Logo = styled.img`
  max-width: 179px;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: auto;
`

interface MenuItemProps {
  active?: boolean
}

export const MenuItem = styled.span<MenuItemProps>`
  font-size: 1.6rem;
  color: ${({active}) => active ? 'var(--color-base-blue)' : 'var(--color-link-static)'} ;
  font-weight: 700;
  letter-spacing: .1em;
  margin-right: 4rem;
  transition: color .2s ease;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;

  &:hover {
    color: var(--color-link-hover);
  }
`