import React from 'react'
import { setupI18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { ThemeProvider, theme } from '@chakra-ui/core'
import { MemoryRouter } from 'react-router-dom'
import { waitFor, render } from '@testing-library/react'
import App from '../App'

describe('<App/>', () => {
  describe('routes', () => {
    describe('/', () => {
      it('renders the main page', async () => {
        const { getByRole } = render(
          <ThemeProvider theme={theme}>
            <I18nProvider i18n={setupI18n()}>
              <MemoryRouter initialEntries={['/']} initialIndex={0}>
                <App />
              </MemoryRouter>
            </I18nProvider>
          </ThemeProvider>,
        )

        const heading = await waitFor(() => getByRole('heading'))
        expect(heading).toHaveTextContent(/Government as a platform/i)
      })
    })
  })
})
