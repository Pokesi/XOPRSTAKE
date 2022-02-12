import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import { DiscordIcon, InstagramIcon, MediumIcon, TwitterIcon } from 'app/components/Icon'
import Typography from 'app/components/Typography'
import { Feature } from 'app/enums'
import { featureEnabled } from 'app/functions'
import { useActiveWeb3React } from 'app/services/web3'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Container from '../Container'

const Footer = () => {
  const { chainId } = useActiveWeb3React()
  const { i18n } = useLingui()

  return (
    <div className="z-10 w-full py-20 mt-20">
      <Container maxWidth="7xl" className="mx-auto px-6">
        <div className="grid grid-cols-2 gap-10 pt-8 md:grid-cols-3 lg:grid-cols-6 xs:px-6 border-t border-dark-900">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-2">
              <div className="">
                <img src="https://cyber.fantoms.art/Opr.png" alt="OPR logo" width="28px" height="28px" />
              </div>
              <Typography variant="h2" weight={700} className="tracking-[0.02em] scale-y-90 hover:text-high-emphesis">
                Fantoms On Opera
              </Typography>
            </div>
            <Typography variant="xs" className="text-low-emphesis">
              {i18n._(t`Fantoms On Opera is an NFT and token ecosystem, running on Fantom Opera (that's where the name comes from)`)}
            </Typography>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com/FantomsOpera" target="_blank" rel="noreferrer">
                <TwitterIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://fantomsopera.meduim.com/" target="_blank" rel="noreferrer">
                <MediumIcon width={16} className="text-low-emphesis" />
              </a>
              <a href="https://discord.gg/rWpffXV2dA" target="_blank" rel="noreferrer">
                <DiscordIcon width={16} className="text-low-emphesis" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer
