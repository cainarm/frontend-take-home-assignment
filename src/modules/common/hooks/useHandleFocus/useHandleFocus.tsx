import { useState, useCallback } from 'react';

export function useHandleFocus() {
  const [focused, setFocused] = useState(false);

  const onFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocused(false);
  }, []);

  return { focused, onFocus, onBlur };
}
