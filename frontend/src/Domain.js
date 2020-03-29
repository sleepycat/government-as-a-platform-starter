import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/core'

export function Domain({www}) {
  return <div>{JSON.stringify(www)}</div>
}
