import React from 'react';

import {
  SplitCol,
	Panel,
	PanelHeader,
	Group,
	Cell
} from '@vkontakte/vkui';

import {
  Icon28AddCircleOutline,
  Icon28MortarOutline,
  Icon28ClapperboardOutline,
  Icon28Profile
} from '@vkontakte/icons';

function DesktopNavigation({hasHeader, setActiveView, router}) {
	return(
    <SplitCol fixed width='250px' maxWidth='250px'>
      <Panel id='menuDesktop'>
        {hasHeader && <PanelHeader/>}
        <Group>
          <Cell
            data-id='home'
            onClick={setActiveView}
            disabled={router.activeView === 'home'}
            before={<Icon28MortarOutline />}
            className={router.activeView === 'home' ? 'activeViewCell' : ''}
          >
            Рецепты
          </Cell>

          <Cell
            data-id='blogs'
            onClick={setActiveView}
            disabled={router.activeView === 'blogs'}
            before={<Icon28ClapperboardOutline />}
            className={router.activeView === 'blogs' ? 'activeViewCell' : ''}
          >
            Блоги
          </Cell>

          <Cell
            data-id='profile'
            onClick={setActiveView}
            disabled={router.activeView === 'profile'}
            before={<Icon28Profile />}
            className={router.activeView === 'profile' ? 'activeViewCell' : ''}
          >
            Профиль
          </Cell>
        </Group>

        <Group>
          <Cell
            data-id='add'
            onClick={setActiveView}
            disabled={router.activeView === 'add'}
            before={<Icon28AddCircleOutline />}
            className={router.activeView === 'add' ? 'activeViewCell' : ''}
          >
            Добавить рецепт
          </Cell>
        </Group>
      </Panel>
    </SplitCol>
	)
}

export default DesktopNavigation;