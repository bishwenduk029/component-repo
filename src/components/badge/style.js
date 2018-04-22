import styled, { keyframes } from "styled-components";

export const Badge = styled.div`
  display: block;
  width: ${props => props.size};
`;

export const FlexBadge = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  border: ${props => "1px solid " + props.borderColor};
  color: #fff;
  border-radius: 4px;
  font-size: ${props => 0.08 * parseInt(props.size) + "px"};
  width: 100%;
`;

export const BadgeMsg = styled.div`
  background-color: ${props => props.color};
  padding: 4%;
`;

export const BadgeRepo = styled.div`
  background-color: ${props => props.color};
  padding: 4%;
`;

const pulsate = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`;

export const Heart = styled.svg`
  fill: #fff;
  position: relative;
  width: 10%;
  top: 1.9%;
  margin-left: 1%;
  animation: ${pulsate} 1s ease infinite;
`;
