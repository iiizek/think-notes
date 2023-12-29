import React from 'react'
import style from './Category.module.sass'
import {v4 as uuidv4} from 'uuid'

export const SetCategory = ({categories, addStickerInCategory, chooseCategory, setChooseCategory}) => {
	
	const radioCategoryClicked = e => {
		setChooseCategory(e.target.value);
		const selectedCategory = e.target.value;
		addStickerInCategory(selectedCategory);
	}

  return (
	<>
		{
			categories.map((element, index) => {
					let categoryId = uuidv4();
					return (<label 
						key={categoryId}
						className={
							chooseCategory === element.title ? 
							`${style.currentTitle} ${style.currentTitle__checked}` : 
							style.currentTitle}>
						<input 
							value={element.title} 
							type="radio"
							className="displayNone"
							onChange={radioCategoryClicked}
							checked={chooseCategory === element.title}
						/>{element.title}
					</label>)
			}
		)}
	</>
  )
}
