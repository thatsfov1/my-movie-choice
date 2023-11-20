import React from 'react'
import s from "../../styles/ContentData.module.scss";
import {Movie} from "../../models/models";

type Props = {
  text:string,
  add?:string,
  content:keyof Movie,
  contentData:Movie
}

const ContentInfo = ({contentData ,text ,content,add}:Props) => {
  return (
    <div>
        {contentData && contentData[content] && <span className={s.category}>{text}
                        <span className={s.categoryValues}>{contentData[content] + add} </span>
                    </span>}
    </div>
  )
}

export default ContentInfo