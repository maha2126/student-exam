import styles from './style.module.css'

const Student = props => {
    const {name, surname} = props
    return <div className={styles.stud}>
                <h2>{name} {surname}</h2>
                <div className={styles.examens}>
                    {props.children}
                </div>
    </div>
} 
export default Student