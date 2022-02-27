import React, {useState} from 'react';

import {
  PanelHeader,
  PanelHeaderBack,
  IconButton,
  Tappable,
  Tabs,
  TabsItem,
  HorizontalScroll,
  Cell,
  CardGrid,
  Card,
  MiniInfoCell,
  Avatar
} from "@vkontakte/vkui";

import {
  Icon20ArticleOutline,
  Icon20UserOutline,
  Icon24AddOutline,
  Icon24MinusOutline,
  Icon28ChefHatOutline,
  Icon28ClockOutline
} from '@vkontakte/icons';

function RiceptPanel({router}) {
  const [activeTab, setActiveTab] = useState('ingredients')
    
  return(
    <div className="backgroundPageRicept">
      <PanelHeader 
        separator={false}
        left={<PanelHeaderBack onClick={() => router.toBack()}/>}
      >
        Рецепт
      </PanelHeader>
      <div className="blockPortionsAndKkalAndImg">
        <img className="imgRicept" src="https://gotovimop.com/wp-content/uploads/2021/03/bliny-po-starinnomu-receptu-na-drozhzhah.jpg" />
      </div>
      <div>
        <div className="blockPortionsAndKkal">
          <div className="nameDish">Блины по старому рецепту</div>
          <div className="blockInfoDish">
            <div className="blockTimeInfoDish">
              <Icon28ClockOutline className="iconTimeInfoDish" width={20} height={20} />
              <div className="textTimeInfoDish">20 минут 30 секунд</div>
            </div>
            <Tappable className="tappableBlockInfoDish">
              <div className="blockKitchenInfoDish">
                <Icon28ChefHatOutline className="iconKitchenInfoDish" width={20} height={20} />
                <div className="textKitchenInfoDish">Интернациональная</div>
              </div>
            </Tappable>
          </div>
          <div className="blockKkal">
          <div className="textBlockKkal">Энергетическая ценность на порцию</div>
            <div className="blockAllKkal">
              <div className="blocksKkal">
                <div className="titleBlocksKkal">Ценность</div>
                <div className="numberBlocksKkal">1028</div>
                <div className="footorBlocksKkal">ккал</div>
              </div>
              <div className="blocksKkal">
                <div className="titleBlocksKkal">Белки</div>
                <div className="numberBlocksKkal">33</div>
                <div className="footorBlocksKkal">грамм</div>
              </div>
              <div className="blocksKkal">
                <div className="titleBlocksKkal">Жиры</div>
                <div className="numberBlocksKkal">65</div>
                <div className="footorBlocksKkal">грамм</div>
              </div>
              <div className="blocksKkal">
                <div className="titleBlocksKkal">Углеводы</div>
                <div className="numberBlocksKkal">72</div>
                <div className="footorBlocksKkal">грамм</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="infoBlokTabs">
        <Tabs>
          <HorizontalScroll>
            <TabsItem
              onClick={() => setActiveTab ('ingredients')}
              selected={activeTab === 'ingredients'}
            >
              Ингредиенты
            </TabsItem>
            <TabsItem
              onClick={() => setActiveTab ('instruction')}
              selected={activeTab === 'instruction'}
            >
              Инструкция
            </TabsItem>
            <TabsItem
ъ              onClick={() => setActiveTab ('info')}
              selected={activeTab === 'info'}
            >
              Информация
            </TabsItem>
            <TabsItem
              onClick={() => setActiveTab ('comments')}
              selected={activeTab === 'comments'}
            >
              Отзывы
            </TabsItem>
          </HorizontalScroll>
        </Tabs>

        {activeTab === "ingredients" ? <div className="blockIngredientsTab">
          <div className="blockPortions">
            <IconButton className="iconMinusBlockPortions"><Icon24MinusOutline width={40} height={40} /></IconButton>
            <div>
              <div className="numberBlockPortions">1</div>
              <div className="descriptionBlockPortions">порции</div>
            </div>
            <IconButton className="iconAddBlockPortions"><Icon24AddOutline width={40} height={40} /></IconButton>
          </div>
          <CardGrid size="l">
            <Card mode="outline">
              <Cell
                indicator="150 гр."
                disabled
              >
                Тесто
              </Cell>
            </Card>
            <Card mode="outline">
              <Cell
                indicator="150 гр."
                disabled
              >
                Тесто
              </Cell>
            </Card>
            <Card mode="outline">
              <Cell
                indicator="150 гр."
                disabled
              >
                Тесто
              </Cell>
            </Card>
          </CardGrid>
        </div> : null}

        {activeTab === "instruction" ? <div>

        </div> : null}

        {activeTab === "info" ? <div className="blockInfoTab">
          <MiniInfoCell
            before={<Icon20ArticleOutline />}
            textWrap="full"
          >
            Блины — блюдо русской, немецкой, кавказской кухонь, выпекаемое из жидкого теста на сковороде. Русские блины выпекаются из пшеничного дрожжевого теста. Подаются горячими с растопленным сливочным маслом или сметаной. Также могут быть поданы с икрой, солёной рыбой и любым другим гарниром по желанию.
          </MiniInfoCell>
          <MiniInfoCell
            before={<Icon20UserOutline />}
            textWrap="short"
            after={
              <Avatar
                size={24}
                src="https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1"
              />
            }
          >
            Автор рецепта: Александр Тихонович
          </MiniInfoCell>
        </div> : null}

        {activeTab === "comments" ? <div>

        </div> : null}
      </div>
    </div>
  )
}

export default RiceptPanel;