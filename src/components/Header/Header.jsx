import React, { useState } from 'react'
import style from "./Header.module.sass"
import { Category } from '../Category/Category'

export const Header = ({addCategory, categories, setChoiceOfCategory, choiceOfCategory, setCategories}) => {
	const [title, setTitle] = useState("");

	const pushNewGroup = () => {
		if (title !== "") {
			addCategory(title);
			setTitle("");
		} else {
			alert("Внимание: Чтобы добавить новую категорию, введите её название!")
		}
	}

  return (
	<>
		<div className={style.container}>
			<h1 className="header-title">THI<span>N</span>K.</h1>
			<div className={style.searchContainer}>
				<img src="search-icon.svg" alt="search" className={style.searchIcon}/>
				<input
					className={style.search}
					type="text"
					placeholder='Поиск по стикерам'
				/>
			</div>
			<div className={style.titlesContainer}>
				<label 
					htmlFor="titleStick" 
					className={choiceOfCategory === "" ? 
					`${style.currentTitle} ${style.currentTitle__checked}` : 
					style.currentTitle}>
					<input type="radio" id="titleStick" className="displayNone" onClick={() => setChoiceOfCategory("")}/>Все
				</label>
				<Category 
					categories={categories} 
					setChoiceOfCategory={setChoiceOfCategory} 
					choiceOfCategory={choiceOfCategory}
					setCategories={setCategories}
				/>
				<div className={style.newTitleContainer}>
					<button 
						className={`${style.currentTitle} ${style.currentTitle__new}`}
						onClick={pushNewGroup}
					>+</button>
					<input 
						type="text" 
						className={style.addNewTitle} 
						placeholder='Имя категории'
						onChange={e => setTitle(e.target.value)}
						value={title}
					/>
				</div>
			</div>
		</div>
	</>
  )
}
