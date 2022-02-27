import React from 'react';

import {
  PanelHeader,
  PanelHeaderBack,
  Group
} from "@vkontakte/vkui";

function AddPanel({router}) {
    
  return(
    <>
      <PanelHeader 
        separator={true}
      >
        Add
      </PanelHeader>

      <Group>
        
      </Group>
    </>
  )
}

export default AddPanel;