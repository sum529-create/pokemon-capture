import styled from "styled-components";
import PropTypes from 'prop-types';

const buttonThemes = {
  primary: {background: "#4caf50", hover: "#388e3c"},
  secondary: {background: "#4a90e2", hover: "#357abd"},
  destructive: {background: "#ff6347", hover: "#b34532"},
  default: { background: "#333", hover: "#222" }
}

const StyledButton = styled.button`
  width: 100%;
  padding:12px 24px;
  font-weight: 500;
  font-size: 1rem;
  margin-top: 12px;
  border-radius: 12px;
  background: ${({$variant}) => buttonThemes[$variant].background || buttonThemes.default.background};
  transition: background 0.2s;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${({$variant}) => buttonThemes[$variant].hover || buttonThemes.default.hover};
  }
`

const Button = ({$variant="default", onClick, children}) => {
  return (
    <StyledButton variant={$variant} onClick={onClick}>{children}</StyledButton>
  )
}

Button.propTypes = {
  $variant: PropTypes.oneOf(["primary", "secondary", "destructive", "default"]),
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Button