import styled from "styled-components";
import { getElementsButtonColor} from "../colors/Colors";

const Button = styled.button`
  background-color: ${getElementsButtonColor('light')}; 
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

export default Button;
