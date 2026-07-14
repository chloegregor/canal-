
interface Tab{
  id: number,
  label: string
}

interface tabProps{
  activeTab: number,
  onChange: (id: number) => void
  tabs: Tab[]

}

export default function Tabs({tabs, activeTab, onChange}: tabProps){

  return (
    <ul className="flex gap-5">
      {
        tabs.map((tab) => (
          <li key={tab.id} className={`w-fit ${activeTab === tab.id ? "border-b border-[var(--red)]" : 'border-none'} cursor-pointer`} onClick={() => onChange(tab.id)}>
            <h2>{tab.label}</h2>
          </li>
        ))
      }
    </ul>
  )
}
