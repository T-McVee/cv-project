import '../styles/displayBlock.css'

const DisplayBlock = (props) => {
  const {content, classes, label} = props;

  return (
    <>
    {label && <span className="label">{label}</span>}
    <span className={classes}>{content}</span>
    </>
  )
}

export default DisplayBlock