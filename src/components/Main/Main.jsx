import React, { useState } from 'react'
import style from "./Main.module.sass"
import { NewSticker } from '../NewSticker/NewSticker';
import { Sticker } from '../Sticker/Sticker';

export const Main = ({categories, choiceOfCategory}) => {
	const [arrayOfStickers, setArrayOfStickers] = useState([]);
	
  return (
		<div className={style.main}>

				{
					arrayOfStickers.length === 0 ? 
					<div className={style.stickersNotFound}>
						<p>Список стикеров пуст :/</p>
					</div> : <></>
				}
			
			<div className={style.grid}>
				{

					choiceOfCategory === "" ? 
				
					arrayOfStickers.map((sticker, index) => (
						<Sticker
							key={sticker.id}
							data={sticker}
							index={index}
							array={arrayOfStickers}
							changeState={setArrayOfStickers}
						/>
					)) : arrayOfStickers.map((sticker, index) => {
						if (sticker.category === choiceOfCategory) {
							return (
								<Sticker
									key={sticker.id}
									data={sticker}
									index={index}
									array={arrayOfStickers}
									changeState={setArrayOfStickers}
								/>);
						}
						return <></>;
					})
				}
			</div>
			<NewSticker categories={categories} addSticker={setArrayOfStickers}/>
		</div>
  )
}
