import React, {useState} from 'react'
import style from './OpenedSticker.module.sass'

export const OpenedSticker = ({data, setData, isOpened, setIsOpened}) => {

	const [currentData, setCurrendData] = useState(data);

	const changeTitle = (e) => {
		setCurrendData({
			...currentData,
			title: e.target.value
		})
	}

 	const changeTextarea = (e) => {
   		setCurrendData({
			...currentData, 
			info: e.target.value
		});
   		e.target.style.height = 'auto';
  		e.target.style.height = `${e.target.scrollHeight}px`;
 	};

	const applyRefactor = () => {
		const newData = currentData;
		setData(newData);
		setIsOpened(!isOpened);
	}


  return (
	<div className={style.body} style={{display: isOpened ? "flex" : "none"}}>
		<div className={style.colorBar} style={{backgroundColor: currentData.color}}/>
		<input
			value={currentData.title}
			onChange={changeTitle}
			type="text" 
			className={style.text} 
			placeholder='Новый стикер'
		/>
		<textarea
			value={currentData.info}
			onChange={changeTextarea}
			className={style.text} 
			placeholder='Введите основную информацию'
		/>
		<div className={style.apply}>
			<p>*Здесь вы можете редактировать ваш стикер</p>
			<button
				onClick={applyRefactor}
			>Ок ✅</button>
		</div>
	</div>
  )
}
