// import './Alert.css'
import styles from './Alert.module.css'

export const Alert = ({children,type='success'}) => {
    // return <div style = {{
    //     backgroundColor: type === 'success'? '#21ac28ff': '#ef4444',
    //     color:'black',
    //     padding:'20px',
    //     borderRadius:'5px',
    //     border:'2px solid green',
    //     margin:'10px 0px'
    // }}>{children}</div>
    // return <div className={`alert ${type}`}>{children}</div>
    return <div className={`${styles.alert} ${styles[type]}`}>{children}</div>
}