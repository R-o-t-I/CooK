import React from 'react';

import {
	Tabbar,
	TabbarItem
} from '@vkontakte/vkui';

import {
	Icon28AddCircleOutline,
	Icon28HomeOutline,
	Icon28MortarOutline,
	Icon28Newsfeed,
	Icon28Notifications,
	Icon28Profile
} from '@vkontakte/icons';

function MobailNavigation({setActiveView, router}) {

	function openView(e) {
		let nowView = router.activeView
		setActiveView(e)
		
		if (e.currentTarget.dataset.id === nowView) {
			router.toHash(`${e.currentTarget.dataset.id}/base`)
		}
	}

	return(
		<Tabbar>
			<TabbarItem
				data-id='home'
				selected={router.activeView === 'home'}
				onClick={openView}
				text='Рецепты'
			>
				<Icon28MortarOutline />
			</TabbarItem>

			<TabbarItem
				data-id='blogs'
				selected={router.activeView === 'blogs'}
				onClick={openView}
				text='Блоги'
			>
				<Icon28Newsfeed />
			</TabbarItem>

			<TabbarItem
				data-id='add'
				selected={router.activeView === 'add'}
				onClick={openView}
				text='Добавить'
			>
				<Icon28AddCircleOutline />
			</TabbarItem>

			<TabbarItem
				data-id='notifications'
				selected={router.activeView === 'notifications'}
				onClick={openView}
				text='Уведомления'
			>
				<Icon28Notifications />
			</TabbarItem>

			<TabbarItem
				data-id='profile'
				selected={router.activeView === 'profile'}
				onClick={openView}
				text='Профиль'
			>
				<Icon28Profile/>
			</TabbarItem>
		</Tabbar>
	)
}

export default MobailNavigation;