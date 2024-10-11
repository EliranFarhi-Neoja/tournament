'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleManagerRegister = () => {
    router.push('/managers/start');
  };

  const handleManagerLogin = () => {
    router.push('/managers/login');
  };

  const handleOperatorJoin = () => {
    router.push('/operators/start');
  };

  const handleDisplayStart = () => {
    router.push('/display/start');
  };

  const handleDisplayQRCode = () => {
    router.push('/display/qr');
  };

  const handleDisplayDuringRegistration = () => {
    router.push('/display/duringregistration');
  };

  const handleDisplayDuringGame = () => {
    router.push('/display/duringgame');
  };

  const handleDisplayScore = () => {
    router.push('/display/displayscore');
  };

  return (
    <div className='h-screen text-white'>
      <div className="flex justify-around gap-6 pt-24 px-20">
        <div className="orange-yellow-gradient flex flex-col justify-center items-center rounded-xl pb-3 pt-4 min-w-96">
                <div className="pt-8 pb-3">
                    <p className="text-4xl md:text-4xl font-bold drop-shadow-2xl">Manager</p>
                </div>
                <div className='flex gap-4 md:gap-6 lg:gap-8 flex-col justify-start overflow-y-auto pt-8 md:pt-10 lg:pt-14 pb-8 w-full px-4 h-full'>
                    <button onClick={handleManagerRegister} className='bg-darkOrange shadow-xl text-xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        Register
                    </button>
                    <button onClick={handleManagerLogin} className='bg-darkOrange shadow-xl text-xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        Login
                    </button>
                </div>
          </div>
          <div className="orange-yellow-gradient flex flex-col justify-center items-center rounded-xl pb-3 pt-4 min-w-96">
                <div className="pt-8 pb-3">
                    <p className="text-4xl md:text-4xl font-bold drop-shadow-2xl">Operator</p>
                </div>
                <div className='flex gap-4 md:gap-6 lg:gap-8 flex-col justify-start overflow-y-auto pt-8 md:pt-10 lg:pt-14 pb-8 w-full px-4 h-full'>
                  <button onClick={handleOperatorJoin} className='bg-darkOrange shadow-xl text-xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        Join
                  </button>
                </div>
          </div>
          <div className="orange-yellow-gradient flex flex-col justify-center items-center rounded-xl pb-3 pt-4 min-w-96">
                <div className="pt-8 pb-3">
                    <p className="text-4xl md:text-4xl font-bold drop-shadow-2xl">Display</p>
                </div>
                <div className='flex gap-4 md:gap-6 lg:gap-8 flex-col justify-start overflow-y-auto pt-8 md:pt-10 lg:pt-14 pb-8 w-full px-4 h-full'>
                    <button onClick={handleDisplayStart} className='bg-darkOrange shadow-xl text-xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        Start
                    </button>
                    <button onClick={handleDisplayQRCode} className='bg-darkOrange shadow-xl text-xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        QR Code
                    </button>
                    <button onClick={handleDisplayDuringRegistration} className='bg-darkOrange shadow-xl text-xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        During Registration
                    </button>
                    <button onClick={handleDisplayDuringGame} className='bg-darkOrange shadow-xl text-xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        During Game
                    </button>
                    <button onClick={handleDisplayScore} className='bg-darkOrange shadow-xl text-xl py-2 md:py-3 font-bold w-full max-w-xs mx-auto px-2 rounded-full'>
                        Display Score
                    </button>
                </div>
          </div>
      </div>
      
    </div>
  );
}