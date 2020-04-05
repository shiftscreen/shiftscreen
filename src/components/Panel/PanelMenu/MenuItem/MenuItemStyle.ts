import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Colors } from 'constants/index';

export const Link = styled(NavLink)`
  position: relative;
  display: grid;
  cursor: pointer;
  padding: 0.75em 1em;
  font-weight: 700;
  font-size: 1.25rem;
  grid-template-columns: 1em auto;
  grid-gap: 1em;
  color: #c5bcd2;
  transition: 0.2s ease-in-out;
  border-radius: 7px;
  
  &:hover {
    color: ${Colors.violet};
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -1.5rem;
    height: 100%;
    width: 7px;
    background: #8249FB;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    transition: 0.2s ease-in-out;
    opacity: 0;
  }
  
  &.selected {
    background: ${Colors.violet};
    color: ${Colors.whitePure};
    transition: 0.2s ease-in-out;
    
    &::before {
      opacity: 1;
    }
  }
`;

export const LinkIconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;

export const LinkTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`;
