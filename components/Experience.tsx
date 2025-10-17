import Image from "next/image"

export default function Experience(){

    return(<>
        <div className="sm:px-72 p-5 font-bold text-4xl text-center sm:text-left">
            Experience
        </div>
        <div className="flex flex-row sm:gap-5 justify-center items-center p-2">
            <div className="flex justify-center items-center sm:gap-5 gap-2">
                <Image
                    src="/images/acko.png"
                    alt="Education"
                    width={50}
                    height={50}
                    className=""
                />
                <div>
                    <div className="sm:text-2xl text-md font-bold">
                        Acko General Insurance
                    </div>
                    <div>
                        Devops Engineer Intern
                    </div>
                    
                </div>
            </div>
            <div className="sm:text-lg font-bold">
                    July 2025 - Present
            </div>
        </div>
    </>)
}