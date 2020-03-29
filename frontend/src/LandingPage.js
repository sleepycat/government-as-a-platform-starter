import React from 'react'
import { Trans } from '@lingui/macro'
import { Layout } from './Layout'
import { Heading, Text, Stack } from '@chakra-ui/core'

export function LandingPage() {
  return (
    <Layout>
      <Stack spacing={10} shouldWrapChildren>
        <Heading as="h1">
          <Trans>Government As A Platform Starter</Trans>
        </Heading>
        <Stack spacing={4}>
          <Stack spacing={4} direction="row" flexWrap="wrap">
            <Text>
              <Trans>
                "Government as a Platform is the approach of reorganizing the
                work of government around a network of shared APIs,
                open-standards and canonical data registers. The hope is that
                this will allow public servants, businesses, and others to
                deliver radically better services to the public, and to do so
                safely, efficiently, democratically, and in a more accountable
								way." <cite>-- Richard Pope</cite>
              </Trans>
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  )
}
