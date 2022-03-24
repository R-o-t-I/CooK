/* Импорт какой-то херни, без которой не работает все */
import React, { lazy, Suspense } from 'react';
import { withRouter } from 'react-router-vkminiapps';

/* Импорт компонентов */
import {
  ConfigProvider,
  AppRoot,
  SplitLayout,
  PanelHeader,
  SplitCol,
  Epic,
  View,
  Panel,
  ModalRoot,
  ScreenSpinner,
  usePlatform,
  VKCOM,
  withAdaptivity,
} from "@vkontakte/vkui";

/* Таббар */
import DesktopNavigation from './js/components/navigation/desktop';
import MobailNavigation from './js/components/navigation/mobail';

/* Мадалки */
import HomeBotsListModal from './js/components/modals/HomeBotsListModal';
import HomeBotInfoModal from './js/components/modals/HomeBotInfoModal';

/* Панели */
const HomePanel = lazy(() => import('./js/panels/home/base'));
const SearchPanel = lazy(() => import('./js/panels/home/search'));
const FilterPanel = lazy(() => import('./js/panels/home/filter'));
const RiceptPanel = lazy(() => import('./js/panels/home/exampleRicept'));

const BlogsPanel = lazy(() => import('./js/panels/blogs/base'));

const AddPanel = lazy(() => import('./js/panels/add/base'));

const NotificationsPanel = lazy(() => import('./js/panels/notifications/base'));

const ProfilePanel = lazy(() => import('./js/panels/profile/base'));

/* Начало кода */
const App = withAdaptivity(({ viewWidth, router }) => {
  const setActiveView = (e) => router.toView(e.currentTarget.dataset.id)
  
  const isDesktop = viewWidth >= 3
  const platform = isDesktop ? VKCOM : usePlatform()
  const hasHeader = isDesktop !== true

  const modals = (
    <ModalRoot>
      <HomeBotsListModal
        id="botsList"
        platform={platform}
        router={router}
      />

      <HomeBotInfoModal
        id="botInfo"
        platform={platform}
        router={router}
      />
    </ModalRoot>
  );

  return(
    <ConfigProvider platform={platform} isWebView>
      <AppRoot>
        <SplitLayout
          header={hasHeader && <PanelHeader separator={false} />}
          style={{ justifyContent: "center" }}
        >
          <SplitCol
            animate={!isDesktop}
            spaced={isDesktop}
            width={isDesktop ? '734px' : '100%'}
            maxWidth={isDesktop ? '734px' : '100%'}
          >
            <Epic 
              activeStory={router.activeView} 
              tabbar={!isDesktop && 
                <MobailNavigation
                  setActiveView={setActiveView}
                  router={router}
                />
              }
            >
              <View 
                id='home'
                activePanel={router.activePanel}
                popout={router.popout}
                modal={modals}
              >
                <Panel id='base'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <HomePanel
                      router={router}
                      platform={platform}
                    />
                  </Suspense>
                </Panel>
                <Panel id='search'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <SearchPanel
                      router={router}
                      platform={platform}
                    />
                  </Suspense>
                </Panel>
                <Panel id='filter'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <FilterPanel
                      router={router}
                      platform={platform}
                    />
                  </Suspense>
                </Panel>
                <Panel id='exampleRicept'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <RiceptPanel
                      router={router}
                      platform={platform}/>
                  </Suspense>
                </Panel>
              </View>

              <View 
                id="blogs"
                activePanel={router.activePanel}
                popout={router.popout}
                modal={modals}
              >
                <Panel id='base'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <BlogsPanel
                      router={router}
                      isDesktop={isDesktop}
                      platform={platform}
                    />
                  </Suspense>
                </Panel>
              </View>

              <View 
                id="add"
                activePanel={router.activePanel}
                popout={router.popout}
                modal={modals}
              >
                <Panel id='base'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <AddPanel
                      router={router}
                      isDesktop={isDesktop}
                      platform={platform}
                    />
                  </Suspense>
                </Panel>
              </View>

              <View 
                id="notifications"
                activePanel={router.activePanel}
                popout={router.popout}
                modal={modals}
              >
                <Panel id='base'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <NotificationsPanel
                      router={router}
                      isDesktop={isDesktop}
                      platform={platform}
                    />
                  </Suspense>
                </Panel>
              </View>

              <View 
                id="profile"
                activePanel={router.activePanel}
                popout={router.popout}
                modal={modals}
              >
                <Panel id='base'>
                  <Suspense fallback={<ScreenSpinner/>}>
                    <ProfilePanel
                      router={router}
                      isDesktop={isDesktop}
                      platform={platform}
                    />
                  </Suspense>
                </Panel>
              </View>
            </Epic>
          </SplitCol>

          {isDesktop &&
            <DesktopNavigation
              hasHeader={hasHeader}
              setActiveView={setActiveView}
              router={router}
            />
          }
            
        </SplitLayout>
      </AppRoot>
    </ConfigProvider>
  )
}, { viewWidth: true })

export default withRouter(App);