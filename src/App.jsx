import './App.css'
import git from './Images/git.svg'
import linkedin from './Images/linkedin.svg'
import html from './Images/html.svg'
import css from './Images/css.svg'
import javascript from './Images/javascript.svg'
import react from './Images/react.svg'
import line from './Images/line.svg'
import { useEffect, useState } from 'react'
function App() {
        const arquitetura ='https://img.hotimg.com/projeto-1.jpeg'
        const portfolio ='https://img.hotimg.com/projeto-2.jpeg'
        const bootcamp ='https://img.hotimg.com/projeto-3.jpeg'
        const ccxp22 ='https://img.hotimg.com/projeto-4.jpeg'
  
        const [text, setText] = useState('');
        const toRotate = ['Gabriel Santiago', 'Programador', 'Desenvolvedor Front-end'];
        const [loop, setLoop] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const period = 100;
        const [delta, setDelta] = useState(100);

        useEffect(()=>{
            let ticker = setInterval(()=>{
                toType()
            }, delta)
            return()=> {clearInterval(ticker)}

        }, [text])

        const toType = ()=>{
            let i = loop % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

            setText(updatedText);

            if(!isDeleting && updatedText === fullText){
                setIsDeleting(true);
                setDelta(period);
            }else if (isDeleting && updatedText === ''){
                setIsDeleting(false);
                setDelta(period);
                setLoop(loop+1);
            }
        }
  return (
    <div>
      
      <div className='navbar'>
          <div className='navbar-select'>
            <a href='#projects'>Projetos</a>
            <a href='#skills'>Habilidades</a>
            <a href='#aboutme'>Sobre mim</a>
          </div>
          <div className='navbar-icons'>
            <a href='https://github.com/s4ntt'><img src={git}/></a>
            <a href='https://www.linkedin.com/in/gabriel-santiago-a080182b8/'><img src={linkedin}/></a>
        </div>
      </div>


      <div className='presentation'>
        <h1>Olá, eu sou {text}</h1>
        <h3>Fascinado pela interface digital<br/>
            envolvente, atraente e acessível.</h3>
        <a href='https://github.com/s4ntt'><button> Meu repósitorio </button></a>
      </div>


      <div id='skills' className='skills'>
        <div>
          <h1>Habilidades</h1>
        </div>
        <div className='skills-icons'>
          <img src={html}/>
          <img src={css}/>
          <img src={javascript}/>
          <img src={react}/>
        </div>
      </div>

      <div id='projects' className='projects'>
        <div>
          <h1>Projetos</h1>
        </div>
        <div className='projects-cards'>
          <div className='projects-cards1'>
            <div className='cards-mod' id='card1'>
              <a href="https://projeto-arquitetura-gabriel.netlify.app/"><img src={arquitetura}/></a>
              <h2>Projeto Arquitetura</h2>
              <h4>Projeto desenvolvido na escola DNC,<br/>
                 com o objetivo de entregar um site<br/>
                 para uma empresa que executa serviços<br/>
                 na área da arquitetura.</h4>
              <a href="https://projeto-arquitetura-gabriel.netlify.app/"><button>Acesse o site</button></a>
            </div>
            <div className='cards-mod' id='card2'>
              <a href='https://jade-ganache-62b86a.netlify.app/'><img src={portfolio}/></a>
              <h2>Projeto Portfólio</h2>
              <h4>Projeto desenvolvido na escola DNC,<br/>
                  com o objetivo de entregar um site<br/>
                  para um cliente, onde deva conter<br/>
                  todas as informações sobre o seu porfólio.</h4>
              <a href='https://jade-ganache-62b86a.netlify.app/'><button>Acesse o site</button></a>
            </div>
          </div>
          <div className='projects-cards2'>
            <div className='cards-mod' id='card3'>
              <a href='https://bootcamp-dnc-teal.vercel.app/'><img src={bootcamp}/></a>
              <h2>Projeto Bootcamp</h2>
              <h4>Projeto desenvolvido na escola DNC,<br/>
                  com o objetivo de aprender e exercitar<br/>
                  ferramentas do html e css,<br/>
                  como forms e inputs.</h4>
              <a href='https://bootcamp-dnc-teal.vercel.app/'><button>Acesse o site</button></a>
            </div>
            <div className='cards-mod' id='card4' >
              <a href='https://ccxp-22.vercel.app/'><img src={ccxp22}/></a>
              <h2>Projeto CCXP22</h2>
              <h4>Projeto desenvolvido na escola DNC,<br/>
                  com o objetivo de aprender e exercitar<br/>
                  ferramentas do javascript, como<br/>
                  o cronômetro e a venda de ingressos.</h4>
              <a href='https://ccxp-22.vercel.app/'><button>Acesse o site</button></a>
            </div>
          </div>

        </div>
      </div>

      <div id='aboutme' className='aboutme'>
        <h1>Sobre mim</h1> 
        <div className='dates'>
          <div>
            <h2>2021</h2>     
          </div>
          <div>
            <h2>2022</h2>           
          </div>
          <div>
            <h2>2023</h2>
          </div>
          <div>
            <h2>2024</h2>
          </div>    
        </div>
        <img src={line}/>
        <div className='description'>
          <h3>Neste ano, fazia 3 anos<br/>
              que eu trabalhava como<br/> 
              Poker Dealer, onde eu <br/>
              estava me especializando<br/>
              em Cash Game, nas modalidades<br/>
               de Texas Hold'em e<br/>
               Omaha 4/5/6 cartas.</h3>
          <h3>Aqui eu já me senti<br/>
              seguro e pronto<br/>
              para descobir até onde<br/>
              a profissão de Poker Dealer<br/>
              poderia me levar, viajando<br/>
              para vários locais<br/> 
              do Brasil.</h3>
          <h3>Depois de longos anos<br/>
              exercendo minha profissão,<br/>
              eu me senti completamene<br/>
              desvalorizado e limitado,<br/>
              devido a falta de conhecimento<br/>
              das pessoas sobre o Poker.<br/>
              Foi onde escolhi aprender algo<br/>
              novo...</h3>
          <h3>Tomando essa decisão<br/>
              foi neste ano que<br/>
              eu conheci a DNC,<br/> 
              onde me apaixonei pelo<br/>
              Desenvolvimento Full Stack,<br/>
              e sigo estudando.</h3>
          
        </div>
        
      </div>

      <div className='footer'>
        <div className='contacts'>
          <div>
            <h2>Meu contato:<br/>
                62 9 8117-3794
            </h2>
          </div>
          <div id='email'>
            <h2>Email:<br/>
                s4nt.dnc@gmail.com</h2>
          </div>
        </div>
        <div id='icons'>
          <a href='https://github.com/s4ntt'><img src={git}/></a>
          <a href='https://www.linkedin.com/in/gabriel-santiago-a080182b8/'><img src={linkedin}/></a>
        </div>
      </div>
    </div>
  )
}

export default App
