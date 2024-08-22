import { LucideProps } from 'lucide-react'
import React, { HTMLAttributes } from 'react'

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  selected?: boolean
  disabled?: boolean
  darker?: boolean // for some reason still don't work
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const hoverColor = !props.darker ? '--palestar-200' : '--palestar-175'

  function handleGetStyles(): React.CSSProperties | undefined {
    if (props.disabled)
      return {
        background: 'none'
      }
    return {}
  }

  return (
    <button
      {...props}
      data-disabled={props.disabled}
      data-selected={props.selected}
      disabled={props.disabled}
      style={handleGetStyles()}
      className={`p-1 rounded appbar-component hover:bg-[var(${hoverColor})] data-[selected='true']:bg-[var(${hoverColor})]`}
    >
      <props.icon
        size={18}
        strokeWidth={1.25}
        color={props.disabled ? 'var(--palestar-300)' : 'var(--palestar-text-primary)'}
      ></props.icon>
    </button>
  )
}

export default IconButton
