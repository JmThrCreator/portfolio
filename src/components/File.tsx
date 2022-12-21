import Navbar from './Navbar';
import Window from './Window'
import { useState } from 'react';

const File = () => {
    const [window, setWindow] = useState(0)
    return (
        <section className="w-[26rem] rounded-lg bg-white border shadow-xl border-gray-300">
            <Navbar window={window} setWindow={setWindow}/>
            <Window window={window}/>
        </section>
    )
}

export default File;