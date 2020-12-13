import React from "react";
import styled from "styled-components";
const backgroundColor = "#03dac5";

const Wrapper = styled.div`
  position: relative;
  height: 56px;
  border-radius: 0.5rem;
  border: 2px solid #7c7c7c;
  background-color: ${backgroundColor};
`;
const Input = styled.input`
  position: relative;
  width: 180px;
  height: 56px;
  background: transparent;
  border: 0;
  font-weight: 700;
  text-indent: 0.75rem;
  color: #7c7c7c;
  &:focus + div {
    background-color: ${backgroundColor};
    transform: translate(0.625rem, -10px) scale(0.8);
  }
`;
const Plcaeholder = styled.div`
  color: rgb(black, 0.875);
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  padding: 0 0 0.25rem;
  font-weight: 700;
  transform: translate(0.5rem, 15px);
  transform-origin: 0% 0%;
  background: transparent;
  pointer-events: none;
  transition: transform 0.35s, background 0.35s;
`;
const MaterialInput = () => {
  return (
    <Wrapper>
      <Input />
      <Plcaeholder>Name</Plcaeholder>
    </Wrapper>
  );
};

export default MaterialInput;
