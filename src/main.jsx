import React,{useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Home,Plus,Database,Settings2,BarChart3,Image as ImageIcon,Brain,Sparkles,FileText,Send,Upload,Search,Lightbulb,Share2,CheckCircle2,Clock3,Target,Rocket,Users,ShieldCheck,Heart,ChevronDown,Play,Download,Menu,X,ArrowRight} from 'lucide-react';
import './styles.css';

const steps=[['Upload Data','CSV, Excel, SQL or connect directly',Upload,'blue'],['Prepare Data','Auto cleaning and missing values',Settings2,'green'],['Analyze','Choose analysis or let AI suggest',BarChart3,'purple'],['Visualize','Beautiful charts in one click',ImageIcon,'orange'],['Share & Export','Download, report or collaborate',Share2,'pink']];
const actions=[['Understand My Data','Get summaries & insights',Brain,'purple'],['Predict Something','Classification / Regression',Sparkles,'green'],['Find Patterns','Clustering / Segmentation',Search,'blue'],['Find Important Factors','Feature importance',Target,'orange'],['Detect Anomalies','Find unusual data',ShieldCheck,'red'],['Compare Groups','Statistical analysis',Users,'teal']];
const nav=[['Home',Home],['New Project',Plus],['Data',Database],['Prepare',Settings2],['Analyze',BarChart3],['Visualize',ImageIcon],['ML Models',Brain],['Auto Insights',Sparkles],['Reports',FileText],['Share',Send]];
function App(){
 const [active,setActive]=useState('Home'); const [menu,setMenu]=useState(false); const [toast,setToast]=useState('');
 const notify=(m)=>{setToast(m);setTimeout(()=>setToast(''),2200)};
 return <div className="app">
  <header className="mobileHead"><div className="brand"><div className="brandMark"><i/><i/><i/></div><div><b>DataEasy</b><span>Data Science, Made Easy</span></div></div><button onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  <aside className={menu?'side open':'side'}>
   <div className="brand desktop"><div className="brandMark"><i/><i/><i/></div><div><b>DataEasy</b><span>Data Science, Made Easy</span></div></div>
   <nav>{nav.map(([label,Icon])=><button key={label} className={active===label?'active':''} onClick={()=>{setActive(label);setMenu(false)}}><Icon size={18}/><span>{label}</span></button>)}</nav>
   <div className="assistant"><div className="bot">✦</div><b>AI Assistant</b><p>Ask anything about your data!</p><button onClick={()=>notify('AI Assistant is ready to help.')}>How can I help?</button></div>
  </aside>
  <main className="main">
   <section className="hero"><div className="heroText"><div className="eyebrow">DATA SCIENCE, MADE EASY</div><h1>From Data to Insights<br/><em>in Just a Few Clicks</em></h1><p>All the power of data science. None of the complexity.</p></div><div className="heroArt"><div className="quote">“Data science should be simple so you can focus on what matters — solving real problems.”</div><div className="person">👩🏻‍💻</div><div className="plant">🌿</div></div></section>
   <section className="flow">{steps.map(([t,d,Icon,c],i)=><React.Fragment key={t}><button className="flowCard" onClick={()=>notify(t+' opened')}><div className={'icon '+c}><Icon size={21}/></div><b>{i+1}. {t}</b><small>{d}</small></button>{i<steps.length-1&&<ArrowRight className="arrow" size={18}/>}</React.Fragment>)}</section>
   <section className="workspace">
    <div className="workspaceTop"><div><h2>Customer Churn Analysis <span>✎</span></h2><p>From raw data to valuable insights — in minutes.</p></div><div className="topActions"><span className="saved"><CheckCircle2 size={16}/> Saved</span><button onClick={()=>notify('Project shared')}>Share Project</button></div></div>
    <div className="columns">
     <div className="panel dataPanel"><div className="panelTitle"><b>1. Your Data</b><span>✓ Loaded Successfully</span></div><div className="file"><div className="fileIcon">▦</div><div><b>customers.csv</b><small>12,345 rows × 10 columns</small></div><button onClick={()=>notify('Preview opened')}>Preview</button></div><div className="tableWrap"><table><thead><tr><th>CustomerID</th><th>Age</th><th>Gender</th><th>Tenure</th><th>MonthlyCharges</th><th>Churn</th></tr></thead><tbody>{[['1001','34','Male','12','56.70','No'],['1002','28','Female','24','89.10','Yes'],['1003','45','Male','5','42.30','No'],['1004','23','Female','18','76.80','No'],['1005','52','Male','36','99.20','Yes']].map(r=><tr key={r[0]}>{r.map((x,j)=><td key={j}>{x}</td>)}</tr>)}</tbody></table></div></div>
     <div className="panel quick"><div className="panelTitle"><b>2. Quick Analysis</b><small>(Let AI Help)</small></div><p>Choose what you want to do:</p><div className="actions">{actions.map(([t,d,Icon,c])=><button key={t} onClick={()=>notify(t+' selected')}><div className={'icon '+c}><Icon size={18}/></div><span><b>{t}</b><small>{d}</small></span></button>)}</div><button className="auto" onClick={()=>notify('AI is analyzing your data ✨')}><Sparkles size={17}/> Auto Analyze My Data</button><small className="hint">Not sure? Let AI choose the best analysis for your data.</small></div>
     <div className="panel results"><div className="panelTitle"><b>3. Results</b></div><div className="tabs"><button className="selected">Visualization</button><button>Insights</button><button>Model</button><button>Code</button></div><div className="chartHead"><b>Customer Churn by Tenure</b><ChevronDown size={16}/></div><div className="chart"><div className="bars">{[28,48,65,58,53,45,38,27,21,17,15,12].map((h,i)=><i key={i} style={{height:h+'%'}}/> )}</div><div className="axis"><span>0</span><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span><span>60</span></div></div><div className="chartTypes">{['Bar','Line','Pie','Scatter','Heatmap','More'].map((x,i)=><button key={x} className={i===0?'on':''} onClick={()=>notify(x+' chart selected')}>{x}</button>)}</div></div>
    </div>
   </section>
   <section className="bottom"><div className="why"><h2>Why DataEasy?</h2><div className="whyGrid">{[[Clock3,'Saves Time','Automates the boring work'],[Target,'Easy to Use','No coding needed'],[Rocket,'Powerful','Advanced tools when you need them'],[Users,'For Everyone','Students, professionals'],[ShieldCheck,'Secure','Your data stays yours'],[Heart,'Focus on Impact','Turn data into real-world solutions']].map(([Icon,t,d])=><div key={t}><Icon/><b>{t}</b><small>{d}</small></div>)}</div></div><div className="cta"><h2>Start Your Project for Free</h2><p>Less Work. More Insights. A Brighter Tomorrow.</p><button onClick={()=>notify('New project created')}>Start Building <ArrowRight size={17}/></button></div></section>
  </main>{toast&&<div className="toast">{toast}</div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
