type WindowProps = {
	window: number;
};

const Window = ({
    window,
  }: WindowProps) => {
    return (
        <div className="p-2">
            <div className="p-2 h-[27rem] overflow-auto scrollbar-y">
            { window===0 &&
                <p className="font-mono">
                    --- software shopping list ---
                    <br/><br/>
                    <i>languages():</i><br/>&nbsp;&nbsp;&nbsp;&nbsp;javascript.js/.ts, <br/>&nbsp;&nbsp;&nbsp;&nbsp;python.py, <br/>&nbsp;&nbsp;&nbsp;&nbsp;html/css,<br/><br/>
                    <i>web frameworks</i> &#123;<br/>&nbsp;&nbsp;&nbsp;&nbsp;js: [react, next, astro, svelte]<br/>&nbsp;&nbsp;&nbsp;&nbsp;python: flask<br/>&#125;<br/><br/>
                    <i>db = () =&#62; &#123;</i>SQL, sqlite, mysql&#125;<br/><br/>
                    <i>&#60;tool&#62;</i><br/>&nbsp;&nbsp;&nbsp;&nbsp;photoshop.ps, illustrator.ai, .git<br/><i>&#60;tool&#62;</i><br/><br/>
                    <i>platforms = </i>[aws, linux]
                </p>
            }
            { window===1 &&
                <p className="font-mono">
                    &#60;&#60;&#60; dev kitchen &#62;&#62;&#62;
                    <br/><br/>
                    step 1 - <a className="text-blue-600 italic" href="https://bandpractice.jonathanmaggio.co.uk" target="_blank">band-practice:</a><br/>techs: next.js, react, trpc, prisma.<br/>a page for bands and musicians to keep track of songs. <a className=" text-gray-400 italic" href="https://github.com/JmThrCreator/band-practice" target="_blank">github</a><br/><br/>
                    step 2 - <a className="text-blue-600 italic" href="https://gravitygallery.jonathanmaggio.co.uk" target="_blank">gravity-gallery:</a><br/>techs: matter.js, vite.<br/>a gallery with physics. <a className=" text-gray-400 italic" href="https://github.com/JmThrCreator/gravity-gallery" target="_blank">github</a><br/><br/>
                    step 3 - <a className="text-blue-600 italic" href="https://khnoticeboard.jonathanmaggio.co.uk" target="_blank">kh-notice-board:</a><br/>techs: python, flask, sqlite.<br/>a notice board that can display PDF, JPEG and PNG files and manage attendance. <a className=" text-gray-400 italic" href="https://github.com/JmThrCreator/kh-notice-board" target="_blank">github</a><br/><br/>
                    step 4 - <span className="italic">jonathan_maggio.txt:</span><br/>techs: astro, react.<br/>this file. <a className=" text-gray-400 italic" href="https://github.com/JmThrCreator/portfolio" target="_blank">github</a><br/><br/>
                </p>
            }
            { window===2 &&
                <p className="font-mono">
                    email: j.maggio@live.co.uk
                </p>
            }
            </div>
        </div>
    )
}

export default Window;
