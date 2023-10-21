'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Topics, defaultTopics } from '@/types'

interface CheckBoxProps {
  label: string
  id: string
  setAction: (b: boolean) => void
}

const CheckBox = ({ label, id, setAction }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleChange = () => {
    setIsChecked(!isChecked)
    setAction(!isChecked)
  }

  return (
    <div className="min-w-[1.5rem] block ">
      <input
        className="mr-2 w-4 h-4 bg-nord-3 rounded focus:ring-nord-4  focus:ring-2 border-nord-13"
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        value=""
        id={id} />
      <label
        className="pl-[0px] inline hover:cursor-pointer"
        htmlFor={id}>
        {label}
      </label>
    </div>)
}

const TopicSelector = () => {
  const [selectedTopics, setSelectedTopics] = useState<Topics>(defaultTopics)

  useEffect(() => {
    console.log(selectedTopics)
  }, [selectedTopics])
  return (
    <div className="text-left gap-7 min-w-[200px] flex flex-col lg:grid lg:grid-cols-3 bg-nord-3 lg:pl-[80px] pl-[40px] py-8 text-nord-4 mx-[350px] mt-0">
      <CheckBox
        label="U.S. News"
        id="0"
        setAction={(b) => { setSelectedTopics({ ...selectedTopics, usNews: b }) }}
      />
      <CheckBox
        label="Business"
        id="1"
        setAction={(b) => { setSelectedTopics({ ...selectedTopics, business: b }) }}
      />
      <CheckBox
        label="Technology"
        id="2"
        setAction={(b) => { setSelectedTopics({ ...selectedTopics, technology: b }) }}
      />
      <CheckBox
        label="World News"
        id="3"
        setAction={(b) => { setSelectedTopics({ ...selectedTopics, worldNews: b }) }}
      />
      <CheckBox
        label="Science"
        id="4"
        setAction={(b) => { setSelectedTopics({ ...selectedTopics, science: b }) }}
      />
      <CheckBox
        label="Fashion"
        id="5"
        setAction={(b) => { setSelectedTopics({ ...selectedTopics, fashion: b }) }}
      />
      <CheckBox
        label="Sports"
        id="6"
        setAction={(b) => { setSelectedTopics({ ...selectedTopics, sports: b }) }}
      />
      <CheckBox
        label="Art"
        id="7"
        setAction={(b) => { setSelectedTopics({ ...selectedTopics, art: b }) }}
      />
      <CheckBox
        label="Health"
        id="8"
        setAction={(b) => setSelectedTopics({ ...selectedTopics, health: b })}
      />
    </div>)
}

export default function Home() {
  return (
    <div className="bg-nord-0 min-h-[100vh]">
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
