import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { capabilities } from '../data/portfolio'

const filters = ['all','ivr','api','automation','delivery','diagnostics','leadership'] as const
export default function CapabilityExplorer(){
 const [filter,setFilter]=useState<(typeof filters)[number]>('all')
 const visible=useMemo(()=>filter==='all'?capabilities:capabilities.filter(x=>x.id===filter),[filter])
 return <div>
  <div className="filter-bar">{filters.map(x=><button key={x} className={filter===x?'filter active':'filter'} onClick={()=>setFilter(x)}>{x}</button>)}</div>
  <div className="capability-grid">{visible.map(c=><article className="capability-card" key={c.id}>
   <div className="cap-top"><span>{c.label}</span><ArrowUpRight size={18}/></div><h3>{c.title}</h3><p>{c.description}</p>
   <div className="chips">{c.tags.map(t=><span key={t}>{t}</span>)}</div>
  </article>)}</div>
 </div>
}
