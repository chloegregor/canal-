
import Tabs from "../../components/tabs"
import Kpi from "../../components/kpi/kpi"
import Card from "../../components/kpi/cardKpi"
import GridKpi from "../../components/kpi/gridKpi"
import PieWithGradient from "../../components/kpi/pieChart"
import SimpleBarChart from "../../components/kpi/barChart"
import LineGraphicChart from "../../components/kpi/LineChart"
import FlexScroll from "../../components/flexScroll"
import { genresBar, top5_films, SubscribersLine, subscriptionFlowData, geoDistributionData, lastAdded, genresPie } from "../../data/kpi"

import { useState } from "react"
import { BarChart } from "recharts"


export default function Dashboard(){
  const [isActive, setIsActive] = useState(1)

  const tabs = [
    {id:1, label:'Général'}, {id:2, label:"Utilisateurs"}, {id:3, label:'Contenu'}
  ]


  return (
    <div>
      <h1>Dashboard</h1>
      <div className=' flex flex-col gap-10'>
        <Tabs tabs={tabs} onChange={setIsActive} activeTab={isActive}/>
          <div className="flex flex-col gap-10">
            {isActive === 1 ?
            <>
              <div  className="flex lg:flex-row flex-col gap-5">
                <div className=" flex-1 flex  gap-5 ">
                  <Kpi title={'Total utilisateurs'}>
                    <Card content={"8 254"} variation={8}></Card>
                  </Kpi>
                  <Kpi title={'Vues totales'}>
                    <Card content={"407 845"} variation={4}></Card>
                  </Kpi>
                </div>
                <div className="flex-1 flex gap-5">
                  <Kpi title={'Total des contenus'}>
                    <Card content={'654'} variation={-5}></Card>
                  </Kpi>
                  <Kpi title={'Temps de visionnage total'}>
                    <Card content={'142 822 h'} variation={14}></Card>
                  </Kpi>
                </div>
              </div>
              <div className="flex gap-5 lg:flex-row flex-col">
                <Kpi title={"Top 5 des contenus visionnés"}>
                  <GridKpi qty={5} data={top5_films}/>
                </Kpi>
              </div>
              <div className="flex gap-5 lg:flex-row flex-col">
                <Kpi title={"Top 3 genres visionnés"}>
                  <SimpleBarChart data={genresBar}/>
                </Kpi>
                <Kpi title={"Evolution du nombre d'abonnés "}>
                  <LineGraphicChart data={SubscribersLine}/>
                </Kpi>
              </div>
            </>
            : isActive === 2 ?
            <>
              <div  className="flex lg:flex-row flex-col gap-5 ">
                  <Kpi title={'Total abonnés'}>
                    <Card content={"8 254"} variation={8}></Card>
                  </Kpi>
                  <Kpi title={'Utilisateurs actifs quotidiens'}>
                    <Card content={"1250"} variation={14}></Card>
                  </Kpi>
                <div className="flex-1 flex lg:flex-row flex-col gap-5">
                  <Kpi title={'Taux de désabonnement'}>
                    <Card content={'2%'} variation={-0.8}></Card>
                  </Kpi>
                </div>
              </div>
              <div className="flex gap-5 lg:flex-row flex-col">
                <Kpi title={"Courbes d'inscriptions / désabonnements"}>
                  <LineGraphicChart data={subscriptionFlowData}></LineGraphicChart>
                </Kpi>
                <Kpi title={"Répartition géographique des abonnés"}>
                  <PieWithGradient data={geoDistributionData}/>
                </Kpi>
              </div>

            </>
            : isActive === 3 ?
              <>
                <div  className="flex lg:flex-row flex-col gap-5">
                  <div className="flex-1 flex gap-5">
                    <Kpi title={'Catalogue'}>
                      <Card content={'654'} variation={5}></Card>
                    </Kpi>
                    <Kpi title={'Taux de complétion'}>
                      <Card content={"59%"} variation={-10}></Card>
                    </Kpi>
                  </div>
                </div>
                <div className='flex w-full lg:flex-row flex-col gap-5 '>
                  <div className="flex-1 flex gap-5 lg:flex-row flex-col ">
                    <Kpi title={'Derniers ajout'}>
                      <FlexScroll data={lastAdded}/>
                    </Kpi>
                  </div>
                  <div className="flex-1">
                    <Kpi title={"Top 5 des contenus visionnés"}>
                      <GridKpi qty={5} data={top5_films}/>
                    </Kpi>
                  </div>
                </div>
                <div className="flex lg:flex-row flex-col gap-5">
                  <Kpi title={'Répartition des genres'}>
                    <PieWithGradient data={genresPie}/>
                  </Kpi>
                  <Kpi title={"Genres les plus vus"}>
                    <SimpleBarChart data={genresBar}/>
                  </Kpi>
                </div>
              </>
            :
            <>
            </>
            }
          </div>
      </div>
    </div>
  )
}
