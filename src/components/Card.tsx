import { PopulationData } from "@/common/types"
import { convertToInternationalCurrencySystem } from "@/common/utils"

export const Card = ({
    props
} : {
    props: PopulationData
}) => {

    return (
        <div className="flex flex-col items-center p-4 bg-slate-100 rounded-md md:p-4 lg:p-8 xl:p-8">
            <p className="text-cyan-700 font-bold text-xs md:text-sm lg:text-base xl:text-lg">Year</p>
            <p>{props.Year}</p>
            <p className="text-cyan-700 font-bold text-xs md:text-sm lg:text-base xl:text-lg">Population</p>
            <p>{convertToInternationalCurrencySystem(props.Population)}</p>
        </div>
    )
}