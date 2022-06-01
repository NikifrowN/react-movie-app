import styles from './styles.module.scss';

export const Tabs = ({labels, setActiveTab, activeTab}) => (
   <div className={styles.root}>
      {labels.map(({label, key}) => {
         return(
            label ? (
               <button
                  onClick={() => setActiveTab(key)}
                  className={activeTab === key ? styles.active : styles.tab }
                  key={key}
               >
                  {label}
               </button>
            ) : (null)
         )
      })}
   </div>
)
