import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Colors } from 'constants/index';

export const Link = styled(NavLink)`
  display: grid;
  cursor: pointer;
  padding: 1.25rem;
  font-weight: 700;
  font-size: 1.25rem;
  grid-template-columns: 1.25rem auto;
  grid-gap: 1.25rem;
  color: ${Colors.white};
  transition: 0.2s ease-in-out;
  
  &:hover {
    color: ${Colors.yellow};
  }
  
  &.selected {
    background: ${Colors.yellow};
    color: ${Colors.greyDark};
  }
`;

export const LinkIconWrapper = styled.span`
  & > svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const LinkTitle = styled.div`
  margin: 0;
`;
