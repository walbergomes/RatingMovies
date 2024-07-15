import { Container } from "./styles"

import { FiPlus, FiX } from "react-icons/fi"

export function Marker({ isNew = false, value, onCLick, ...rest }) {
  return (
    <Container $isNew={isNew}>
      <input 
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onCLick}
      >
        { isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}