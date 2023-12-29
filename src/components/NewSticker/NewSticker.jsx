import React, { useRef, useState } from 'react'
import style from "./NewSticker.module.sass"
import { v4 as uuidv4 } from 'uuid';
import { SetCategory } from '../Category/SetCategory';

export const NewSticker = ({addSticker, categories}) => {
	const arrayOfColors = ["#D9E8FC","#FFD8F4", "#FDE99D", "#B0E9CA", "#FFEADD"];

	const inputTitle = useRef(null);
	const inputInfo = useRef(null);

	const [chooseCategory, setChooseCategory] = useState("");

	const [styleNewSticker, setStyleNewSticker] = useState({
		button: style.buttonNewSticker,
		window:	style.windowNewSticker__hidden,
	});
	const [dataSticker, setDataSticker] = useState({
		id: "",
		title: "",
		info: "",
		color: null,
		category: "",
		important: false
	});

	const openWindow = () => {
		setStyleNewSticker({
			button: style.buttonNewSticker__hidden,
			window:	style.windowNewSticker,
		});
	}

	const closeWindow = () => {
		setStyleNewSticker({
			button: style.buttonNewSticker,
			window:	style.windowNewSticker__hidden,
		});

		setDataSticker({
			id: "",
			title: "",
			info: "",
			color: null,
			category: "",
			important: false
		})
		setChooseCategory("");

		inputTitle.current.value = "";
		inputInfo.current.value = "";
	}

	const addStickerInCategory = (title) => {
		setDataSticker({...dataSticker, category: title});
	}

	const createSticker = () => {
		if (dataSticker.title !== "" || dataSticker.color !== null) {
			const uniqId = uuidv4();
			const newSticker = {
				...dataSticker,
				id: uniqId
			}
			addSticker(prevStickers => [...prevStickers, newSticker]);
			closeWindow();
		} else {
			alert("Внимание: Чтобы добавить стикер в список, нужно ввести 'заголовок' и выбрать цвет стикера");
		}
		
	}

  return (
	<>
		<div 
			className={styleNewSticker.button}
			onClick={openWindow}
		></div>

		<div className={styleNewSticker.window}>
			<div className={style.window__header}>
				<h2>Добавить новый стикер</h2>
				<div 
					className={style.closeWindow}
					onClick={closeWindow}
				></div>
			</div>
			
			<div className={style.window__parameters}>
				<input
					ref={inputTitle}
					className={style.window__titleInput}
					type="text" 
					placeholder='Новый стикер'
					onChange={e => setDataSticker({...dataSticker, title: e.target.value})}
				/>

				<textarea
					ref={inputInfo}
					className={style.window__textarea}
					type="text"
					placeholder='Описание'
					onChange={e => setDataSticker({...dataSticker, info: e.target.value})}
				/>
				<h3>Цвет стикера:</h3>
				<div className={style.cardContainer}>

					{
						arrayOfColors.map(color => (
								<label
									key={color}
									data-for={color}
									className={style.cardContainer__item}
									style={
										dataSticker.color === color
										? {
											backgroundColor: color,
											border: ".4rem solid #1F2937"
										} : {
											backgroundColor: color,
											border: ".4rem solid #ECECEC"
										}
									}
								>
									<input
										id={color}
										className="displayNone"
										type="radio"
										value={color}
										checked={dataSticker.color === color}
										onChange={e => setDataSticker({...dataSticker, color: e.target.value})}
									/>
								</label>
							))
					}

				</div>
				<h3>Выберите категорию:</h3>
				<ul className={style.setCategory}>
					{
						categories.length === 0 ? 
						<p>Добавьте категорию, чтобы выбрать</p> :
						<></>
					}
					
					<SetCategory 
						categories={categories} 
						addStickerInCategory={addStickerInCategory}
						chooseCategory={chooseCategory}
						setChooseCategory={setChooseCategory}
					/>
				</ul>
			</div>

			<div className={style.window__footer}>
				<button onClick={createSticker}>Создать ✅</button>
			</div>

		</div>
	</>
  )
}
