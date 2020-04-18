import React from 'react'
import { setupI18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider, theme } from '@chakra-ui/core'
import { render } from '@testing-library/react'
import { PhaseBanner } from '../PhaseBanner'

describe('<PhaseBanner />', () => {
  it('properly renders alpha banner', () => {
    const { getAllByText } = render(
      <ThemeProvider theme={theme}>
        <I18nProvider i18n={setupI18n()}>
          <PhaseBanner phase="ALPHA" />
        </I18nProvider>
      </ThemeProvider>,
    )

    const test = getAllByText(/ALPHA/)
    expect(test).toHaveLength(1)
  })
})
