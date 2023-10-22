'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { PageTypes, Topics, defaultTopics, allTopics, ScrapedData, emptyScrapedData } from '@/types'
import { TopicBubbles } from '@/components/TopicBubbles'
import { TopicArticles } from '@/components/TopicArticles'

function topicsToArr(selectedTopics: Topics): string[] {
  let tempTopics = [];
  if (selectedTopics.usNews) {
    tempTopics.push("U.S. News");
  }
  if (selectedTopics.business) {
    tempTopics.push("Business");
  }
  if (selectedTopics.technology) {
    tempTopics.push("Technology");
  }
  if (selectedTopics.worldNews) {
    tempTopics.push("World News");
  }
  if (selectedTopics.science) {
    tempTopics.push("Science");
  }
  if (selectedTopics.lifestyle) {
    tempTopics.push("Lifestyle");
  }
  if (selectedTopics.sports) {
    tempTopics.push("Sports");
  }
  if (selectedTopics.arts) {
    tempTopics.push("Arts");
  }
  if (selectedTopics.health) {
    tempTopics.push("Health");
  }
  return tempTopics;
}

const Loading = () => {
  return (
    <div role="status" className="w-full text-center mt-[230px]">
      <svg aria-hidden="true" className="inline w-12 h-12 mr-2 animate-spin text-nord-1 fill-nord-10" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>)
}

interface CheckBoxProps {
  label: string;
  id: string;
  setAction: (b: boolean) => void;
  checked: boolean;
}

