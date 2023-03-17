import styles from './style.module.css'
import PropertyTypes from 'prop-types'


const Examen = props => {
    const {title, mid1, mid2, absences} = props
    return <div className={styles.examen}>
                <h3>{title}</h3>
                <p>Score of the first midterm - {mid1}</p>
                <p>Score of the second midterm - {mid2}</p>
                <p>missing lessons - {absences}</p>

                <p className={styles.final}>
                    <b>Final result - {(mid1 + mid2)/2-absences}</b>
                </p>
    </div>
}
Examen.defaultProps = {
    mid1:0,
    mid2:0,
    absences:0
}
Examen.propTypes = {
    mid1:PropertyTypes.number,
    mid2:PropertyTypes.number,
    absences:PropertyTypes.number,
}
export default Examen