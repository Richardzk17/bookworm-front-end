
import styles from '../About/About.module.css'



const About = () => {
  return (
    <>
    <div className={styles.Maincontainer}>

      <div className={styles.aboutUs}>
        <p className={styles.title}>About</p>

    <p className={styles.description}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae ratione temporibus inventore impedit laborum debitis, ipsum autem nulla. Commodi impedit ea natus? Voluptatem nihil perspiciatis dignissimos alias nesciunt distinctio recusandae!</p>
        
        </div> 
    </div> 

    <div className={styles.Secondcontainer}>

          <div className={styles.details}></div>
          <div className={styles.details}></div>
          <div className={styles.details}></div>
          <div className={styles.details}></div>         
      
    </div> 
  </>
      
      )
}

export default About