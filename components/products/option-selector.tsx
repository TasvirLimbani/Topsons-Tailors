"use client"

import { cn } from "@/lib/utils"

interface OptionSelectorProps {
  label: string
  choices: string[]
  selected: string
  onSelect: (choice: string) => void
  compact?: boolean
}

export function OptionSelector({
  label,
  choices,
  selected,
  onSelect,
  compact = false,
}: OptionSelectorProps) {
  return (
    <div className={compact ? "space-y-2.5" : "space-y-3"}>
      <label className="block text-xs font-medium tracking-widest uppercase text-muted-foreground">
        {label}
        <span className="ml-2 normal-case tracking-normal text-foreground">{selected}</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => onSelect(choice)}
            className={cn(
              "rounded-sm border px-3.5 py-2 text-xs font-medium transition-all",
              compact && "px-3 py-1.5 text-[11px]",
              selected === choice
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-secondary"
            )}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  )
}