const CheckBox = ({ label, id, setAction, checked }: CheckBoxProps) => {
  const handleChange = () => {
    setAction(!checked);
  };

  return (
    <div className="min-w-[1.5rem] block ">
      <input
        className="rounded-sm border-1 mr-2 w-4 h-4 bg-nord-3  focus:ring-nord-4  focus:ring-2 border-nord-13"
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        value=""
        id={id}
      />
      <label className="pl-[0px] inline hover:cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

interface TopicSelectorProps {
  selectedTopics: Topics;
  setSelectedTopics: (selectedTopics: Topics) => void;
  homePageType: PageTypes;
  setHomePageType: (t: PageTypes) => void;
}

const TopicSelector = ({
  selectedTopics,
  setSelectedTopics,
  homePageType,
  setHomePageType,
}: TopicSelectorProps) => {
  const subimtPreferences = () => {
    setHomePageType("view");
    console.log(selectedTopics);
  };
  return (
    <div>
      {homePageType == "select" ? (
        <div className="bg-nord-3 min-w-[200px] pt-9 pb-4 flex flex-col gap-8 justify-center text-nord-4 lg:mx-[350px] md:mx-[300px] sm:mx-[150px] mx-[100px] mt-0 rounded-lg">
          <div className="text-left gap-7 flex flex-col lg:grid lg:grid-cols-3 lg:pl-[100px] md:grid md:grid-cols-2 md:px-[50px] sm:px-[75px] px-[75px]">
            <CheckBox
              label="U.S. News"
              id="0"
              setAction={(b) => {
                setSelectedTopics({ ...selectedTopics, usNews: b });
              }}
              checked={selectedTopics.usNews}
            />
            <CheckBox
              label="Business"
              id="1"
              setAction={(b) => {
                setSelectedTopics({ ...selectedTopics, business: b });
              }}
              checked={selectedTopics.business}
            />
            <CheckBox
              label="Technology"
              id="2"
              setAction={(b) => {
                setSelectedTopics({ ...selectedTopics, technology: b });
              }}
              checked={selectedTopics.technology}
            />
            <CheckBox
              label="World News"
              id="3"
              setAction={(b) => {
                setSelectedTopics({ ...selectedTopics, worldNews: b });
              }}
              checked={selectedTopics.worldNews}
            />
            <CheckBox
              label="Science"
              id="4"
              setAction={(b) => {
                setSelectedTopics({ ...selectedTopics, science: b });
              }}
              checked={selectedTopics.science}
            />
            <CheckBox
              label="Lifestyle"
              id="5"
              setAction={(b) => {
                setSelectedTopics({ ...selectedTopics, lifestyle: b });
              }}
              checked={selectedTopics.lifestyle}
            />
            <CheckBox
              label="Sports"
              id="6"
              setAction={(b) => {
                setSelectedTopics({ ...selectedTopics, sports: b });
              }}
              checked={selectedTopics.sports}
            />
            <CheckBox
              label="Arts"
              id="7"
              setAction={(b) => {
                setSelectedTopics({ ...selectedTopics, arts: b });
              }}
              checked={selectedTopics.arts}
            />
            <CheckBox
              label="Health"
              id="8"
              setAction={(b) =>
                setSelectedTopics({ ...selectedTopics, health: b })
              }
              checked={selectedTopics.health}
            />
          </div>
          <div className="flex sm:flex-row flex-col sm:gap-5 justify-center">
            <div className="text-center">
              <button
                onClick={() => {
                  setSelectedTopics(allTopics);
                }}
                className="lg:w-[120px] bg-nord-1 hover:bg-nord-2 rounded py-2 px-4 mb-2"
              >
                Select All
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={subimtPreferences}
                className="lg:w-[120px] bg-nord-1 hover:bg-nord-2 rounded py-2 px-4 mb-2"
              >
                Generate
              </button>
            </div>
            <div className="text-center">
              <button
                onClick={() => setSelectedTopics(defaultTopics)}
                className="lg:w-[120px] bg-nord-1 hover:bg-nord-2 rounded py-2 px-4 mb-2"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {homePageType == "view" ? (
        <div className="bg-nord-3 min-w-[200px] text-nord-4 mx-[350px] mt-0"></div>
      ) : (
        <></>
      )}
    </div>
  );
};

interface TopicDisplayProps {
  homePageType: PageTypes
  selectedTopics: Topics
}

interface ArticlesDisplayProps {
  homePageType: PageTypes
  selectedTopics: Topics
  loading: boolean
  scrapedData: ScrapedData
}

const ArticlesDisplay = ({ homePageType, selectedTopics, loading, scrapedData }: ArticlesDisplayProps) => {
  const [topics, setTopics] = useState<string[]>([])

  useEffect(() => {
    setTopics(topicsToArr(selectedTopics));
  }, [selectedTopics]);

  return (
    homePageType == 'view' ?
      loading ? <Loading /> :
        (
          topics.map((topic, index) => {
            return (<div key={index}>
              <TopicArticles topic={topic} scrapedData={scrapedData} />
            </div>)
          })
        ) : <></>)
}

const TopicDisplay = ({ homePageType, selectedTopics }: TopicDisplayProps) => {
  const [topics, setTopics] = useState<string[]>([]);

  useEffect(() => {
    setTopics(topicsToArr(selectedTopics));
  }, [selectedTopics]);

  return (
    homePageType == "view" && (
      <div className=" sticky top-0 bg-nord-0 vw-100 left-0 right-0 h-auto">
        <div className="mx-30 justify-center flex flex-row flex-wrap gap-6 p-2">
          {topics.map((topic, index) => {
            return (
              <div key={index}>
                <a href={`#${topic}`} className="cursor-pointer">
                  <TopicBubbles topic={topic} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default function Home() {
  const [selectedTopics, setSelectedTopics] = useState<Topics>(defaultTopics)
  const [homePageType, setHomePageType] = useState<PageTypes>('home')
  const [loading, setLoading] = useState<boolean>(true)
  const [scrapedData, setScrapedData] = useState<ScrapedData>(emptyScrapedData)

  const getData = async () => {
    console.log("starting")
    const nytres = await fetch('/api/scrapeNYTimes/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      })
    const NYTimesArticles = await nytres.json()
    const reures = await fetch('/api/scrapeReuters/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      })
    const ReutersArticles = await reures.json()
    let data: ScrapedData = {
      worldNews: NYTimesArticles.worldNews.concat(ReutersArticles.worldNews),
      usNews: NYTimesArticles.usNews.concat(ReutersArticles.usNews),
      science: NYTimesArticles.science.concat(ReutersArticles.science),
      technology: ReutersArticles.technology,
      business: NYTimesArticles.business.concat(ReutersArticles.business),
      sports: NYTimesArticles.sports.concat(ReutersArticles.sports),
      health: NYTimesArticles.health.concat(ReutersArticles.health),
      lifestyle: NYTimesArticles.lifestyle.concat(ReutersArticles.lifestyle),
      arts: NYTimesArticles.arts,
    };
    return data
  }

  useEffect(() => {
    getData().then((data) => {
      setScrapedData(data)
      setLoading(false)
    })
    // getData()
    //   .then((data) => {
    //     // Access the data from data.json() using await
    //     return data.json();
    //   })
    //   .then((parsedData) => {
    //     setScrapedData(parsedData.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching and parsing data:', error);
    //   });
  }, []);

  useEffect(() => {
    console.log(scrapedData)
  }, [scrapedData])

  return (
    <div className="bg-nord-0 min-h-[100vh]">
      {homePageType !== "home" && (
        <div className="bg-nord-1">
          <p
            onClick={() => setHomePageType("home")}
            className="cursor-pointer font-medium max-w-fit text-nord-6 text-4xl py-4 px-5 "
          >
            Gist
          </p>
        </div>
      )}
      {homePageType === "home" && (
        <div className="pt-[100px] font-medium text-nord-6 text-7xl text-center">Gist</div>
      )}
      <div className="flex flex-col">
        <div
          onClick={() => {
            switch (homePageType) {
              case "home":
                setHomePageType("select");
                break;
              case "select":
                setHomePageType("home");
                break;
              case "view":
                setHomePageType("select");
                break;
            }
          }}
          className="bg-nord-6 cursor-pointer rounded-full mt-8 py-4 text-nord-1 text-2xl lg:mx-[250px] md:mx-[150px] mx-[100px] px-10 font-medium text-center text-lg sm:text-2xl"
        >
          Give me the gist about...
        </div>
        <div className="ml-auto lg:mr-[285px] md:mr-[185px] w-0 h-0 border-t-transparent border-r-[50px] border-r-nord-6 border-b-[30px] border-b-transparent invisible md:visible"></div>
      </div>
      <TopicSelector
        selectedTopics={selectedTopics}
        setSelectedTopics={(selectedTopics: Topics) =>
          setSelectedTopics(selectedTopics)
        }
        homePageType={homePageType}
        setHomePageType={(t: PageTypes) => setHomePageType(t)}
      />
      <TopicDisplay
        homePageType={homePageType}
        selectedTopics={selectedTopics}
      />
      <ArticlesDisplay
        homePageType={homePageType}
        selectedTopics={selectedTopics}
        loading={loading}
        scrapedData={scrapedData}
      />
    </div>
  );
}
