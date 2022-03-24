import React, {useState} from 'react';

import {
  PanelHeader,
  Group,
  Banner,
  VKCOM,
  PanelHeaderButton,
  Search,
  Header,
  CardScroll,
  Card,
  SimpleCell,
  Avatar,
  CardGrid,
  Tabs,
  TabsItem,
  HorizontalScroll,
  Spacing,
  Separator,
} from "@vkontakte/vkui";
import { Icon28AddOutline } from '@vkontakte/icons';

function BlogsPanel({router, platform}) {
  const [activeTab, setActiveTab] = useState('allBlogs')
    
  return(
    <>
      {platform === VKCOM ?
        <PanelHeader
          separator={true}
          left={<PanelHeaderButton label="Создать блог"><Icon28AddOutline style={{marginRight: 6}}/></PanelHeaderButton> }
        >
          Блоги
        </PanelHeader>
      : undefined}
      {platform !== VKCOM ?
        <PanelHeader
          separator={false}
          left={<PanelHeaderButton><Icon28AddOutline /></PanelHeaderButton> }
        >
          Блоги
        </PanelHeader>
      : undefined}

      {activeTab === "allBlogs" ? <div>
      <Group>
        <Tabs>
          <HorizontalScroll>
            <TabsItem
              onClick={() => setActiveTab ('allBlogs')}
              selected={activeTab === 'allBlogs'}
            >
              Все блоги
            </TabsItem>
            <TabsItem
              onClick={() => setActiveTab ('myBlogs')}
              selected={activeTab === 'myBlogs'}
            >
              Мои блоги
            </TabsItem>
            <TabsItem
              onClick={() => setActiveTab ('adminBlogs')}
              selected={activeTab === 'adminBlogs'}
            >
              Управляемые
            </TabsItem>
          </HorizontalScroll>
        </Tabs>
        {platform === VKCOM ? <Separator wide style={{margin: "0px -8px"}} /> : undefined}
        <Search />

        <div class="blogBannerMansonryItem">
          <div class="blogBannersMansonryItem1">
            <img className="blogBannerMansonryItemImg" src="https://krot.info/uploads/posts/2020-10/1603849323_2-p-fon-kulinariya-2.jpg"/>
            <div className="blogBannerMansonryItemBlock">
              <div className="blogBannerMansonryItemText">Интересное</div>
              <div className="blogBannerMansonryItemDescription">Показываем то, что интересно многим</div>
            </div>
          </div>
          <div class="blogBannersMansonryItem2">
            <img className="blogBannerMansonryItemImg" src="https://s.pfst.net/2016.05/4807824675676004e52c5c19094ddf8938ab5738489d_b.jpg"/>
            <div className="blogBannerMansonryItemBlock">
              <div className="blogBannerMansonryItemText">От шефов</div>
              <div className="blogBannerMansonryItemDescription">Показываем то, что интересно многим</div>
            </div>
          </div>
          <div class="blogBannersMansonryItem3">
            <img className="blogBannerMansonryItemImg" src="https://img3.cliparto.com/pic/xl/190952/6966902-frame-of-different-pepper-on-black-board-top.jpg"/>
            <div className="blogBannerMansonryItemBlock">
              <div className="blogBannerMansonryItemText">Блюда народов</div>
              <div className="blogBannerMansonryItemDescription">Пользователи рассказывают о своих блюдах</div>
            </div>
          </div>
          <div class="blogBannersMansonryItem4">
            <img className="blogBannerMansonryItemImg" src="https://s.pfst.net/2016.05/4808147672108961bc39c89b9689a5e53e29c712fc25_b.jpg"/>
            <div className="blogBannerMansonryItemBlock">
              <div className="blogBannerMansonryItemText">Предпочтения городов</div>
              <div className="blogBannerMansonryItemDescription">То, что рекомендуют в вашем городе</div>
            </div>
          </div>
        </div>
      </Group>
      <Group header={<Header>Блоги увлеченных мужчин</Header>}>
        <CardScroll size="false">
          <Card mode="shadow" className="cardBlock">
            <SimpleCell
              style={{marginTop: 12}}
              before={<Avatar size={48} />}
              description="1.8K подписчиков"
              disabled
            >
              Александр Тихонович
            </SimpleCell>
            <CardGrid size="s" style={{marginTop: 12, marginBottom: 12}}>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  overlayAction="always"
                  overlayMode="dark"
                  overlayIcon={<div style={{color: "#FFF", fontSize: 16, fontFamily: 500}}>+43</div>}
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
            </CardGrid>
          </Card>
          <Card mode="shadow" className="cardBlock">
            <SimpleCell
              style={{marginTop: 12}}
              before={<Avatar size={48} />}
              description="1.8K подписчиков"
              disabled
            >
              Александр Тихонович
            </SimpleCell>
            <CardGrid size="s" style={{marginTop: 12, marginBottom: 12}}>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  overlayAction="always"
                  overlayMode="dark"
                  overlayIcon={<div style={{color: "#FFF", fontSize: 16, fontFamily: 500}}>+43</div>}
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
            </CardGrid>
          </Card>
          <Card mode="shadow" className="cardBlock">
            <SimpleCell
              style={{marginTop: 12}}
              before={<Avatar size={48} />}
              description="1.8K подписчиков"
              disabled
            >
              Александр Тихонович
            </SimpleCell>
            <CardGrid size="s" style={{marginTop: 12, marginBottom: 12}}>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  overlayAction="always"
                  overlayMode="dark"
                  overlayIcon={<div style={{color: "#FFF", fontSize: 16, fontFamily: 500}}>+43</div>}
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
            </CardGrid>
          </Card>
          <Card mode="shadow" className="cardBlock">
            <SimpleCell
              style={{marginTop: 12}}
              before={<Avatar size={48} />}
              description="1.8K подписчиков"
              disabled
            >
              Александр Тихонович
            </SimpleCell>
            <CardGrid size="s" style={{marginTop: 12, marginBottom: 12}}>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  overlayAction="always"
                  overlayMode="dark"
                  overlayIcon={<div style={{color: "#FFF", fontSize: 16, fontFamily: 500}}>+43</div>}
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
            </CardGrid>
          </Card>
          <Card mode="shadow" className="cardBlock">
            <SimpleCell
              style={{marginTop: 12}}
              before={<Avatar size={48} />}
              description="1.8K подписчиков"
              disabled
            >
              Александр Тихонович
            </SimpleCell>
            <CardGrid size="s" style={{marginTop: 12, marginBottom: 12}}>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
              <Card>
                <Avatar
                  overlayAction="always"
                  overlayMode="dark"
                  overlayIcon={<div style={{color: "#FFF", fontSize: 16, fontFamily: 500}}>+43</div>}
                  src="https://img.delo-vcusa.ru/2020/02/bliny-na-kefire-s-tvorogom.jpg"
                  size={75}
                  mode="image"
                />
              </Card>
            </CardGrid>
          </Card>
        </CardScroll>
      </Group>

      <Group header={<Header>Блоги от ТВ-каналов</Header>}>

      </Group>
      </div> : null}

      {activeTab === "myBlogs" ? <div>
        <Group>
          <Tabs>
            <HorizontalScroll>
              <TabsItem
                onClick={() => setActiveTab ('allBlogs')}
                selected={activeTab === 'allBlogs'}
              >
                Все блоги
              </TabsItem>
              <TabsItem
                onClick={() => setActiveTab ('myBlogs')}
                selected={activeTab === 'myBlogs'}
              >
                Мои блоги
              </TabsItem>
              <TabsItem
                onClick={() => setActiveTab ('adminBlogs')}
                selected={activeTab === 'adminBlogs'}
              >
                Управляемые
              </TabsItem>
            </HorizontalScroll>
          </Tabs>
          {platform === VKCOM ? <Separator wide style={{margin: "0px -8px"}} /> : undefined}
          <Search />
        </Group>
      </div> : null}

      {activeTab === "adminBlogs" ? <div>
      <Group>
          <Tabs>
            <HorizontalScroll>
              <TabsItem
                onClick={() => setActiveTab ('allBlogs')}
                selected={activeTab === 'allBlogs'}
              >
                Все блоги
              </TabsItem>
              <TabsItem
                onClick={() => setActiveTab ('myBlogs')}
                selected={activeTab === 'myBlogs'}
              >
                Мои блоги
              </TabsItem>
              <TabsItem
                onClick={() => setActiveTab ('adminBlogs')}
                selected={activeTab === 'adminBlogs'}
              >
                Управляемые
              </TabsItem>
            </HorizontalScroll>
          </Tabs>
          {platform === VKCOM ? <Separator wide style={{margin: "0px -8px"}} /> : undefined}
          <Search />
        </Group>
      </div> : null}
    </>
  )
}

export default BlogsPanel;