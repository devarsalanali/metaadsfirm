import { Tilt } from 'react-tilt'
import Breadcrumb from '../components/Breadcrumb'

export default function Feature() {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 2000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  }
  return (
    <div className='container mx-auto lg:px-20'>
      <div className='flex gap-8 mt-10 mb-8'>
        <div>
          <h3 className='ff-against text-[1.4rem] lg:text-[2rem] font-normal'>
            Metaverse Web <span className='text-primary'>Builders</span>
          </h3>
          <Breadcrumb />
        </div>
      </div>
      <hr className='border-slate-600 mb-10' />
      <div className='body'>
        <div className='grid grid-cols-2 gap-5'>
          <div className=''>
            <h3 className='ff-against text-[1.4rem] font-normal mb-2'>
              About <span className='text-primary'>Us?</span>
            </h3>
            <p className='text-slate-400 mb-4'>
              Welcome to Meta Ads Firm, your gateway to the future of online
              experiences. We specialize in transforming websites into fully
              immersive and interactive Web3 environments. As a leading Web3
              advertising and development agency, we offer a range of services,
              including NFT integration, innovative web development, and
              strategic marketing. Our talented team has successfully completed
              hundreds of projects, pushing the boundaries of what's possible in
              the digital landscape. We pride ourselves on being more than just
              an agency; we're trailblazers in crafting dynamic experiences that
              transcend traditional online engagement.{' '}
            </p>
            <p className='text-slate-400'>
              With a finger on the pulse of evolving technologies, we ensure
              your brand stays ahead in the digital race. Whether you're looking
              to leverage NFTs, revamp your website, or enhance your marketing
              strategies, Meta Ads Firm is your partner for future-forward
              solutions. Join us in shaping the next era of the web, where every
              interaction is a step into a new dimension. Meta Ads Firm – where
              innovation meets virtual reality, and your online presence is
              redefined.
            </p>
            {/*  */}
            <h4 className='ff-against text-[1rem] font-normal mt-6 mb-2'>
              Randy Wayde: ( Founder )
            </h4>
            <p className='text-slate-400'>
              “Soon everything will be an NFT” An early riser Randy begins his
              day at 3:30am Tirelessly studying everything NFT, blockchain And
              smart contract. Randy is relentless in Educating himself on the
              subject. He has earned specialized certification in Decentralized
              finance from Duke University. Completed and is certified in
              Blockchain Basics from the University of Buffalo Completed two In
              depth Master classes and is currently Enrolled at Cornell
              University studying Blockchain. His passion and thirst for
              Knowledge in all things NFT make him the right man To do the heavy
              lifting.
            </p>
            <h4 className='ff-against text-[1rem] font-normal mt-6 mb-2'>
              Lia Miranda: ( Head of Marketing )
            </h4>
            <p className='text-slate-400'>
              With Her Master’s Degree in business marketing and an uncanny gift
              in understanding Google analytics, Lia is able to see the trend
              before the trend realizes it is a trend. She is Matrix level in
              deciphering data and almost instantly has a strategy mapped out
              for the team. Her talent is the foundation our future is built on.
            </p>
          </div>

          <Tilt options={defaultOptions}>
            <article
              style={{
                border: '30px solid transparent',
                borderImageSource: 'url("/images/gradient-border.png")',
                borderImageSlice: '30 fill',
                borderImageRepeat: 'round',
                zIndex: 2,
              }}
              className='my-10'
            >
              <div className='rounded-lg bg-primary/[.05] backdrop-blur-[15px] p-[30px] m-[-28px]'>
                <div className='overview mb-6 gap-5 md:gap-8'>
                  <div>
                    <h4 className='text-xl mb-4'>Total Projects</h4>
                    <div className='grid grid-cols-4 text-center text-sm'>
                      <h5>
                        20 <br />
                        <span className='text-slate-400'>Frontend</span>
                      </h5>
                      <h5>
                        2 <br />
                        <span className='text-slate-400'>Full Stack</span>
                      </h5>
                      <h5>
                        5 <br />
                        <span className='text-slate-400'>MERN Stack</span>
                      </h5>
                      <h5>
                        15 <br />
                        <span className='text-slate-400'>Backend</span>
                      </h5>
                    </div>
                  </div>
                </div>
                <hr className='border-gray-600' />
                <h4 className='my-4 text-md'>Recent Works</h4>
                <hr className='border-gray-600' />
                <table className='w-full font-light mt-5  border-spacing-[20px] table-auto max-md:text-sm'>
                  <tbody>
                    {/* Heading */}
                    <tr className='align-top text-slate-300 h-8 border-b-[1px] border-gray-600'>
                      <td>Stack</td>
                      <td>Rating</td>
                      <td>Time</td>
                      <td>Client</td>
                    </tr>
                    {/* Data */}
                    <tr className='align-center text-slate-400 border-b-[1px] border-gray-600 h-10'>
                      <td className='text-white'>Blockchain</td>
                      <td>4.8</td>
                      <td>2 Days Ago</td>
                      <td className='text-primary-300'>@niftking</td>
                    </tr>
                    <tr className='align-center text-slate-400 border-b-[1px] border-gray-600 h-10'>
                      <td className='text-white'>Frontend</td>
                      <td>4.4</td>
                      <td>1 Week Ago</td>
                      <td className='text-primary-300'>@mikasa</td>
                    </tr>
                    <tr className='align-center text-slate-400 border-b-[1px] border-gray-600 h-10'>
                      <td className='text-white'>Full Stack</td>
                      <td>5</td>
                      <td>2 Weeks Ago</td>
                      <td className='text-primary-300'>@adam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </Tilt>
        </div>
      </div>
    </div>
  )
}
