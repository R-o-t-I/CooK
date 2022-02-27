import React, { useState } from 'react';

import {
  Group,
  IconButton,
  PanelHeader,
  ScreenSpinner,
  Avatar,
  HorizontalCell,
  HorizontalScroll,
  Header,
  Link,
  CardScroll,
  Card,
  Tappable,
} from '@vkontakte/vkui'

import {
  Icon16Add,
  Icon28ChefHatOutline,
  Icon28ClockOutline,
  Icon28SearchOutline
} from '@vkontakte/icons';

function HomePanel({router}) {

  async function openSpinner() {
    router.toPopout(<ScreenSpinner/>)
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.toPopout()
  }

  return (
    <>
      <PanelHeader
        separator={true}
        left={<IconButton onClick={() => router.toPanel('search')}><Icon28SearchOutline /></IconButton>}
      >
        Рецепты
      </PanelHeader>

      <Group>
        <HorizontalScroll showArrows getScrollToLeft={i => i - 120} getScrollToRight={i => i + 120}>
          <div style={{ display: 'flex' }}>
            <HorizontalCell header={<div className="nameStory">Александр</div>}>
              <Avatar className="noNewStory" size={56} src="https://sun9-81.userapi.com/impf/c854224/v854224036/a1aef/klD5bu0WkuU.jpg?size=2560x1440&quality=96&sign=dfd0778c6f06f69789b43bb41d57af2d&type=album" />
              <div className="iconAddStory"><Icon16Add /></div>
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewsStory">Новости</div>}>
              <Avatar className="newsStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell onClick={() => router.toPanel('placeholder')} header={<div className="nameStory">Артём</div>}>
              <Avatar className="noNewStory" size={56} src="https://sun9-18.userapi.com/impg/iCu0lPqTMBqw1c2aV9Ra5OiYd9Ki3yamQVkTfw/5Mw6yCkWOnU.jpg?size=1201x1600&quality=96&sign=7dfe1cea7dfe8b88f5a617790320848c&type=album" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Ndfdgdgdfhfhdfgdfsdfame</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Name</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Name</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Name</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Name</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Name</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Name</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Name</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Name</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
            <HorizontalCell header={<div className="nameNewStory">Name</div>}>
              <Avatar className="newStory" size={56} src="" />
            </HorizontalCell>
          </div>
        </HorizontalScroll>
      </Group>
      
      <Group>
        <Header
          mode="primary"
          aside={
            <Link>
              Показать все
            </Link>
          }
        >
          Рецепты дня
        </Header>
        <CardScroll size="false">
          <Card className="cardRecipesOfTheDay" onClick={() => router.toPanel('exampleRicept')}>
            <img src="https://gotovimop.com/wp-content/uploads/2021/03/bliny-po-starinnomu-receptu-na-drozhzhah.jpg" className="imgCardRecipesOfTheDay" />
            <div className="infoCardRecipesOfTheDay">
              <div className="displayFlex">
                <div className="blockTimeInfoCardRecipesOfTheDay">
                  <Icon28ClockOutline className="iconTimeInfoCardRecipesOfTheDay" width={20} height={20} />
                  <div className="textTimeInfoCardRecipesOfTheDay">20 минут</div>
                </div>
                <Tappable className="tappableBlockInfoCardRecipesOfTheDay">
                  <div className="blockKitchenInfoCardRecipesOfTheDay">
                    <Icon28ChefHatOutline className="iconKitchenInfoCardRecipesOfTheDay" width={20} height={20} />
                    <div className="textKitchenInfoCardRecipesOfTheDay">Русская</div>
                  </div>
                </Tappable>
              </div>
              <div className="textNameInfoCardRecipesOfTheDay">Блины по старому рецепту</div>
            </div>
          </Card>
          <Card className="cardRecipesOfTheDay">
            <img src="https://img.povar.ru/uploads/5c/d1/a9/1b/salat_quothoriatikiquot-683824.JPG" className="imgCardRecipesOfTheDay" />
            <div className="infoCardRecipesOfTheDay">
              <div className="displayFlex">
                <div className="blockTimeInfoCardRecipesOfTheDay">
                  <Icon28ClockOutline className="iconTimeInfoCardRecipesOfTheDay" width={20} height={20} />
                  <div className="textTimeInfoCardRecipesOfTheDay">22 мин. 55 сек.</div>
                </div>
                <Tappable className="tappableBlockInfoCardRecipesOfTheDay">
                  <div className="blockKitchenInfoCardRecipesOfTheDay">
                    <Icon28ChefHatOutline className="iconKitchenInfoCardRecipesOfTheDay" width={20} height={20} />
                    <div className="textKitchenInfoCardRecipesOfTheDay">Интернациональная</div>
                  </div>
                </Tappable>
              </div>
              <div className="textNameInfoCardRecipesOfTheDay">Салат "Хориатики" sssssss sdjl;fjsd fdkjhsfljdhfld flksdhflsldhfj sdjhfksjdfhksdhfk</div>
            </div>
          </Card>
          <Card className="cardRecipesOfTheDay">
            <img src="https://receptisalatov.com/content/recipes/972/main_b_zakuska-na-krekerah.jpg" className="imgCardRecipesOfTheDay" />
            <div className="infoCardRecipesOfTheDay">
              <div className="displayFlex">
                <div className="blockTimeInfoCardRecipesOfTheDay">
                  <Icon28ClockOutline className="iconTimeInfoCardRecipesOfTheDay" width={20} height={20} />
                  <div className="textTimeInfoCardRecipesOfTheDay">15 минут</div>
                </div>
                <Tappable className="tappableBlockInfoCardRecipesOfTheDay">
                  <div className="blockKitchenInfoCardRecipesOfTheDay">
                    <Icon28ChefHatOutline className="iconKitchenInfoCardRecipesOfTheDay" width={20} height={20} />
                    <div className="textKitchenInfoCardRecipesOfTheDay">Домашняя</div>
                  </div>
                </Tappable>
              </div>
              <div className="textNameInfoCardRecipesOfTheDay">Закуска на крекерах</div>
            </div>
          </Card>
        </CardScroll>

        <Header
          mode="primary"
          aside={
            <Link>
              Показать все
            </Link>
          }
        >
          Кухни
        </Header>
        <CardScroll size="false">
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="https://cdn-icons-png.flaticon.com/512/3152/3152848.png" />
              <div className="textCardKitchen">Интернациональная</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Русская</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Английская</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Японская</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Китайская</div>
            </div>
          </Card>
        </CardScroll>

        <Header
          mode="primary"
          aside={
            <Link>
              Показать все
            </Link>
          }
        >
          Категории
        </Header>
        <CardScroll size="false">
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="https://cdn-icons-png.flaticon.com/512/123/123271.png" />
              <div className="textCardKitchen">Первые блюда</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Вторые блюда</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Закуски</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Торты</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Десерты</div>
            </div>
          </Card>
        </CardScroll>

        <Header
          mode="primary"
          aside={
            <Link>
              Показать все
            </Link>
          }
        >
          Тематические категории
        </Header>
        <CardScroll size="false">
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="https://ru.seaicons.com/wp-content/uploads/2016/09/Xmas-Tree-icon.png" />
              <div className="textCardKitchen">Новый год</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Хэллоуин</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Пасха</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">День рождения</div>
            </div>
          </Card>
          <Card className="cardKitchen" size="s">
            <div className="blockCardKitchen">
              <img className="imgCardKitchen" src="" />
              <div className="textCardKitchen">Студенту</div>
            </div>
          </Card>
        </CardScroll>
      </Group>
    </>
  );
}

export default HomePanel;