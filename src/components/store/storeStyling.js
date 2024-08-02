import styled from "styled-components";
import colors from "../../styles/colors";
import { textPreset } from "../../styles/typo";

const StyledStore = styled.section`
  width: 100%;
  max-width: 50rem;
  min-height: 72.813rem;

  .store-header {
    color: ${colors.rose[900]};
    font-size: ${textPreset[1].fontSize};
    font-weight: ${textPreset[1].fontWeight};
    letter-spacing: ${textPreset[1].letterSpacing};
    line-height: ${textPreset[1].lineHeight};
    padding: 0.5rem 0;
  }

  .items-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 320px);
    gap: 2rem 1.5rem;
  }

  @media screen and (max-width: 1250px) {
    .items-container {
      grid-template-columns: repeat(3, 1fr);
      justify-items: center;
      width: 100%;
      gap: 0.5rem;
    }
  }

  @media screen and (max-width: 850px) {
    .items-container {
      grid-template-columns: 100%;
      grid-template-rows: repeat(9, 320px);
      align-items: center;
      justify-items: center;
      gap: 1rem;
    }
  }
`;

export default StyledStore;
