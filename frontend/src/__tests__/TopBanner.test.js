import React from 'react'
import { setupI18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider, theme } from '@chakra-ui/core'
import { TopBanner } from '../TopBanner'
import { render } from '@testing-library/react'

describe('<TopBanner />', () => {
  it('renders using the language prop correctly', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <I18nProvider i18n={setupI18n()}>
          <TopBanner />
        </I18nProvider>
      </ThemeProvider>,
    )
    const test = getByRole('img')
    expect(test.getAttribute('alt')).toBe('Symbol of the Government of Canada')
  })
})
