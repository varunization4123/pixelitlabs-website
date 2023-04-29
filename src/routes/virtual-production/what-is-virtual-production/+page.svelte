<svelte:head>
    <title>What is Virtual Prodcution?</title>
</svelte:head>

<section class="hero">
    <div class="heading">
        <h1>What is Virtual Production?</h1>
    </div>
    <img id="heroImage" src="/VP-art-main-v2-p-2600.jpg" alt="">
</section>
<section class="answer">
    <div class="point1">
        <h2>What is it?</h2>
        <p>Virtual Production is a filmmaking technique that integrates real-time computer graphics, virtual reality, and motion capture to create visual effects, sets, and environments during the filming process.<br> <br>It allows filmmakers to view and interact with virtual objects and environments in real-time while shooting a scene, providing more creative control and flexibility.<br> <br>Virtual Production combines the use of physical sets and props with digital elements, allowing filmmakers to create immersive and realistic environments that were previously impossible to achieve. It can also be used to create pre-visualizations of a scene or sequence, helping filmmakers plan and visualize their shots before they are actually filmed.<br> <br>The technology used in Virtual Production has been rapidly advancing in recent years, with many filmmakers and studios adopting it for their productions. It has been used in films like The Mandalorian, The Lion King, and Avatar, among others.</p>
        <img src="/VP-in-use.jpg" alt="">
        <p><a href="https://www.budapestreporter.com/virtual-sets-with-led-screens-from-the-mandalorian-to-budapest/" target="_blank" rel="noopener noreferrer">Source: https://www.budapestreporter.com/virtual-sets-with-led-screens-from-the-mandalorian-to-budapest/</a></p>
    </div>
    <div class="point2">
        <h2>Why Virtual Production?</h2>
        <p>There are several benefits of using Virtual Production in filmmaking:</p>
            <ol>
                <br><li>Increased Creative Control: Virtual Production allows filmmakers to have greater creative control over their productions. They can create and manipulate virtual environments and objects in real-time, making it easier to adjust the scene's lighting, camera angles, and framing.<br> 
                <br><li>Enhanced Flexibility: Virtual Production provides greater flexibility to filmmakers by reducing the need for location shoots and post-production work. It allows them to shoot a scene in a virtual environment that can be edited and changed without the need for costly reshoots.<br>
                <br><li>Improved Cost Savings: Virtual Production can result in significant cost savings by reducing the need for location shoots and physical sets. It can also streamline the production workflow, reducing the time and resources required for post-production work.<br>
                <br><li>Realistic Visual Effects: Virtual Production allows for the creation of highly realistic and immersive visual effects. Filmmakers can create virtual environments and objects that are seamlessly integrated with live-action footage, creating a more cohesive and believable scene.<br>
                <br><li>Faster Production Time: Virtual Production can help speed up the production process by allowing filmmakers to see the final result in real-time. This reduces the need for multiple takes and reshoots, ultimately saving time and money.<br>
                <br><li>Increased Safety: Virtual Production can increase safety by reducing the need for actors and crew members to work in hazardous environments or perform dangerous stunts.<br>
            </ol>
            <p>Overall, Virtual Production provides filmmakers with a powerful tool to enhance their creative vision and achieve a more seamless, cost-effective, and time-efficient production process.</p>
    </div>
    <div class="point3">
        <h2>Getting started with Virtual Production</h2>
        <p>Getting started with Virtual Production requires a combination of planning, research, and investment in the necessary equipment and personnel. Here are some general steps to get started with Virtual Production:</p>
            <ol>
                <br><li>Define Your Goals: Determine the types of projects you plan to produce, the level of quality you want to achieve, and the budget you have available.<br> 
                <br><li>Learn the Technology: Research the different Virtual Production technologies, such as motion capture, real-time rendering, virtual reality, and computer graphics, to determine which ones are best suited for your needs.<br>
                <br><li>Acquire the Equipment: Acquire the necessary equipment, such as cameras, computers, projectors, screens, and lighting systems. You will also need an LED wall, which is a critical component of Virtual Production.<br>
                <br><li>Hire the Personnel: Hire the personnel needed to operate and maintain the Virtual Production equipment, such as producers, directors, cinematographers, visual effects artists, and software developers.<br>
                <br><li>Test and Refine: Test and refine the Virtual Production workflow to ensure that it meets the quality standards and production requirements.<br>
                <br><li>Practice and Train: Practice and train your team to ensure that they are familiar with the technology and equipment and can operate it effectively.<br>
            </ol>
            <p>Getting started with Virtual Production requires a significant investment of time, effort, and resources, but it can provide filmmakers with greater creative control, flexibility, and cost savings. It is important to carefully plan and research your options to ensure that you are making the most of this powerful filmmaking tool.</p>
    </div>
</section>

<style>
    .hero{
        min-height: 92vh;
        height: auto;
        width: 100vw;
        align-items: center;
        text-align: center;
    }
    .answer{
        background-color: #fff;
        color: black;
        padding: 2% 10%;
        text-align: left;
    }
    .point1, .point2, .point3{
        padding: 5%;
    }
    .answer img{
        max-width: 100%;
        border-radius: 10px;
    }
    h1{
        font-size: 60px;
        margin-left: auto;
        margin-right: auto;
        line-height: 60px;
        width: 45%;
    }
    h2{
        color: black;
    }
    .heading{
        text-align: center;
        position: absolute;
        top: 8%;
        width: 100%;
        height: 120px;
    }
    #heroImage{
        object-fit: cover;
        max-width: 100vw;
        height: 100vh;
        width: 100vw;
    }
    .answer .point2{
        background-color: rgb(214, 217, 219);
        border-radius: 10px;
    }

    @media(max-width: 1916px){
        .hero, .answer{
            min-height: auto;
            padding-bottom: 10vh;
        }
        #heroImage{
            max-width: 100vw;
        }
        h1{
            width: 57%;
            font-size: 54px;
            line-height: 54px;
        }
    }
    @media(max-width: 612px){
        .answer{
            height: auto;
        }
        h1{
            width: 90%;
            font-size: 40px;
            line-height: 40px;
        }
        #heroImage{
            max-height: 60vh;
        }
    }
</style>