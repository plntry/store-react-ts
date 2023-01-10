import { List, Menu, MenuItem, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectCategories } from '../../store/categoriesSlice'

const HeaderMenu: React.FC<Strings> = ({ navItems }: Strings) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const open = Boolean(anchorEl)

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  let catalogMenuItems = ['All products', ...Object.values(useSelector(selectCategories))[0]]

  catalogMenuItems = catalogMenuItems.map((item: string) => item.charAt(0).toUpperCase() + item.slice(1))

  return (
    <>
      <List
        component="nav"
        sx={{ display: 'flex' }}
      >
        {navItems.map((item: string) => {
          return (
            item === 'Catalog'
              ? <ListItem
                  key={item}
                  button
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClickListItem}
                >
                  <ListItemText
                    primary={item}
                    secondary={catalogMenuItems[selectedIndex]}
                  />
                </ListItem>
              : <ListItem
                  key={item}
                  button
                >
                  <ListItemText
                    primary={item}
                  />
                </ListItem>
          )
        })}
      </List>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox'
        }}
      >
        {catalogMenuItems.map((option: string, index: number) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => { handleMenuItemClick(event, index) }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default HeaderMenu
