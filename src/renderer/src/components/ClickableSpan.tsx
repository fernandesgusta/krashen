import React, { CSSProperties, HTMLAttributes } from 'react'

export interface ClickableSpanProps extends HTMLAttributes<HTMLSpanElement> {
  selected?: boolean
  disabled?: boolean
}

const ClickableSpan: React.FC<ClickableSpanProps> = (props) => {
  function getStyles(): CSSProperties {
    if (props.disabled)
      return { background: 'none', color: 'var(--palestart-text-dimmed) !important' }
    return {}
  }

  return (
    <span
      {...props}
      data-selected={props.selected}
      data-disabled={props.disabled}
      onClick={props.disabled ? (): void => {} : props.onClick}
      style={getStyles()}
      className="p-1 appbar-component data-[selected='true']:bg-[var(--palestar-200)] font-medium transition-colors rounded hover:bg-[var(--palestar-200)]   text-xs"
    />
  )
}

export default ClickableSpan
