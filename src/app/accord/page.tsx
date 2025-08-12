import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { cn } from "@/lib/utils";

function AccordPage() {
  return (
    <div className="flex justify-center items-center h-full flex-col gap-[5rem]">
        <Accordion  className="w-[500px] p-4 border-2" type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    

      <AlertDialog >
        <AlertDialogTrigger className={cn("border-2 w-[100px] h-[50px]")}>Open this</AlertDialogTrigger>
        <AlertDialogContent >
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

<ContextMenu>
  <ContextMenuTrigger className={cn("border-2 w-[200px] h-[200px] flex justify-center items-center")}>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem inset>Back
        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset disabled>Forward
        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem inset>Profile</ContextMenuItem>
    <ContextMenuItem inset>Billing</ContextMenuItem>
    <ContextMenuItem inset>Team</ContextMenuItem>
    <ContextMenuItem inset>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
      
    </div>
  );
}

export default AccordPage;
