import styles from '../Styles/Square.module.css'
import PropTypes from 'prop-types'

export const Square = ({value, setSquareValue})=> {
    return(
        <button 
        onClick={setSquareValue}
        style={{
            color: value ? '#61dafb' : '#282c34',
        }}
        className={styles.button}
        >
            {value || '-'}
            </button>
    )
}
Square.propTypes = {
    value: PropTypes.string,
    setSquareValue: PropTypes.func
}