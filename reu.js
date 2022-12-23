const template=document.createElement("template");
template.innerHTML=`	
        <div class="container">
            <div class="burbujas">
                <span style="--i:11;"></span>
                <span style="--i:12;"></span>
                <span style="--i:24;"></span>
                <span style="--i:10;"></span>
                <span style="--i:14;"></span>
                <span style="--i:23;"></span>
                <span style="--i:18;"></span>
                <span style="--i:16;"></span>
                <span style="--i:19;"></span>
                <span style="--i:20;"></span>
                <span style="--i:22;"></span>
                <span style="--i:25;"></span>
                <span style="--i:18;"></span>
                <span style="--i:21;"></span>
                <span style="--i:15;"></span>
                <span style="--i:13;"></span>
                <span style="--i:26;"></span>
                <span style="--i:17;"></span>
                <span style="--i:13;"></span>
                <span style="--i:28;"></span>
                <span style="--i:11;"></span>
                <span style="--i:12;"></span>
                <span style="--i:24;"></span>
                <span style="--i:10;"></span>
                <span style="--i:14;"></span>
                <span style="--i:23;"></span>
                <span style="--i:18;"></span>
                <span style="--i:16;"></span>
                <span style="--i:19;"></span>
                <span style="--i:20;"></span>
                <span style="--i:22;"></span>
                <span style="--i:25;"></span>
                <span style="--i:18;"></span>
                <span style="--i:21;"></span>
                <span style="--i:15;"></span>
                <span style="--i:13;"></span>
                <span style="--i:26;"></span>
                <span style="--i:17;"></span>
                <span style="--i:13;"></span>
                <span style="--i:28;"></span>
                
            </div>
        </div>
        <style>
    .container{
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    .burbujas{
        position: relative;
        display: flex;
    }
    .burbujas span{
        position: relative;
        width: 30px;
        height: 30px;
        background: #4fc3dc;
        margin: 0 4px;
        border-radius: 50%;
        box-shadow: 0 0 0 10px #4fc3dc44,
        0 0 50px #4fc3dc,
        0 0 100px #4fc3dc;
        animation: animate 15s linear infinite;
        animation-duration: calc(125s/var(--i));
    
    }
    .burbujas span:nth-child(even){
        background: #fc1063;
        box-shadow: 0 0 0 10px #ff317944,
        0 0 50px #fc1063,
        0 0 100px #fc1063;
    }
    
    @keyframes animate {
        0%{
    transform: translateY(100vh)scale(0);
        }100%
        {
            transform: translateY(-10vh) scale(1);
        }
    }
    </style>`;


class reu extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
    }
}
customElements.define("menu-component",reu);