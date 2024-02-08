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
    const q = async () => {
      const res: any = await request(graphUrl, query)
      setTvl(Number(res?.factories?.[0]?.totalValueLockedUSD))
      setVolume(Number(res?.factories?.[0]?.totalVolumeUSD))
    }
    q()
  }, [])

  return (
    <div>
      <Header />
      <div className={'min-h-[650px] py-16 pt-24 relative bg-banner'}>
        {/*<Image  src={'/banner.png'} width={1600} height={650} alt={''} />*/}
        <div className='container mx-auto h-full px-8'>
          <div className={'flex items-center h-full sm:flex-row flex-col'}>
            <div>
              <Fade direction={'up'}>
                <div className={'banner-title'}>Swap Seamlessly in</div>
              </Fade>
              <Fade direction={'up'}>
                <div className={'banner-title -mt-2 mb-4'}>BTC and Beyond</div>
              </Fade>
              <Fade direction={'up'}>
                <div className={'banner-desc sm:w-[500px]'}>
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
              <div className={'text-[18px]'}>Total Trading Volume</div>
            </div>
            <div className={'sm:mx-36 sm:my-0 my-10 sm:h-[111px] h-[1px] sm:w-[1px] w-[300px] bg-divider'}></div>
            <div className='text-center'>
              <div className={'text-primary text-[36px] font-semibold'}>
                <CountUp end={tvl} decimals={3} prefix={'$'} />
              </div>
              <div className={'text-[18px]'}>TVL</div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-8'>
            <div className='sm:col-span-1 col-span-2'>
              <div className='card'>
                <FeatureAcross />
                <div className={'card-title mt-4'}>Unparalleled Interoperability</div>
                <div className={'card-title mb-4'}>in the Bitcoin Ecosystem</div>
                <div className={'card-desc'}>
                  Hiveswap covers assets across Bitcoin L1, Bitcoin interoperability layer, and L2s. Anchored in the
                  Bitcoin interoperability layer — MAP Protocol, Hiveswap empowers users to freely swap assets across
                  ALL three layers in the Bitcoin Ecosystem.
                </div>
              </div>
            </div>
            <div className='sm:col-span-1 col-span-2'>
              <div className='card'>
                <FeatureLiquidity />
                <div className={'card-title mt-4'}>Liquidity Interoperability between</div>
                <div className={'card-title mb-4'}>BTC and EVM Ecosystems</div>
                <div className={'card-desc'}>
                  Hiveswap redefines interoperability by enabling asset exchanges between the Bitcoin ecosystem and EVM
                  ecosystems, including Ethereum, BNBChain, Polygon, Klaytn, Conflux, Near, and Tron. This peer-to-peer
                  interoperability facilitates effortless transactions, blending the Bitcoin ecosystem with the world of
                  EVM platforms.
                </div>
              </div>
            </div>
            <div className='sm:col-span-1 col-span-2'>
              <div className='card'>
                <FeatureSwap />
                <div className={'card-title mt-4'}>Revolutionizing Asset Swap:</div>
                <div className={'card-title mb-4'}>Inscriptions and Beyond</div>
                <div className={'card-desc'}>
                  Hiveswap is also committed to ensuring ample liquidity for inscription assets, elevating them in the
                  decentralized marketplace. This not only enhances the value of $BTC inscription assets but also
                  empowers them with a wide array of use cases.
                </div>
              </div>
            </div>
            <div className='sm:col-span-1 col-span-2'>
              <div className='card'>
                <FeatureExchange />
                <div className={'card-title mt-4'}>Comprehensive $BTC Asset</div>
                <div className={'card-title mb-4'}>Exchange Solutions</div>
                <div className={'card-desc'}>
                  Hiveswap offers specialized liquidity pools catering to $BTC related assets. This service is
                  specifically designed to meet the decentralized exchange needs of $BTC asset holders.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* banner-2 */}
      <div className='bg-banner min-h-[500px] py-16'>
        <div className='container mx-auto px-8 h-full flex sm:flex-row flex-col items-center justify-between'>
          <div>
            <Fade direction={'up'}>
              <div className={'banner-title'}>Expanding Beyond the</div>
              <div className={'banner-title -mt-2 mb-4'}>Bitcoin Interoperability Layer</div>
            </Fade>
            <Fade direction={'up'}>
              <div className={'banner-desc sm:w-[700px]'}>
                Hiveswap is set to expand its presence across emerging Bitcoin L2s, enhancing the overall liquidity
                within the Bitcoin ecosystem.
              </div>
            </Fade>
          </div>
          <Image src={'/banner-2.png'} alt={'banner-1'} width={370} height={370} className={'sm:mt-0 mt-8'} />
        </div>
      </div>

      {/* banner-3 */}
      <div className='min-h-[500px] py-16'>
        <div className='container px-8 mx-auto h-full flex sm:flex-row flex-col-reverse items-center justify-between'>
          <div className={'sm:px-0 px-8'}>
            <Image src={'/banner-3.png'} alt={'banner-1'} width={370} height={358} className={'sm:mt-0 mt-12'} />
          </div>
          <div>
            <Fade direction={'up'}>
              <div className={'banner-title'}>Liquidity Mining:</div>
              <div className={'banner-title -mt-2 mb-4'}>Participate and Earn</div>
            </Fade>
            <Fade direction={'up'}>
              <div className={'banner-desc sm:w-[700px] mb-4'}>
                Hiveswap introduces a dynamic liquidity mining model, rewarding users for adding liquidity to the
                platform. This approach is tailored to address the ever-evolving market dynamics, offering diffrent
                incentivesfor different trading pairs across different infrastructures.
              </div>
            </Fade>
            <Fade direction={'up'}>
              <div className={'banner-desc sm:w-[700px]'}>
                In addition, Hiveswap features a comprehensive use cases for its platform tokens, backed by a unique
                platform fee buyback model, ensuring a progressive deflation of the total token supply.
              </div>
            </Fade>
          </div>
        </div>
      </div>

      {/* banner-4 */}
      <div className='bg-banner min-h-[500px] py-16'>
        <div className='container mx-auto px-8 h-full flex sm:flex-row flex-col items-center justify-between'>
          <div>
            <Fade direction={'up'}>
              <div className={'banner-title'}>Built on Advanced</div>
              <div className={'banner-title -mt-2 mb-4'}>and Reliable Technology</div>
            </Fade>
            <Fade direction={'up'}>
              <div className={'banner-desc sm:w-[700px] mb-4'}>
                At its core, Hiveswap is built on a foundation of advanced and reliable SWAP technology. This guarantees
                the utmost reliability in exchanges and ensures unmatched security for user funds, especially post-LP
                pool addition.
              </div>
            </Fade>
            <Fade direction={'up'}>
              <Link href={''} className={'btn-primary'}>
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
            <Image src={'/banner-5.png'} alt={'banner-1'} width={520} height={388} />
            <div className={'sm:w-[500px] w-full flex justify-center sm:mb-0 mb-8'}>
              <div>
                <Fade direction={'up'}>
                  <div className={'banner-title text-center mb-2'}>Community</div>
                </Fade>
                <Fade direction={'up'}>
                  <div className='flex items-center gap-4'>
                    <Link href={''} className={'btn-primary flex items-center gap-2'}>
                      <Telegram />
                      Telegram
                    </Link>
                    <Link href={''} className={'btn-primary flex items-center gap-2'}>
                      <Twitter />
                      Twitter
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
        <div className='container mx-auto flex sm:flex-row flex-col gap-4 items-center'>
          <LogoSVG />
          <div className='sm:ml-12 flex items-center gap-12 font-medium'>
            <Link href={'/'}>Community</Link>
            <Link href={'/'}>Github</Link>
            <Link href={'/'}>Launch App</Link>
          </div>
        </div>
      </div>

      <footer className={'bg-primary py-4 text-center text-white font-medium'}>
        © 2024 HiveSwap All rights reserved.
      </footer>
    </div>
  )
}
