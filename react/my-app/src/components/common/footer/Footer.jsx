import React from 'react';
import './Footer.css';
import ideLogo from './/imagens/imagem_ide.png';
import cbfLogo from './/imagens/logo-cbf.png';
export default function Footer() {
  return (
    <div>
      <footer className=" text-center text-lg-start text-light">
        {/*<!-- Grid container -->*/}
        <div className="container p-4">
          {/*<!--Grid row-->*/}
          <div className="row">
             {/*<!--Grid column-->*/}
            <div className="col-lg-2 col-md-4  ">
            <img src={cbfLogo} alt = "Cbf Company"></img>

              
            </div>
             {/*<!--Grid column-->*/}

             

             {/*<!--Grid column-->*/}
            <div className="col-lg-8 col-md-4 border-test">
              <div className="footer_texto border-test ">Confederação Brasileira de Futebol © x IDE © Todos os direitos reservados.</div>
             
             
             
             
              <div className="footer_texto border-test">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a href="#" className="nav-link">Termos de Uso</a>
                    </li>
                    <li className="nav-item divisor">|</li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Politica de Privacidade</a>
                    </li>
                    <li className="nav-item divisor">|</li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">Política de Cookies</a>
                    </li>

                    

                    
                  </ul>
                </div> 
              
            </div>
            {/*<!--Grid column-->*/}

             {/*<!--Grid column-->*/}
            <div className="col-lg-2 col-md-4 ">
              <img src={ideLogo} alt = "Ide Company" className='' ></img>

              
            </div>
             {/*<!--Grid column-->*/}
          </div>
           {/*<!--Grid row-->*/}
        </div>
        {/*<!-- Grid container -->*/}   
       
      </footer>
    </div>
  )
}
