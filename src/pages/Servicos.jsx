import { Footer, Navbar } from "../home";
import "./servicos.css"

function Servicos () {
    return (
        <div>
        <Navbar  />,
        <Servpage  />,
        <Footer  />
        </div>
    );
}


export function Servpage (){
    return (
        <div className="container">
            <div className="">
                <h1 id="title">Serviços</h1>
                <p className="descricao">Ut facilisis consectetur purus, vel bibendum nibh porta id. Nulla nulla lorem, fermentum ac imperdiet in, blandit sed mi. Vivamus a dictum lectus, id hendrerit neque. Mauris suscipit, odio at ultrices accumsan, est purus condimentum quam, in facilisis sem tellus sed nisl. Ut consequat lectus aliquet consectetur pharetra. Suspendisse tempus, quam nec pretium viverra, odio sapien vehicula nisi, quis gravida leo odio consectetur mauris. Etiam a quam facilisis, efficitur ante ac, tincidunt dui. Curabitur pharetra felis non nisl condimentum accumsan. Donec id arcu ante.</p>
            </div>
            <section id="servicos">
                    <h2 className="m-3">Barba</h2>
                <div className="areaserv">
                    <div className="row">
                        <div className="row col-lg-6 mb-3 p-2 bgrow">
                            <div className=" col-4">
                                <img src="../images/tesoura.png" alt="" />
                            </div>
                            <div className="col-8 bgrow">
                                <h4>Corte com Tesoura</h4>
                                <p className="Sdesc pe-2">O corte a tesoura é uma ótima opção para aqueles que desejam manter a barba mais longa, pois permite um corte preciso sem remover muito cabelo e mantendo o formato da usa barba. Experimente o corte de barba clássico feito com tesoura em nossa barbearia e sinta a diferença.</p>
                            </div>
                        </div>
                        
                        <div className="row col-lg-6 p-2 bgrow">
                            <div className=" col-4">
                                <img src="../images/navalha.png" alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Corte com Navalha</h4>
                                <p className="Sdesc pe-2">O corte de barba a navalha é utilizado em todos os cortes de barba para acabamentos, mas, se você tem uma barba mais curta, e quer dar um estilo nela, com um degradê ou um desenho alinhado, o corte todo em navalha possibilita fazer o corte perfeito para você.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="areaserv mt-3">
                    <div className="row">
                        <div className="row col-lg-6 p-2 mb-3 bgrow">
                            <div className=" col-4">
                                <img src="../images/barbo.png" alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Barboterapia</h4>
                                <p className="Sdesc pe-2">Na barboterapia, além do corte e aparo da barba, o profissional faz esfoliação e hidratação da pele com toques de relaxamento, o que ajuda a evitar o ressecamento, diminuindo o aparecimento de pelos encravados e acelerar as cicatrizações.</p>
                            </div>
                        </div>
                        
                        <div className="row col-lg-6 p-2 bgrow">
                            <div className=" col-4">
                                <img src="../images/hidrata.png" alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Hidratação de Barba</h4>
                                <p className="Sdesc pe-2">Não importa o tamanho da sua barba, se ela já está grande ou se você está começando agora a cultivar uma, a hidratação da barba é um passo importante pra que ela cresça saudável e com uma aparência mais alinhada, macia e sem arranhar.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="servicos" className="mt-3">
                    <h2 className="m-3">Cabelo</h2>
                <div className="areaserv">
                    <div className="row">
                        <div className="row col-lg-6 p-2 mb-3 bgrow">
                            <div className=" col-4">
                                <img src="../images/maquina.png" alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Máquina e Tesoura</h4>
                                <p className="Sdesc pe-2">Obtenha o corte perfeito com nossa combinação de técnicas de corte de cabelo com máquina e tesoura. A máquina é usada para remover a maior parte do cabelo e deixar o cabelo com comprimento desejado, enquanto a tesoura é usada para dar acabamento preciso e textura ao cabelo. Agende sua sessão hoje e experimente a diferença de um corte de cabelo feito com máquina e tesoura</p>
                            </div>
                        </div>
                        
                        <div className="row col-lg-6 p-2 bgrow">
                            <div className=" col-4 img-pos">
                                <img src="../images/navalhado.png" alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Degradê com Navalha</h4>
                                <p className="Sdesc pe-2">Experimente o corte de cabelo degrade navalhado em nossa barbearia. Este estilo de corte de cabelo é feito com uma combinação de técnicas de corte de cabelo com máquina e navalha para criar uma transição suave de comprimentos diferentes. A navalha é usada para criar uma textura desconectada e desfiada, enquanto a máquina é usada para remover o cabelo e criar o efeito de degrade. Este estilo de corte é perfeito para homens que querem um visual moderno e despojado. Agende sua sessão hoje e experimente a diferença de um corte degrade navalhado.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="areaserv mt-3">
                    <div className="row">
                        <div className="row col-lg-6 mb-3 p-2 bgrow">
                            <div className=" col-4">
                                <img src="../images/color.png" alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Coloração</h4>
                                <p className="Sdesc pe-2">Nossos profissionais altamente treinados irão usar técnicas avançadas para alcançar a cor desejada, seja ela platinado global, loiro acinzentado ou algumas mechas para dar aquele estilo.  Nós usamos somente os melhores produtos de coloração para garantir que seus cabelos fiquem saudáveis e brilhantes. Agende sua sessão hoje e experimente a diferença de uma coloração de alta qualidade</p>
                            </div>
                        </div>
                        
                        <div className="row col-lg-6 p-2 bgrow">
                            <div className=" col-4">
                                <img src="../images/progress.png" alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Progressiva</h4>
                                <p className="Sdesc pe-2">Alcance o cabelo liso e sedoso dos seus sonhos com nossa progressiva de alta qualidade. Nossos profissionais altamente treinados usarão produtos de última geração e técnicas avançadas para alisar seus cabelos, removendo o frizz e dando-lhe um cabelo mais saudável e brilhante. A progressiva também ajuda a fechar as cutículas do cabelo, o que ajuda a protegê-lo contra danos futuros. Além disso, nós oferecemos tratamentos pós-progressiva para manter seus cabelos saudáveis e lisos por mais tempo. Agende sua sessão hoje e experimente a diferença de um cabelo liso e sedoso com nossa progressiva de alta qualidade!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="servicos" className="mt-3">
                    <h2 className="m-3">Outros Servicos</h2>
                <div className="areaserv">
                    <div className="row">
                        <div className="row col-lg-6 mb-3 p-2 bgrow">
                        <div className=" col-4">
                            <img src="../images/bg1.png" alt="" />
                        </div>
                        <div className="col-8">
                            <h4>Sombrancelhas</h4>
                            <p className="Sdesc pe-2">Obtenha as sombrancelhas perfeitas com nossos profissionais altamente treinados em design de sombrancelhas. Nós oferecemos uma variedade de serviços, desde design até coloração, para ajudar a modelar e definir suas sombrancelhas. Agende sua sessão hoje e experimente a diferença de sombrancelhas perfeitas com nossos especialistas em design de sombrancelhas.</p>
                        </div>
                    </div>
                        
                        <div className="row col-lg-6 p-2 bgrow">
                            <div className=" col-4">
                                <img src="../images/bg1.png" alt="" />
                            </div>
                            <div className="col-8">
                                <h4>Selagem</h4>
                                <p className="Sdesc pe-2">Mantenha sua barba e cabelos saudáveis e brilhantes com nossa selagem de alta qualidade. Usamos produtos de alta qualidade para selar as cutículas dos fios, proporcionando hidratação, brilho e proteção contra danos futuros. A selagem também ajuda a prevenir a perda de umidade, o que pode deixar sua barba e cabelos mais saudáveis e fáceis de pentear. Agende sua sessão hoje e experimente a diferença de uma barba e cabelos saudáveis com nossa selagem de alta qualidade!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            
            
        </div>
        
    )
}


export default Servicos;