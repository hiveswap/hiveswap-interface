'use client'

import Image from 'next/image'
import { LogoSVG } from '@/components/svgs/logo'
import Link from 'next/link'
import { FeatureAcross } from '@/components/svgs/FeatureAcross'
import { FeatureLiquidity } from '@/components/svgs/FeatureLiquidity'
import { FeatureSwap } from '@/components/svgs/FeatureSwap'
import { FeatureExchange } from '@/components/svgs/FeatureExchange'
import { Telegram } from '@/components/svgs/Telegram'
import { Twitter } from '@/components/svgs/Twitter'
import { Fade } from 'react-awesome-reveal'
import CountUp from 'react-countup'
import { useEffect, useState } from 'react'
import request, { gql } from 'graphql-request'
import { Menu } from '@/components/svgs/Menu'
import { Header } from '@/components/header'

const graphUrl = 'https://graph.mapprotocol.io/subgraphs/name/hiveswap/exchange-v3'

export default function Home() {
  const query = gql`
    query ExchangeInfo {
      factories {
        totalVolumeUSD
        txCount
        totalVolumeETH
        totalValueLockedUSD
        totalValueLockedETH
        totalValueLockedETHUntracked
        totalValueLockedUSDUntracked
        untrackedVolumeUSD
        totalProtocolFeesUSD
        totalProtocolFeesETH
        totalFeesUSD
        totalFeesETH
        poolCount
        txCount
      }
    }
  `

  const [tvl, setTvl] = useState(0)
  const [volume, setVolume] = useState(0)

  useEffect(() => {
    const a = async () => {
      const res: any = await fetch(
        'https://api-dass.izumi.finance/api/v1/izi_swap/summary_record/?chain_id=22776&type=3',
      ).then((r) => r.json())
      setTvl(res?.data?.[0].tvl)
      setVolume(res?.data?.[0].volDay)
      console.log(res)
    }
    a()
  }, [])

  return (
    <div>
      <Header />
      <div className={'min-h-[650px] py-20 pt-36 relative bg-banner'}>
        {/*<Image  src={'/banner.png'} width={1600} height={650} alt={''} />*/}
        <div className='container mx-auto h-full px-8'>
          <div className={'flex items-center h-full sm:flex-row flex-col'}>
            <div>
              <Fade direction={'up'}>
                <div className={'banner-title mb-10 sm:w-[580px] w-[280px]'}>
                  Hiveswap is the <span className={'text-primary'}>NO.1</span> SWAP in the Bitcoin ecosystem
                </div>
              </Fade>
              <Fade direction={'up'}>
                <div className={'banner-desc sm:w-[560px]'}>
                  Hiveswap is the NO.1 SWAP in the Bitcoin ecosystem, utilizing the interoperable Bitcoin layer MAP
                  Protocol to provide liquidity services for assets in the Bitcoin ecosystem, including assets on
                  Bitcoin L1, the MAP Protocol interoperability layer, and various Bitcoin L2s.
                </div>
              </Fade>
            </div>
            <Image
              src={'/banner-1.png'}
              alt={'banner-1'}
              width={460}
              height={420}
              className={'ml-auto sm:mt-0 mt-12'}
              sizes={'(max-width: 768px) 100%'}
            />
          </div>
        </div>
      </div>

      <div className={'py-20'}>
        <Fade direction={'up'}>
          <div className={'banner-title text-center mb-6'}>Hiveswap Data</div>
        </Fade>
        <div className='container mx-auto px-8'>
          <div className='flex sm:flex-row flex-col justify-center mb-12 items-center'>
            <div className='text-center'>
              <div className={'text-primary text-[36px] mb-1 font-semibold'}>
                <CountUp end={volume} decimals={3} prefix={'$'} />
              </div>
              <div className={'text-[18px]'}>Trading Volume 24H</div>
            </div>
            <div className={'sm:mx-36 sm:my-0 my-10 sm:h-[111px] h-[1px] sm:w-[1px] w-[300px] bg-divider'}></div>
            <div className='text-center'>
              <div className={'text-primary text-[36px] font-semibold'}>
                <CountUp end={tvl} decimals={3} prefix={'$'} />
              </div>
              <div className={'text-[18px]'}>Total Value Locked</div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            <div className='sm:col-span-1 col-span-2'>
              <div className='card'>
                <FeatureAcross />
                <div className={'card-title mt-4'}>Fully Realized interoperability</div>
                <div className={'card-title mb-4'}>of liquidity for Bitcoin network assets</div>
                <div className={'card-desc'}>
                  Fully covered assets on Bitcoin&apos;s Layer 1, Bitcoin&apos;s interoperability layer, and
                  Bitcoin&apos;s layer 2, with the MAP Protocol interoperability layer as the starting point, enabling
                  any swap of assets across the three layers
                </div>
              </div>
            </div>
            <div className='sm:col-span-1 col-span-2'>
              <div className='card'>
                <FeatureLiquidity />
                <div className={'card-title mt-4'}>Liquidity Interoperability between</div>
                <div className={'card-title mb-4'}>BTC and EVM Ecosystems</div>
                <div className={'card-desc'}>
                  HiveSWAP supports the peer-to-peer interoperability of assets from mainstream EVM chains such as
                  Ethereum, BNB Chain, Polygon, Klaytn, Conflux, NEAR, Tron, etc., enabling the swap between assets on
                  the Bitcoin network and EVM ecosystem assets
                </div>
              </div>
            </div>
            <div className='sm:col-span-1 col-span-2'>
              <div className='card'>
                <FeatureSwap />
                <div className={'card-title mt-4'}>Supporting the swap of inscription assets</div>
                <div className={'card-title mb-4'}>with various types of assets</div>
                <div className={'card-desc'}>
                  Enabling inscription assets to have sufficient liquidity in the decentralized world.
                </div>
              </div>
            </div>
            <div className='sm:col-span-1 col-span-2'>
              <div className='card'>
                <FeatureExchange />
                <div className={'card-title mt-4'}>Supporting the swap between</div>
                <div className={'card-title mb-4'}>$BTC and other types of assets</div>
                <div className={'card-desc'}>
                  Supporting liquidity pools for $BTC-related assets and other assets, to meet the decentralized
                  liquidity exchange needs of $BTC asset holders
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banner-2 */}
      <div className='bg-banner min-h-[500px] py-16'>
        <div className='container mx-auto px-8 h-full flex sm:flex-row flex-col items-center justify-between'>
          <div className={'sm:w-[728px]'}>
            <Fade>
              <div className='banner-title mb-4'>
                Deployed not only on the interoperability layer-MAP Protocol of the Bitcoin network
              </div>
            </Fade>
            <Fade>
              <div className={'section-desc sm:w-[700px]'}>
                HiveSwap will continue to deploy on emerging Bitcoin Layer 2 networks, providing liquidity services for
                the overall Bitcoin network ecosystem
              </div>
            </Fade>
          </div>
          <Image
            src={'/banner-2.png'}
            alt={'banner-1'}
            width={370}
            height={370}
            sizes={'(max-width: 768px) 100%'}
            className={'sm:mt-0 mt-8'}
          />
        </div>
      </div>

      {/* banner-3 */}
      <div className='min-h-[500px] py-16'>
        <div className='container px-8 mx-auto h-full flex sm:flex-row flex-col-reverse items-center justify-between'>
          <Image
            src={'/banner-3.png'}
            alt={'banner-1'}
            width={330}
            height={308}
            className={'sm:mt-0 mt-12'}
            sizes={'(max-width: 768px) 70vw'}
          />
          <div>
            <Fade>
              <div className={'banner-title mb-4 sm:w-[680px] w-[300px]'}>
                Liquidity mining, adding liquidity to earn token rewards
              </div>
            </Fade>
            <Fade>
              <div className={'section-desc sm:w-[680px]'}>
                To incentivize more users to add liquidity, HiveSwap adopts a liquidity mining model to generate tokens.
                To meet the diverse needs of the market, different incentive schemes are set to various trading pairs on
                different infrastructures. Meanwhile, HiveSwap offers a variety of utility scenarios for its platform
                token and operates on a model of platform fee buyback, ensuring a continuous reduction in the total
                supply of the platform token.
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* banner-4 */}
      <div className='bg-banner min-h-[500px] py-16'>
        <div className='container mx-auto px-8 h-full flex sm:flex-row flex-col items-center justify-between'>
          <div>
            <Fade>
              <div className={'banner-title'}>Mature and</div>
              <div className={'banner-title -mt-2 mb-4'}>robust technology</div>
            </Fade>
            <Fade>
              <div className={'section-desc sm:w-[700px] mb-4'}>
                HiveSwap adopts an industry-proven and robust SWAP technology framework, ensuring both the reliability
                of exchanges and the security of user funds after adding liquidity pools, all under the protection of
                mature technology.
              </div>
            </Fade>
            <Fade>
              <Link href={'https://github.com/hiveswap'} className={'btn-primary'}>
                Github
              </Link>
            </Fade>
          </div>
          <Image src={'/banner-4.png'} alt={'banner-1'} width={370} height={370} className={'sm:mt-0 mt-8'} />
        </div>
      </div>

      {/* banner-5 */}
      <div className='py-20'>
        <div className='container mx-auto'>
          <div className='min-h-[357px] bg-[#fafafa] sm:pt-0 pt-12 rounded-xl flex sm:flex-row flex-col-reverse items-center justify-between'>
            <Image src={'/banner-5.png'} alt={'banner-1'} width={520} height={388} sizes={'(max-width: 768px) 100%'} />
            <div className={'sm:w-[500px] w-full flex justify-center sm:mb-0 mb-8'}>
              <div>
                <Fade direction={'up'}>
                  <div className={'banner-title text-center mb-2'}>Community</div>
                </Fade>
                <Fade direction={'up'}>
                  <div className='flex items-center justify-center'>
                    <Link href={'https://x.com/hiveswap_io'} className={'btn-primary flex items-center gap-2'}>
                      <Twitter />
                      Twitter
                    </Link>
                  </div>
                  <div className='flex items-center justify-center pt-2 pl-1'>
                    <Link href={'https://t.me/hiveswap_io'} className={' btn-primary flex items-center gap-2 '}>
                      <Telegram />
                      Tlegram
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className={'bg-white py-12'}>
        <div className='container mx-auto'>
          <div className='sm:ml-12 flex items-center justify-center gap-12 font-medium'>
            <Link href={'https://twitter.com/hiveswap_io'} target={'_blank'}>
              Community
            </Link>
            <Link href={'https://github.com/hiveswap'} target={'_blank'}>
              Github
            </Link>
            <Link href={'https://docs.hiveswap.io'} target={'_blank'}>
              Docs
            </Link>
            <Link href={'https://app.hiveswap.io'} target={'_blank'}>
              Launch App
            </Link>
          </div>
        </div>
      </div>

      <footer className={'bg-primary py-4 text-center text-white font-medium'}>
        © 2024 HiveSwap All rights reserved.
      </footer>
    </div>
  )
}
