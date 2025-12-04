export default function Home(){
    return(
        <div className="bg-[radial-gradient(circle_at_center,#2c2c2c,#0d0d0d)] flex flex-col justify-center items-center min-h-screen text-white p-6 overflow-hidden" >
            <div className="rounded-2xl shadow-lg p-10 w-full max-w-md bg-[rgba(0,0,0,0.4)] space-y-10 flex-1 flex-col items-center justify-center ">
                <p className="w-full text-xl text-center">Your Secret Message Link</p>
                <p className="w-full p-2 rounded-lg bg-[rgba(50,50,50,1)] text-center text-4xl font-light">URL</p>
            </div>
        </div>
    )
}