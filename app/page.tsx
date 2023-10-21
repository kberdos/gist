'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { PageTypes, Topics, defaultTopics } from '@/types'
import { TopicBubbles } from '@/components/TopicBubbles'

interface CheckBoxProps {
  label: string
  id: string
  setAction: (b: boolean) => void
  checked: boolean
}

const CheckBox = ({ label, id, setAction, checked }: CheckBoxProps) => {

  const handleChange = () => {
    setAction(!checked)
  }

  return (
    <div className="min-w-[1.5rem] block ">
      <input
        className="rounded-sm border-1 mr-2 w-4 h-4 bg-nord-3  focus:ring-nord-4  focus:ring-2 border-nord-13"
        type="checkbox"
        checked={checked}
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

interface TopicSelectorProps {
  selectedTopics: Topics
  setSelectedTopics: (selectedTopics: Topics) => void
  homePageType: PageTypes
  setHomePageType: (t: PageTypes) => void
}

const TopicSelector = ({ selectedTopics, setSelectedTopics, homePageType, setHomePageType }: TopicSelectorProps) => {

  const subimtPreferences = () => {
    setHomePageType('view')
    console.log(selectedTopics)
  }
  return (
    <div>
      {homePageType == 'select' ? (<div className="bg-nord-3 min-w-[200px] text-nord-4 mx-[350px] mt-0">
        <div className="text-left gap-7  flex flex-col lg:grid lg:grid-cols-3 bg-nord-3 lg:pl-[80px] pl-[40px] py-8 ">
          <CheckBox
            label="U.S. News"
            id="0"
            setAction={(b) => { setSelectedTopics({ ...selectedTopics, usNews: b }) }}
            checked={selectedTopics.usNews}
          />
          <CheckBox
            label="Business"
            id="1"
            setAction={(b) => { setSelectedTopics({ ...selectedTopics, business: b }) }}
            checked={selectedTopics.business}
          />
          <CheckBox
            label="Technology"
            id="2"
            setAction={(b) => { setSelectedTopics({ ...selectedTopics, technology: b }) }}
            checked={selectedTopics.technology}
          />
          <CheckBox
            label="World News"
            id="3"
            setAction={(b) => { setSelectedTopics({ ...selectedTopics, worldNews: b }) }}
            checked={selectedTopics.worldNews}
          />
          <CheckBox
            label="Science"
            id="4"
            setAction={(b) => { setSelectedTopics({ ...selectedTopics, science: b }) }}
            checked={selectedTopics.science}
          />
          <CheckBox
            label="Fashion"
            id="5"
            setAction={(b) => { setSelectedTopics({ ...selectedTopics, fashion: b }) }}
            checked={selectedTopics.fashion}
          />
          <CheckBox
            label="Sports"
            id="6"
            setAction={(b) => { setSelectedTopics({ ...selectedTopics, sports: b }) }}
            checked={selectedTopics.sports}
          />
          <CheckBox
            label="Art"
            id="7"
            setAction={(b) => { setSelectedTopics({ ...selectedTopics, art: b }) }}
            checked={selectedTopics.art}
          />
          <CheckBox
            label="Health"
            id="8"
            setAction={(b) => setSelectedTopics({ ...selectedTopics, health: b })}
            checked={selectedTopics.health}
          />
        </div>
        <div className="text-center" onClick={subimtPreferences}>
          <button className="bg-nord-1 hover:bg-nord-2 rounded py-2 px-4 mb-2">Generate</button>
        </div>
      </div >) : <></>}
      {homePageType == 'view' ? (<div className="bg-nord-3 min-w-[200px] text-nord-4 mx-[350px] mt-0"></div>) : <></>}
    </div>)
}

interface TopicDisplayProps {
  homePageType: PageTypes
  selectedTopics: Topics
}
const TopicDisplay = ({ homePageType, selectedTopics }: TopicDisplayProps) => {
  const [topics, setTopics] = useState<string[]>([])

  useEffect(() => {
    let tempTypes = []
    if (selectedTopics.usNews) {
      tempTypes.push('U.S. News')
    }
    if (selectedTopics.business) {
      tempTypes.push('Business')
    }
    if (selectedTopics.technology) {
      tempTypes.push('Technology')
    }
    if (selectedTopics.worldNews) {
      tempTypes.push('World News')
    }
    if (selectedTopics.science) {
      tempTypes.push('Science')
    }
    if (selectedTopics.fashion) {
      tempTypes.push('Fashion')
    }
    if (selectedTopics.sports) {
      tempTypes.push('Sports')
    }
    if (selectedTopics.art) {
      tempTypes.push('Art')
    }
    if (selectedTopics.health) {
      tempTypes.push('Health')
    }
    setTopics(tempTypes)
  }, [selectedTopics])

  return (
    homePageType == 'view' && (
      <div className="mt-4 justify-center flex flex-row gap-10">
        {topics.map((topic, index) => {
          return <div key={index}>
            <TopicBubbles topic={topic}></TopicBubbles>
          </div>
        })}
      </div>
    )
  )
}

export default function Home() {
  const [selectedTopics, setSelectedTopics] = useState<Topics>(defaultTopics)
  const [homePageType, setHomePageType] = useState<PageTypes>('home')

  return (
    <div className="bg-nord-0 min-h-[100vh]">
      {homePageType !== 'home' && (
        <div className="bg-nord-1">
          <p className="text-nord-6 text-4xl py-4 px-5 ">Gist</p>
        </div>)}
      {homePageType === 'home' && (<div className="pt-[100px] text-nord-6 text-7xl text-center">Gist</div>)}
      <div className="flex flex-col">
        <div
          onClick={() => {
            switch (homePageType) {
              case 'home':
                setHomePageType('select')
                break
              case 'select':
                setHomePageType('home')
                break
              case 'view':
                setHomePageType('select')
                break
            }
          }
          }
          className="bg-nord-6 cursor-pointer rounded-full mt-8 py-4  text-nord-1 text-2xl mx-[250px] px-10 font-normal text-center ">Give me the gist about...</div>
        <div className="ml-auto mr-[285px] w-0 h-0 border-t-transparent border-r-[50px] border-r-nord-6 border-b-[30px] border-b-transparent">
        </div>
      </div>
      <TopicSelector
        selectedTopics={selectedTopics}
        setSelectedTopics={(selectedTopics: Topics) => setSelectedTopics(selectedTopics)}
        homePageType={homePageType}
        setHomePageType={(t: PageTypes) => setHomePageType(t)}
      />
      <TopicDisplay
        homePageType={homePageType}
        selectedTopics={selectedTopics} />
    </div>
  )
}
