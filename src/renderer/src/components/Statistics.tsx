import React from 'react'

// import { Container } from './styles';

export interface StatisticsProps {
  numericData: number
  label: string
}

const Statistics: React.FC<StatisticsProps> = ({ numericData, label }) => {
  return (
    <div className="p-1 flex gap-1">
      <span className="text-xs font-mono font-bold">{numericData}</span>
      <span className="text-xs font-medium text-[var(--palestart-text-dimmed)] italic ">
        {label}
      </span>
    </div>
  )
}

export default Statistics
