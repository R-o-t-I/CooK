import React from 'react';

import {
  PanelHeader,
  PanelHeaderBack,
  Group
} from "@vkontakte/vkui";

function BlogsPanel({router}) {
    
  return(
    <>
      <PanelHeader 
        separator={true}
      >
        Blogs
      </PanelHeader>

      <Group>
        
      </Group>
    </>
  )
}

export default BlogsPanel;