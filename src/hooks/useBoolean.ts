import { useState } from 'react';

export function useBoolean(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  const toggle = () => setValue(!value);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
}
