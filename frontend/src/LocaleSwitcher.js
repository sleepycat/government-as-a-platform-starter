import React from 'react'
import { string } from 'prop-types'
import { useLingui } from '@lingui/react'
import { locales, activate } from './i18n.config'
import { Box, PseudoBox, VisuallyHidden } from '@chakra-ui/core'

const Toggler = ({ locale }) => {
  return (
    <PseudoBox
      as="button"
      key={locale}
      padding={0}
      onClick={() => activate(locale)}
      _focus={{
        outline: `3px solid #ffbf47`,
      }}
      color="blue.600"
    >
      <VisuallyHidden>{locales[locale]}</VisuallyHidden>
      <PseudoBox
        aria-hidden
        fontSize="lg"
        d={{ base: 'none', md: 'flex' }}
        alignItems="center"
        justifyContent="center"
      >
        {locales[locale]}
      </PseudoBox>
      <PseudoBox
        aria-hidden
        d={{ base: 'flex', md: 'none' }}
        bg="gray.100"
        textTransform="uppercase"
        size={10}
        alignItems="center"
        justifyContent="center"
      >
        {locale}
      </PseudoBox>
    </PseudoBox>
  )
}

Toggler.propTypes = {
  locale: string.isRequired,
}

export function LocaleSwitcher() {
  const { i18n } = useLingui()
  return (
    <Box>
      {i18n.locale === 'en' && <Toggler locale="fr" />}
      {i18n.locale === 'fr' && <Toggler locale="en" />}
    </Box>
  )
}
