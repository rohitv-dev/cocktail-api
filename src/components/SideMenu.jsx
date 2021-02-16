import React, { useState } from 'react'
import Collapsible from './Collapsible'
import * as SM from './styled/SideMenu'

function SideMenu({ open, filters, filterData }) {
  return (
    <>
      <SM.SideMenu
        initial={{ width: open ? 0 : '30%' }} 
        animate={{ width: open ? 0 : '30%' }}
        transition={{ duration: 0.5 }}
      >
        <SM.Content
          initial={{ opacity: open ? 0 : 1 }}
          animate={{ opacity: open ? 0 : 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          { !open && 
            <>
              <Collapsible 
                title="Category"
                filterData={filterData["c"]}
              />
            </>
          }
        </SM.Content>
      </SM.SideMenu>
    </>
  )
}

export default SideMenu
