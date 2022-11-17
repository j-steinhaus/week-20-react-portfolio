import './about.css';
import profilepic from '../../assets/profilepic.png'

const About = () => {
    return (
        <section id='about'>
            <div className="row">
                <div className= "col-6" id="aboutLeft">
                    <img src={profilepic} alt="profilePic" />
                </div>
                <div className= "col-6" id="aboutRight">
                    <h1 id="aboutTitle">Hi, I'm Jess</h1>
                    <p id="about"> I am an innovative leader and a coach who has always
                                        sought out mission-driven work. I am currently in a position where I help people
                                        achieve their biggest goal of purchasing real estate, whether it be for an
                                        investment or personal property. I have always made sure that anything I do is
                                        built on communication, dedication, and transparency.<br /> <br />To improve my
                                        strategic leadership, I've spent my spare time taking graduate-level
                                        courses, working with youth, giving back to my community, and always making an
                                        effort to be present. I've picked up an expensive hobby of repurposing
                                        furniture and finding (or stumbling) my way through parenting with a new
                                        philosophy of trial and error;. I enjoy learning from new
                                        perspectives and meeting new people, so let's connect!
                        </p> 
                </div>
            </div>
        </section>
    )
}

export default About;