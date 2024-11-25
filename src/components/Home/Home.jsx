import './Home.css';




export const Home = () => {
    return( <section className='About'>

       <div className='Description'>
        <h1 className='Name'>Hi, I'm Sahaj</h1>
        <p className='Paragraph'>I am currently a Junior in Computer Science major at Virginia Tech. I have a deep passion for technology, problem-solving, and continuous learning.</p>
        <p className='Internshp'>Throughout my academic and professional journey, I’ve had the opportunity to:</p>

        <ul class="BulletPoints">
            <li>Intern at Stryker, contributing to software innovation and teamwork.</li>
            <li>Conducted machine learning research at the Hume Center for National Security.</li>
            
        </ul>

        <p className='Connect'>Feel free to connect with me—I’m always excited to learn, collaborate, and create meaningful solutions to real-world challenges!

</p>

        </div>
        <div className='Items'> 
        <img src='../../public/1722913602279.jpeg' className='ProfileImage'></img>
        </div>

        <div className='Buttons'>
        <a href="/Resume.docx" download>
        <button type='button' className='Download'>Resume</button>
        </a>
        
       
       <a href="mailto:Sahaj@vt.edu">
        <button type='button' className='Contact'>Contact Me</button>
        
        </a>
        <a href="https://github.com/Sahajs04">
            <img className='GithubImage' src="/download.png"></img>
        </a>
        </div>
        </section>

    )
}
