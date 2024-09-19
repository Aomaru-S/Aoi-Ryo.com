import styles from "@/components/burger-menu.module.css"

export default function BurgerMenu() {
  return (
    <div>
      <input type="checkbox" id="checkbox" className={ styles.checkbox } />
      <label className={ styles.burger } htmlFor="checkbox">
        <span className={ styles.burgerStick }></span>
        <span className={ styles.burgerStick }></span>
        <span className={ styles.burgerStick }></span>
      </label>
      <div className={ styles.menu }>
      </div>
      <label className={ styles.opendMenuBackground } htmlFor="checkbox"></label>
    </div>
  )
}
