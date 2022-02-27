import React from 'react';

import {
  PanelHeader,
  PanelHeaderBack,
  Group
} from "@vkontakte/vkui";

function FilterPanel({router}) {
    
  return(
    <>
      <PanelHeader 
        separator={true}
        left={<PanelHeaderBack onClick={() => router.toBack()}/>}
      >
        Filter
      </PanelHeader>

      <Group>
        
      </Group>
    </>
  )
}

export default FilterPanel;