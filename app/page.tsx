import Image from 'next/image'

interface CheckBoxProps {
  label: string
}

const CheckBox = ({ label }: CheckBoxProps) => {
  return (
    <div className="mb-[0.125rem] block min-h-[1.5rem] ">
      <input
        className="mr-2"
        type="checkbox"
        value=""
        id="checkboxDefault" />
      <label
        className="pl-[0px] hover:cursor-pointer"
        htmlFor="checkboxDefault">
        {label}
      </label>
    </div>)
}

const TopicSelector = () => {
  return (
    <div className="text-center gap-5 grid grid-cols-3 bg-nord-3 p-5 text-nord-4 mx-[350px] mt-0">
      <CheckBox label="U.S. News" />
      <CheckBox label="Business" />
      <CheckBox label="U.S. News" />
      <CheckBox label="U.S. News" />
      <CheckBox label="U.S. News" />
      <CheckBox label="U.S. News" />
      <CheckBox label="U.S. News" />
      <CheckBox label="U.S. News" />
    </div>)
}

export default function Home() {
  return (
    <div className="bg-nord-0 h-screen">
      <div className="pt-[100px] text-white text-7xl text-center">Gist</div>
      <div className="flex flex-col">
        <div className="bg-white cursor-pointer rounded-full mt-8 py-4  text-nord-1 text-2xl mx-[250px] px-10 font-normal text-center ">Give me the gist about...</div>
        <div className="ml-auto mr-[285px] w-0 h-0 border-t-transparent border-r-[50px] border-r-white border-b-[30px] border-b-transparent">
        </div>
      </div>
      <TopicSelector />
    </div>
  )
}
