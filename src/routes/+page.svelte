<!-- <script>
  import Hero from './components/hero.svelte';
  import HorizontalScrollableCards from './components/scrollable-cards.svelte';
  import AboutUs from './components/about-us.svelte';
  import ProductDetail from './components/product-details.svelte';
</script>

<main>
  <Hero />
  <HorizontalScrollableCards />
  <AboutUs />
  <ProductDetail />
</main>

<style lang="scss">
  /* Global styles here */
</style> -->

<svelte:head>
    <title>Pixelit Labs - LED Display Screens | Advertising LEDs | Brands</title>
</svelte:head>

<script>
    import IntersectionObserver from "svelte-intersection-observer";
    import {fade, fly} from "svelte/transition";

    let elementOnce;
    let intersectOnce;

    var contentClass1 = "inactive";
    var contentClass2 = "inactive";
    var contentClass3 = "inactive";
    var icon1 = "/down-arrow.png"
    var icon2 = "/down-arrow.png"
    var icon3 = "/down-arrow.png"
    var i;
    
    var clickEvent1 = () => {
        if (contentClass1 === "active") {
          contentClass1 = "inactive";
          icon1 = "/down-arrow.png"
        } else {
          contentClass1 = "active";
          icon1 = "/up-arrow.png"
        }
      }
      var clickEvent2 = () => {
        if (contentClass2 === "active") {
          contentClass2 = "inactive";
          icon2 = "/down-arrow.png"
        } else {
          contentClass2 = "active";
          icon2 = "/up-arrow.png"
        }
      }
      var clickEvent3 = () => {
        if (contentClass3 === "active") {
          contentClass3 = "inactive";
          icon3 = "/down-arrow.png"
        } else {
          contentClass3 = "active";
          icon3 = "/up-arrow.png"
        }
      }

    

</script>

<section class="hero">
  <div class="scroll-icon">
    <div class="icon"></div>
    <div class="text"><p>Scroll</p></div>
  </div>
    <div class="heading">
        <h1>India's Largest Advertising LED Distributors</h1>
    </div>
    
    <img id="heroImage" src="/pixelit-labs-hero.gif" alt="">
