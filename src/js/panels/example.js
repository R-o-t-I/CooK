import React from 'react';

import {
  PanelHeader,
  PanelHeaderBack,
  Group
} from "@vkontakte/vkui";

function Panel({router}) {
    
  return(
    <>
      <PanelHeader 
        separator={true}
        left={<PanelHeaderBack onClick={() => router.toBack()}/>}
      >
        Header
      </PanelHeader>

      <Group>
        
      </Group>
    </>
  )
}

export default Panel;