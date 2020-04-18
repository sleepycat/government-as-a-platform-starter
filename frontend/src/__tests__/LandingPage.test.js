import React from 'react'
import { setupI18n } from '@lingui/core'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider, theme } from '@chakra-ui/core'
import { I18nProvider } from '@lingui/react'
import { LandingPage } from '../LandingPage'

describe('<LandingPage />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ThemeProvider theme={theme}>
          <I18nProvider i18n={setupI18n()}>
            <LandingPage />
          </I18nProvider>
        </ThemeProvider>
      </MemoryRouter>,
    )
  })
})
