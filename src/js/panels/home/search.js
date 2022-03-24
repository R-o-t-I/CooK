import React from 'react';

import {
  PanelHeader,
  PanelHeaderBack,
  Group,
  Search,
  Cell,
  Avatar,
  List,
  VKCOM
} from "@vkontakte/vkui";

import {
  Icon24Filter
} from '@vkontakte/icons';

function SearchPanel({router, platform}) {
    
  return(
    <>
      {platform === VKCOM ?
        <PanelHeader
          separator={true}
          left={<PanelHeaderBack onClick={() => router.toBack()} label="Назад" />}
        >
          Поиск
        </PanelHeader>
      : undefined}
      {platform !== VKCOM ?
        <PanelHeader
          separator={false}
          left={<PanelHeaderBack onClick={() => router.toBack()} />}
        >
          Поиск
        </PanelHeader>
      : undefined}
      <Group>
        <Search
          placeholder="Найти рецепт"
          icon={<Icon24Filter onClick={() => router.toPanel('filter')} />}
          after={null}
        />
        <List>
          <Cell
            before={<Avatar mode="image" src="https://gotovimop.com/wp-content/uploads/2021/03/bliny-po-starinnomu-receptu-na-drozhzhah.jpg" />}
            description="российская, 12 минут 34 секунды"
            multiline
          >
            Блины по старому рецепту
          </Cell>
          <Cell
            before={<Avatar mode="image" />}
            description="российская, 12 минут 34 секунды"
            multiline
          >
            Блины по старому рецепту
          </Cell>
          <Cell
            before={<Avatar mode="image" />}
            description="российская, 12 минут 34 секунды"
            multiline
          >
            Блины по старому рецепту
          </Cell>
          <Cell
            before={<Avatar mode="image" />}
            description="российская, 12 минут 34 секунды"
            multiline
          >
            Блины по старому рецепту
          </Cell>
          <Cell
            before={<Avatar mode="image" />}
            description="российская, 12 минут 34 секунды"
            multiline
          >
            Блины по старому рецепту
          </Cell>
        </List>
      </Group>
    </>
  )
}

export default SearchPanel;