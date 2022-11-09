import { FaCheck } from 'react-icons/fa'

interface CardProps {
  category: string
  description: string
  action: string
  itemsAction: string[]
  tools: string
  itemsTools: string[]
}

interface CardData {
  data: CardProps[]
}

const cardInfo = [
  {
    category: "SOFT SKILLS",
    description:
      "Tenho paixão pelo que faço, para isso estou em uma constante curva de aprendizagem para melhorar cada vez mais.",
    action: "EM AÇÃO, UTILIZO",
    itemsAction: [
      "Pensamento Crítico",
      "Resolução de Problemas Complexos",
      "Criatividade",
      "Foco",
    ],
    tools: "ferramentas",
    itemsTools: ["Jira", "Notion", "Figma", "Trello"],
  },
  {
    category: "HARD SKILL",
    description:
      "Valorizo o negócio ou a marca para a qual estou desenvolvendo, por isso me esforço em trazer novas ideias a realidade.",
    action: "PRINCIPAIS HABILIDADES",
    itemsAction: [
      "Node", "React", " React Native", "Redux", "Typescript",
    ],
    tools: "FERRAMENTAS",
    itemsTools: ["VSCode", "Github", "Docker", "AWS"],
  },
]

function Card({ data }: CardData):any {
  return data.map((category) => {
    return (
      <div key={category.category} className="ml-2">
        <h1 className="font-extrabold text-2xl text-slate-600 mt-4 bg-yellow-300 px-2 shadow-lg shadow-gray-500/50">{category.category}</h1>
        <p className="text-slate-500 mt-2" >{category.description}</p>
        <h2 className="text-slate-400 mt-2 uppercase">{category.action}</h2>
        <ul className="text-slate-500 mt-2">
          {category.itemsAction.map((action) => {
            return <li key={action} className="ml-8 list-disc 
            list-outside">{action}</li>
          })}
        </ul>
        <h2 className="text-slate-400 mt-2 uppercase">{category.tools}</h2>
        <ul className="text-slate-500 mt-2">
          {category.itemsTools.map((tools) => {
            return (<li key={tools} className="ml-8 list-disc 
            list-outside">{tools}</li>)
          })}
        </ul>
      </div>
    )
  })
}

export default function Skills() {
  return <Card data={cardInfo} />
}
