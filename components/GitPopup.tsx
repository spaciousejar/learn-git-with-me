import { Button } from "@/components/ui/button"
import GitTerminal from "@/components/terminal"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function GitPopup() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Terminal</Button>
      </PopoverTrigger>
      <PopoverContent className="">
       
          <GitTerminal />
        
      </PopoverContent>
    </Popover>
  )
}
