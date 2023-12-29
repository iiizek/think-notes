import React from 'react'
import style from './Category.module.sass'
import {v4 as uuidv4} from 'uuid'

export const Category = ({categories, setChoiceOfCategory, choiceOfCategory, setCategories}) => {
	
	const radioCategoryClicked = e => {
		setChoiceOfCategory(e.target.value);
	}

	const deleteCategory = (index) => {
		const newArray = [...categories];
		newArray.splice(index, 1);
		setCategories(newArray);
	}

  return (
	<>
		{
			categories.map((element, index) => {
					let categoryId = uuidv4();
					return (<label 
						key={categoryId}
						className={
							choiceOfCategory === element.title ? 
							`${style.currentTitle} ${style.currentTitle__checked}` : 
							style.currentTitle}>
						<input 
							value={element.title} 
							type="radio"
							className="displayNone"
							onChange={radioCategoryClicked}
							checked={choiceOfCategory === element.title}
						/>{element.title}
						<button
							onClick={() => deleteCategory(index)}
						></button>
					</label>)}
		)}
	</>
  )
}
