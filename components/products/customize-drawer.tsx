"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { OptionSelector } from "./option-selector"
import type { CustomizationOption } from "@/lib/products"
import { Settings2 } from "lucide-react"

interface CustomizeDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  options: CustomizationOption[]
  selections: Record<string, string>
  onSelectionChange: (label: string, value: string) => void
  monogram: string
  onMonogramChange: (value: string) => void
  categoryLabel: string
  showMonogram: boolean
}

export function CustomizeDrawer({
  open,
  onOpenChange,
  options,
  selections,
  onSelectionChange,
  monogram,
  onMonogramChange,
  categoryLabel,
  showMonogram,
}: CustomizeDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="flex w-full flex-col border-border bg-background sm:max-w-lg"
      >
        <SheetHeader className="shrink-0 border-b border-border px-6 pb-4">
          <div className="flex items-center gap-2">
            <Settings2 className="size-5 text-primary" />
            <SheetTitle className="font-serif text-xl text-foreground">
              Advanced Customization
            </SheetTitle>
          </div>
          <SheetDescription className="text-muted-foreground">
            Fine-tune every detail of your {categoryLabel.toLowerCase()}
          </SheetDescription>
        </SheetHeader>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <Accordion type="multiple" defaultValue={options.map((o) => o.label)} className="w-full">
            {options.map((option) => (
              <AccordionItem key={option.label} value={option.label}>
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span>{option.label}</span>
                    {selections[option.label] && (
                      <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                        {selections[option.label]}
                      </span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <OptionSelector
                    label=""
                    choices={option.choices}
                    selected={selections[option.label] || option.choices[0]}
                    onSelect={(v) => onSelectionChange(option.label, v)}
                    compact
                  />
                </AccordionContent>
              </AccordionItem>
            ))}

            {showMonogram && (
              <AccordionItem value="monogram">
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span>Monogram</span>
                    {monogram && (
                      <span className="rounded-sm bg-accent/50 px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                        +&#8377;499
                      </span>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3">
                    <p className="text-xs text-muted-foreground">
                      Add your initials for a personal touch. Up to 4 characters.
                    </p>
                    <input
                      type="text"
                      maxLength={4}
                      value={monogram}
                      onChange={(e) => onMonogramChange(e.target.value.toUpperCase())}
                      placeholder="e.g. J.D."
                      className="w-full rounded-sm border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    {monogram && (
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">Position:</span>
                        <div className="flex gap-1.5">
                          {["Cuff", "Chest", "Collar"].map((pos) => (
                            <button
                              key={pos}
                              className="rounded-sm border border-border px-2.5 py-1 text-[10px] font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                            >
                              {pos}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>

        <SheetFooter className="shrink-0 border-t border-border px-6 pt-4">
          <button
            onClick={() => onOpenChange(false)}
            className="w-full rounded-sm bg-primary py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Apply Customizations
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
