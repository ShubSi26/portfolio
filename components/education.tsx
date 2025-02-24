import Image from "next/image"

export default function Education(){

    return(<>
        <div className="sm:px-72 p-5 font-bold text-4xl">
            Education
        </div>
        <div className="flex flex-row sm:gap-5 justify-center items-center p-2">
            <div className="flex justify-center items-center sm:gap-5 gap-2">
                <Image
                    src="/images/lpu.png"
                    alt="Education"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div>
                    <div className="sm:text-2xl text-md font-bold">
                        Lovely Professional University
                    </div>
                    <div className="text-md ">
                    B.Tech in Computer Science and Engineering
                    </div>
                </div>
            </div>
            <div className="sm:text-lg font-bold">
                CGPA - 8.66    
            </div>
            <div className="sm:text-lg font-bold">
                    2022 - 2026
            </div>
        </div>
    </>)
}