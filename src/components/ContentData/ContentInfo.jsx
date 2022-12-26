import React from 'react'
import classes from "./ContentData.module.css";

const ContentInfo = ({contentData ,text ,content,add}) => {
  return (
    <div>
        {contentData[content] && <span className={classes.category}>{text}
                        <span className={classes.categoryValues}>{contentData[content] + add} </span>
                    </span>}
    </div>
  )
}

export default ContentInfo