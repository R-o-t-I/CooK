import React, { useState, useEffect } from 'react';

import {
	PanelHeader,
	Gradient,
	Avatar,
	Title,
	Text,
	Button,
	ScreenSpinner,
	Group,
	Header,
	SimpleCell,
	CellButton,
	PanelHeaderButton,
	VKCOM,
	Tappable,
	HorizontalScroll,
	Cell,
	Spacing
} from "@vkontakte/vkui";

import {
    Icon28SchoolOutline,
    Icon28AddOutline,
		Icon28EditOutline,
		Icon28UserAddOutline,
		Icon28FavoriteOutline,
		Icon28ClipOutline,
		Icon28BookOutline,
		Icon28CommentOutline,
		Icon28DoorArrowRightOutline,
		Icon16Verified,
		Icon28ClapperboardOutline
} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';

let isInfoUser = false
let infoUser = ['Загрузка...']

function ProfilePanel({isDesktop, router, platform}) {
  const [infoUsers, setInfoUser] = useState(infoUser)

	useEffect(() => {
		if (!isInfoUser) {
			getInfoUser()
		}
	})

	async function getInfoUser() {
		router.toPopout(/*<ScreenSpinner/>*/)

		let user_info = await bridge.send('VKWebAppGetUserInfo');
		infoUser[0] = user_info.first_name + ' ' + user_info.last_name
		infoUser.push(user_info.photo_200)
		infoUser.push(user_info.id)

		setInfoUser(infoUser)
		isInfoUser = true

		router.toPopout()
	}

	return (
		<>
			<div  className="backgroundPage">
				{platform === VKCOM ?
					<PanelHeader
						separator={true}
						left={<PanelHeaderButton label="Редактировать"><Icon28EditOutline style={{marginRight: 6}}/></PanelHeaderButton> }
					>
						Профиль
					</PanelHeader>
				: undefined}
				{platform !== VKCOM ?
					<PanelHeader
						separator={false}
						left={<PanelHeaderButton><Icon28EditOutline /></PanelHeaderButton> }
					>
						Профиль
					</PanelHeader>
				: undefined}
				<div className="blockProfile">
					<Avatar badge={<div className="badgeVerified"><Icon16Verified className="badgeIconVerified" width={16} height={16} /></div>} size={80} src={infoUsers[1]}/>
					<Title 
						className='nameUserProfile'
						level="2" 
						weight="medium"
					>
						{infoUsers[0]}
					</Title>
					<div className="blockInfoProfile">
						<div className="allBlocksInfoProfile">
							<Tappable className="tappableBlocksInfoProfile">
								<div className="blocksInfoProfile">
									<div className="numberBlocksInfoProfile">51.3K</div>
									<div className="textBlocksInfoProfile">нравится</div>
								</div>
							</Tappable>
							<Tappable className="tappableBlocksInfoProfile">
								<div className="blocksInfoProfile">
									<div className="numberBlocksInfoProfile">1.3K</div>
									<div className="textBlocksInfoProfile">подписчиков</div>
								</div>
							</Tappable>
							<Tappable className="tappableBlocksInfoProfile">
								<div className="blocksInfoProfile">
									<div className="numberBlocksInfoProfile">500K</div>
									<div className="textBlocksInfoProfile">просмотров</div>
								</div>
							</Tappable>
						</div>
					</div>
				</div>
				<div className="blockProfileButton">
					<HorizontalScroll className="blockScrollProfileButton">
						<div className="allBlocksProfileButton">
							<Tappable className="tappableBlocksProfileButton">
								<div className="blocksProfileButton">
									<div className="backgroundBlockProfileButton" style={{background: "rgba(255, 183, 61, 0.16)"}}><Icon28UserAddOutline style={{color: "#FFB73D"}}/></div>
									<div className="textBlockProfileButton">Подписки</div>
								</div>
							</Tappable>
							<Tappable className="tappableBlocksProfileButton">
								<div className="blocksProfileButton">
									<div className="backgroundBlockProfileButton" style={{background: "rgba(255, 103, 102, 0.16)"}}><Icon28ClapperboardOutline style={{color: "#FF6766"}}/></div>
									<div className="textBlockProfileButton">Блоги</div>
								</div>
							</Tappable>
							<Tappable className="tappableBlocksProfileButton">
								<div className="blocksProfileButton">
									<div className="backgroundBlockProfileButton" style={{background: "rgba(115, 93, 230, 0.16)"}}><Icon28FavoriteOutline style={{color: "#735DE6"}}/></div>
									<div className="textBlockProfileButton">Избранное</div>
								</div>
							</Tappable>
							<Tappable className="tappableBlocksProfileButton">
								<div className="blocksProfileButton">
									<div className="backgroundBlockProfileButton" style={{background: "rgba(0, 119, 255, 0.16)"}}><Icon28ClipOutline style={{color: "#0077FF"}}/></div>
									<div className="textBlockProfileButton">Клипы</div>
								</div>
							</Tappable>
						</div>
					</HorizontalScroll>
				</div>
				<div className="blockProfileNetworks">
					<Cell
						before={<Avatar style={{padding: 4}} size={32} mode="image" src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" />}
						expandable
					>
						alexander_tihonovich
					</Cell>
					<Cell
						before={<Avatar style={{padding: 4}} size={32} mode="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png" />}
						expandable
					>
						alexander_tihonovich
					</Cell>
				</div>
				<div className="blockProfileList">
					<Cell
						before={<Icon28BookOutline />}
						expandable
					>
						Мои рецепты
					</Cell>
					<Cell
						before={<Icon28CommentOutline />}
						expandable
					>
						Мои комментарии
					</Cell>
					<Spacing separator="center" />
					<Cell
						before={<Icon28DoorArrowRightOutline style={{color: "var(--button_secondary_destructive_foreground)"}} />}
					>
						<div style={{color: "var(--button_secondary_destructive_foreground)"}}>Выход</div>
					</Cell>
				</div>
			</div>
		</>
	);
}

export default ProfilePanel;