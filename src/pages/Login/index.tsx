import RioBackground from '../../assets/rio-pao-de-acucar.jpg'
import LoginLogo from '../../assets/login-logo.png'

export default function Login(){
    return (
        <main className='flex flex-row h-screen'>
            <div className='w-[50%] h-full relative overflow-hidden'>
                <img src={RioBackground} alt="Rio pão de açucar"  className='fixed top-0 left-0 h-full -z-10'/>
            </div>
            <div className='w-[50%] bg-[#F7FEDD] flex items-center justify-center h-full'>
                <img src={LoginLogo} alt="Logo Bossa Nova Stay" />
                
                <div className='flex flex-col gap-2'>
                    
                </div>
            </div>
        </main>
    )
}