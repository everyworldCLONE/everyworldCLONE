import { keyframes } from 'styled-components';

export const theme = {
  color: {
    purple: '#C408FF',
  },
};

export const font = {
  fontFamily: 'Roboto',
};

export const breakpoints = {
  small: '@media (max-width: 534px)',
  medium: '@media (max-width: 1000px)',
  large: '@media (min-width: 2500px)',
};

export const slideUp = keyframes`
0% {
  transform: translateY(3%); 
  opacity: 0; 
}
100% {
  transform: translateY(0);
  opacity: 1; 
}
`;
