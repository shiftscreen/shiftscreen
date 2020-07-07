import styled from 'styled-components';

export const WeekdaysWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 2.5rem);
  grid-gap: 1rem;
`;

interface WeekdayElementProps {
  isActive: boolean;
}

export const WeekdayElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 7px;
  font-weight: 600;
  cursor: pointer;
  padding: 0.5rem;
  transition: 0.2s ease-in-out;
  
  ${({ isActive }: WeekdayElementProps) => (
    isActive
      ? `
        background: #7265FC;
        color: #FFF;
      `
      : `
        background: #F5F5F5;
        color: #7265FC;
      `
  )}
`;
