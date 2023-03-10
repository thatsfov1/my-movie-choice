import React from 'react'
import s from "./ContentData.module.css";
import {Movie} from "../../models/models";

type Props = {
  text:string,
  add?:string,
  content:string,
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