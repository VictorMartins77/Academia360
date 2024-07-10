import styled from 'styled-components';

export const theme = {
    fonts: {
      primary: 'sans-serif',
      secondary: 'Orbitron, Bold' // Add your font here
    },
    // Other theme properties
  };
  
export const font = (family, weight = 'normal') => {
    return theme.fonts[family] || weight; // Access font family or return weight as fallback
  };
  
  