</section>
<section class="about">
    <IntersectionObserver once element={elementOnce} bind:intersecting={intersectOnce}>
        <div bind:this={elementOnce}>
            {#if intersectOnce}
            <div transition:fade={{delay: 300, duration: 500}}>
              <div class="horizontal-scroll">
                <div class="led-card"><img class="card-img" src="/product 1.png" alt=""><h5>P1 LED Panel</h5></div>
                <div class="led-card"><img class="card-img" src="/product 2.png" alt=""><h5>P1 LED Panel</h5></div>
                <div class="led-card"><img class="card-img" src="/product 3.png" alt=""><h5>P1 LED Panel</h5></div>
                <div class="led-card"><img class="card-img" src="/product 4.png" alt=""><h5>P1 LED Panel</h5></div>
                <div class="led-card"><img class="card-img" src="/product 5.png" alt=""><h5>P1 LED Panel</h5></div>
              </div>  
            </div>
            {/if}
        </div>
    </IntersectionObserver> 
</section>
<section class="clients">
    <div class="clientsImg">
        <img src="/Logo1.png" alt="">
        <img src="/Logo2.png" alt="">
        <img src="/Logo3.png" alt="">
        <img src="/Logo4.png" alt="">
        <img src="/Logo5.png" alt="">
        <img src="/Logo6.png" alt="">
        <img src="/Logo7.png" alt="">
        <img src="/Logo8.png" alt="">
        <img src="/Logo9.png" alt="">
        <!-- <img src="/Logo10.png" alt=""> -->
    </div>
    <h5>Brands who trust us.</h5>
</section>
<section class="details">
    <div class="previousWork">
        <h5>Our recent works.</h5>
        <IntersectionObserver once element={elementOnce} bind:intersecting={intersectOnce}>
        <div bind:this={elementOnce}>
            {#if intersectOnce}
            <div transition:fade={{delay: 300, duration: 500}}>
              <div class="horizontal-scroll">
                <div class="led-card"><img class="card-img" src="/product 1.png" alt=""><h5>P1 LED Panel</h5></div>
                <div class="led-card"><img class="card-img" src="/product 2.png" alt=""><h5>P1 LED Panel</h5></div>
                <div class="led-card"><img class="card-img" src="/product 3.png" alt=""><h5>P1 LED Panel</h5></div>
                <div class="led-card"><img class="card-img" src="/product 4.png" alt=""><h5>P1 LED Panel</h5></div>
                <div class="led-card"><img class="card-img" src="/product 5.png" alt=""><h5>P1 LED Panel</h5></div>
              </div>  
            </div>
            {/if}
        </div>
    </IntersectionObserver>
    </div>
</section>
<section class="info">
    <button type="button" class="collapsible" on:click={clickEvent1}><img src={icon1} style="color: azure; height: 20px; margin-right: 20px;" alt="">What is Virtual Production?</button>
    <div class={contentClass1}>
        <p>Virtual Production is a filmmaking technique that integrates real-time computer graphics, virtual reality, and motion capture to create visual effects, sets, and environments during the filming process.<br> <br>It allows filmmakers to view and interact with virtual objects and environments in real-time while shooting a scene, providing more creative control and flexibility.<br> <br>Virtual Production combines the use of physical sets and props with digital elements, allowing filmmakers to create immersive and realistic environments that were previously impossible to achieve. It can also be used to create pre-visualizations of a scene or sequence, helping filmmakers plan and visualize their shots before they are actually filmed.<br> <br>The technology used in Virtual Production has been rapidly advancing in recent years, with many filmmakers and studios adopting it for their productions. It has been used in films like The Mandalorian, The Lion King, and Avatar, among others.</p>
    </div>
    <button type="button" class="collapsible" on:click={clickEvent2}><img src={icon2} style="color: azure; height: 20px; margin-right: 20px;" alt="">How to build a Virtual Production Studio?</button>
    <div class={contentClass2}>
        <p>Building a Virtual Production Studio involves several steps and requires a combination of technologies, equipment, and personnel. Here are the general steps to build a Virtual Production Studio:<br>

            <br>1. Define the Scope: Determine the types of projects you plan to produce, the level of quality you want to achieve, and the budget you have available.<br>
            
            <br>2. Select the Space: Choose a suitable physical space that can accommodate the equipment and personnel needed for your Virtual Production Studio.<br>
            
            <br>3. Choose the Technology: Decide on the Virtual Production technologies you will use, such as motion capture, real-time rendering, virtual reality, and computer graphics.<br>
            
            <br>4. Build the Hardware: Build the necessary hardware infrastructure, including cameras, computers, projectors, screens, and lighting systems.<br>
            
            <br>5. Build the LED Wall: Install the LED wall, which is a critical component of Virtual Production, as it provides a high-resolution, real-time virtual environment that can be seamlessly integrated with live-action footage.<br>
            
            <br>6. Build the Software: Build the software infrastructure needed to manage and control the Virtual Production workflow, such as software for motion capture, real-time rendering, and compositing.<br>
            
            <br>7. Hire the Team: Hire the personnel needed to operate and maintain the Virtual Production Studio, such as producers, directors, cinematographers, visual effects artists, and software developers.<br>
            
            <br>8. Test and Refine: Test and refine the Virtual Production workflow to ensure that it meets the quality standards and production requirements.<br>
            
            <br>Building a Virtual Production Studio requires a significant investment of time, effort, and resources, but it can provide filmmakers with greater creative control, flexibility, and cost savings.<br></p>
    </div>
    <button type="button" class="collapsible" on:click={clickEvent3}><img src={icon3} style="color: azure; height: 20px; margin-right: 20px;" alt="">Is Virtual Production just a giant LED wall?</button>
    <div class={contentClass3}>
        <p>No, Virtual Production is not just a giant LED wall, but the LED wall is a crucial component of Virtual Production. The LED wall is a display system that creates a seamless, high-resolution backdrop of digital images, video, or CGI content. It is used to provide real-time virtual environments and backgrounds that can be integrated with live-action footage.<br>

            <br>Virtual Production involves much more than just an LED wall. It requires a combination of technologies such as motion capture, virtual reality, real-time rendering, and computer graphics, as well as a team of skilled professionals including producers, directors, cinematographers, visual effects artists, and software developers.<br>
            
            <br>In Virtual Production, the LED wall is used as a physical set extension to create a seamless transition between the real and virtual worlds. It provides the actors and the production team with a realistic visual reference, allowing them to react to the virtual environment as if it were real. This approach reduces the need for expensive location shoots and post-production work and enables filmmakers to have more creative control over their productions.</p>
    </div>
</section>
<section class="contact">
    <div class="line"></div>
    <div class="screens">
        <div class="contactDetail">
            <h4>Got a project in mind?</h4>
        </div>
        <div class = "form">
            <p>Drop us an email or call us, we`re always around to solve your Virtual Production questions.</p>
            <button><a href="tel:+917338550011">+91 7338550011</a></button>
        </div>    
    </div>
    <div class="line"></div>
</section>

<style lang="scss">
    .hero, .about{
        height: auto;
        width: 100vw;
        align-items: center;
        text-align: center;
    }
    
    .clients, .info{
        background-color: rgb(214, 217, 219);
        height: auto;
        text-align: center;
        padding: 3% 3%;
    }
    .details{
        background-color: #fff;
        height: auto;
        align-items: center;
        text-align: center;
    }
    .contact{
        height: auto;
        padding: 5%;
    }
    h1{
        font-size: 60px;
        margin-left: auto;
        margin-right: auto;
        line-height: 60px;
        width: 45%;
    }
    h3{
        font-size: 42px;
        margin-left: auto;
        margin-right: auto;
        line-height: 42px;
        width: 45%;
        font-weight: 100;
    }
    .heading{
        text-align: center;
        position: absolute;
        top: 10%;
        width: 100%;
        height: 120px;
        text-shadow: 2px 2px 30px #070707a9;
        filter: invert(100%);
    }
    .scroll-icon{
        position: absolute;
        text-align: center;
        top: 80%;
        left: 50%;
        text-shadow: 2px 2px 15px #070707;
        z-index: 10;
    }
    .scroll-icon .icon{
        margin-bottom: 20px;
        height: 80px;
        width: 40px;
        border: 3px solid white ;
        border-radius: 30px;
        text-shadow: 2px 2px 15px #070707;
        animation-name: example;
        animation-duration: 4s;
        animation-delay: 0.5s;
        animation-iteration-count: infinite;
    }
    @keyframes example {
        0% {height: 10px;}
        50% {height: 80px;}
        100% {height: 10px;}
    }
    #heroImage, #aboutImage{
        object-fit: cover;
        max-width: 100vw;
    }
    #heroImage{
        height: 100vh;
        width: 100vw;
    }
    #aboutImage{
            max-height: 45vh;
        }
    .horizontal-scroll{
      padding: 5% 5%;
      overflow-x: scroll;
      overflow-y: hidden;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */

    .led-card{
      display: inline-block;
      height: 40vh;
      width: 30vh;
      background-color: #f1f1f1;
      border-radius: 20px;
      margin: 1%;
      }
    }
    .card-img{
        margin-top: 25px;
        height: 25vh;
      width: 25vh;
      border-radius: 20px;
    }
    .horizontal-scroll::-webkit-scrollbar {
      display: none;
    }    
    h5{
        color: black;
        text-align: center;
        font-size: 30px;
        line-height: 30px;
        margin-top: 0%;
        padding-top: 5%;
    }
    .clientsImg{
        display: grid;
        justify-content: space-around;
        padding: 1%;
        grid-template-columns: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        gap: 0.5rem;
    }
    .clientsImg img {
        max-height: 200px
    }
    h4{
        font-size: 36px;
        line-height: 36px;
        margin: 0%;
    }
    p{
        font-size: 18px;
        line-height: 18px;
    }
    .screens{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-content: center;
        padding: 5%;
        align-items: center;
    }
    .detail{
        text-align: left;
        color: black;
        margin: auto;
        max-width: 60vw;
        padding: 5% 5%;
    }
    .detailImage{
        width: 50vw;
        margin: auto;
    }
    .collapsible {
        background-color: #000000;
        color: white;
        cursor: pointer;
        padding: 18px;
        margin-bottom: 24px;
        width: 60%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 20px;
        border-radius: 10px;
        justify-items: space-around;
    }
    .inactive{
        display: none;
    }
    .active{
        text-align: left;
        width: 60%;
        color: black;
        margin: 0% auto;
    }
    .content {
        padding: 0 18px;
        
        display: none;
        overflow: hidden;
        background-color: #f1f1f1;
    }
    .contactDetail{
        color: #fff;
        text-align: center;
    }
    .line{
        height: 3px;
        background-color: #fff;
        width: 80vw;
        margin: 0 auto;
    }
    .form button{
        color: #fff;
        background-color: rgb(65, 65, 65);
        font-size: 30px;
        font-weight: 800;
        border-radius: 15px;
        padding: 1% auto;
        width: 90%;
        border: none;
        margin-top: 3%;
    }
    a{
        text-decoration: none;
        color: #fff;
    }
    @media(max-width: 1916px){
        .hero, .about{
            min-height: auto;
            padding-bottom: 10vh;
        }
        #heroImage, #aboutImage{
            max-width: 100vw;
        }
        #aboutImage{
            max-height: 35vh;
        }
        h1{
            width: 57%;
            font-size: 54px;
            line-height: 54px;
        }
        h3{
            width: 50%;
            font-size: 36px;
            line-height: 36px;
        }
        h4{
            font-size: 30px;
            line-height: 30px;
        }
        h5{
            font-size: 20px;
            line-height: 20px;
        }
        p{
            font-size: 14px;
            line-height: 14px;
        }
        .Aevy, .Mandalorian, .PatriotAct, .DineshGodara, .TechBurner, .Puma  {
        max-height: 100px
        }
        .clientsImg{
            grid-template-columns: repeat(3, 1fr);
        }
        .screens{
        grid-template-columns: repeat(1, 1fr);
        }
        .detail{
            text-align: center;
        }
        .detailImage{
        width: 70vw;
        }
        .contactDetail{
            text-align: center;
        }
        .form{
            text-align: center;
        }
        .form button{
            width: 50%;
            font-size: 24px;
            font-weight: 600;
        }
        .collapsible {
            font-size: 18px;
            padding: 6px;
            width: 85%;
        }
        .active{
            width: 85%;
        }
    }
    @media(max-width: 612px){
        .about{
            height: auto;
        }
        #aboutImage{
            max-height: 25vh;
        }
        h1{
            width: 90%;
            font-size: 40px;
            line-height: 40px;
        }
        h3{
            width: 90%;
            font-size: 24px;
            line-height: 24px;
        }
        h4{
            font-size: 22px;
            line-height: 22px;
        }
        h5{
            font-size: 16px;
            line-height: 16px;
        }
        .clientsImg{
            display: grid;
        }
        .Aevy, .Mandalorian, .PatriotAct, .DineshGodara, .TechBurner, .Puma  {
        max-height: 90px
        }
        .clientsImg{
            grid-template-columns: repeat(2, 1fr);
        }
        .form button{
            width: 80%;
            font-size: 18px;
            font-weight: 500;
            padding: 1% 0%;
        }
    }
    @media(max-width: 312px){
        h1{
            width: 90%;
            font-size: 30px;
            line-height: 30px;
        }
        h3{
            width: 90%;
            font-size: 18px;
            line-height: 18px;
        }
    }
    @media(max-height: 642px){
        .about{
            height: auto;
        }
        h1{
            width: 90%;
            font-size: 24px;
            line-height: 24px;
        }
        h3{
            width: 90%;
            font-size: 16px;
            line-height: 16px;
        }
    }
</style>