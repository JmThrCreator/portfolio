import { XMarkIcon, StopIcon, MinusIcon } from '@heroicons/react/24/outline';

type Props = {
	window: number;
    setWindow: React.Dispatch<React.SetStateAction<number>>;
};

const Navbar = ({
    window,
    setWindow,
  }: Props) => {
    return (
        <div className="bg-gray-100/50 border-b rounded-t-lg">
            <div className="flex py-2 pl-5 pr-4">
                <h1 className="text-sm">jonathan_maggio.txt</h1>
                <div className="ml-auto flex gap-7">
                    <MinusIcon className="w-4 h-4"/>	
                    <StopIcon className="w-4 h-4"/>							  
                    <XMarkIcon className="w-4 h-4"/>										
                </div>
            </div>
            <div className="flex items-center py-2 px-5 text-sm gap-5">
                <button onClick={()=>{setWindow(0)}} className={`${window===0 ? "text-black":"text-gray-500"}`}>About</button>
                <button onClick={()=>{setWindow(1)}} className={`${window===1 ? "text-black":"text-gray-500"}`}>Projects</button>
                <button onClick={()=>{setWindow(2)}} className={`${window===2 ? "text-black":"text-gray-500"}`}>Contact</button>
            </div>
        </div>
    )
}

export default Navbar;