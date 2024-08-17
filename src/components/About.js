import React, { useState } from 'react'

export default function About() {
    const[mystyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
const [btntext,setBtnText]=useState('enable Dark Mode')
  const  toggleStyle =() =>{
        if(mystyle.color ==='black'){
            setMyStyle({
                 color:'white',
        backgroundColor:'black',
        border:'1px solid white',
            })

            setBtnText('Enable Light Mode')
        }
        else{
            setMyStyle({
                  color:'black',
        backgroundColor:'white'
            })

            setBtnText('Enable Dark Mode')
        }
    }
  return (
    <div>
    <div className='container' style={mystyle}>
                        <h1>About us</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam alias eos velit eveniet iure excepturi in saepe qui officia hic? Quis enim dignissimos quod tempora voluptas corporis nam ut! Itaque officiis nemo totam. Unde, rerum ex nisi amet suscipit minus, esse voluptatum asperiores voluptas accusantium excepturi dolorem tempora id similique natus illum recusandae modi tenetur? Ipsam itaque commodi placeat dolorem, autem excepturi molestias ratione explicabo voluptas architecto fugiat mollitia, vitae distinctio non, in vero? Saepe magni soluta, dolor praesentium voluptatibus quas aspernatur voluptate odit facilis aut quae sed, adipisci quaerat a, error quia? Placeat vero dolorem at illum omnis voluptatum?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, tempore at. Repellendus, quia nam possimus corrupti voluptates quod obcaecati magnam ad officiis iure est debitis veritatis eos. Dicta obcaecati accusamus libero excepturi vel voluptatum facere saepe aliquid nulla quasi aut at assumenda, exercitationem ex mollitia alias dolor laudantium? Fugit minus repellat nisi officiis culpa rerum ratione! Ducimus autem nihil necessitatibus architecto aliquam, libero debitis enim tempore tempora. Debitis incidunt a ducimus veniam non totam amet quos, sequi, facilis quaerat tempora temporibus eius doloremque aut ab itaque eum eos eligendi esse sed praesentium architecto officia nisi. Unde, dolore. Magni, possimus consequatur!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dolore, omnis excepturi alias porro temporibus provident. Iure sint iste similique nulla vero natus nesciunt odit iusto tempora eaque incidunt hic consequatur, id, quidem consequuntur tenetur, quia optio quibusdam debitis facilis alias accusantium? Dolore, eveniet doloremque! Totam ut quaerat, illo, itaque quia, tempore quod eveniet labore nihil deserunt unde consequuntur illum? Consequuntur nam, iste libero velit, impedit veniam et explicabo ullam, accusamus officiis mollitia animi aut atque temporibus? Architecto, ad cum. Quasi, quibusdam itaque? Doloribus optio neque laboriosam in odio minus error animi aliquam. Repudiandae omnis laudantium in sit similique quas.</p>
                
   


                    <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mystyle}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
   <button type='button' onClick={toggleStyle} className='btn btn-primary my-3'>{btntext}</button>
    </div>





    </div>
  )
}
