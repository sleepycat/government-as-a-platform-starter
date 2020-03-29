import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { Trans } from '@lingui/macro'
import { Layout } from './Layout'
import { Heading, Text, Stack, List } from '@chakra-ui/core'

export function DataPage() {
  const { loading, error, data } = useQuery(gql`
    {
      hello
    }
  `)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Layout>
      <Stack spacing={10} shouldWrapChildren>
        <Heading as="h1">
          <Trans>Data from the API</Trans>
        </Heading>
        <Stack spacing={4}>
          <Stack spacing={4} direction="row" flexWrap="wrap">
            <Text>
              <Trans>The API says hello to the:</Trans>
            </Text>
            <List>{data.hello}</List>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  )
}
