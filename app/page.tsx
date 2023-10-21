import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-nord-0 h-screen">
      <div className="pt-[100px] text-white text-7xl text-center">Gist</div>
      <div className="flex flex-col">
        <div className="bg-white rounded-full mt-8 py-5  text-nord-1 text-2xl mx-[250px] px-10 font-normal text-center ">Give me the gist about...</div>
        <div className="ml-auto mr-[285px] w-0 h-0 border-t-transparent border-r-[50px] border-r-white border-b-[30px] border-b-transparent">
        </div>
      </div>
    </div>
  )
}
