import React from 'react';

import {
  PanelHeader,
  PanelHeaderBack,
  Group
} from "@vkontakte/vkui";

function NotificationsPanel({router}) {
    
  return(
    <>
      <PanelHeader 
        separator={true}
      >
        Notifications
      </PanelHeader>

      <Group>
        
      </Group>
    </>
  )
}

export default NotificationsPanel;