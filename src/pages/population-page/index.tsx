import { Card } from "@/components/Card";
import Image from "next/image";
import Error from "next/error";
import { PopulationData } from "@/common/types";

export default function PopulationPage ({ populationData, errorCode, errorMessage } : {populationData: Array<PopulationData>, errorCode: Number & number, errorMessage: string}) {
  return (
    errorCode ? <Error statusCode={errorCode} title={errorMessage}/> : <main>
      <div className="fixed -z-10 inset-0">
          <Image
              src='/background.jpg'
              fill
              alt='background image'
              quality={100}
          />
      </div>
      <div className="flex flex-col items-center justify-center px-12 mt-32">
      <div className="text-white mb-8 text-sm md:text-base lg:text-lg xl:text-xl font-bold">
        <h1>US Population Data</h1>
      </div>
        <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-8 xl:gap-10">
            {populationData.map((item, index) => {
            return (
                <Card props={item} key={index}/>
            )
            })}
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
  const data = await res.json()
  const populationData: Array<PopulationData> = data.data
  let errorCode
  let errorMessage

  if (res.status == 200) {
    if (populationData.length != 0) {
        errorCode = false
        errorMessage = false;
    }
    else {
        errorCode = 404
        errorMessage = "Not Found"
    }
  }
  else {
    errorCode = false
    errorMessage = false
  }

  return {
    props: {
      errorCode, populationData, errorMessage
    }
  }
}