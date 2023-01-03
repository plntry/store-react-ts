import { AppBar, Toolbar, IconButton, Typography, Divider, useMediaQuery, useTheme } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Box } from '@mui/system'

const Header: React.FC = () => {
  return (
    <>
        <AppBar sx={{ color: 'inverse.main', height: '6.4rem' }}>
            <Toolbar sx={{ height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} component='div'>
                    <Typography color='inverse.main' sx={{ fontFamily: 'Roboto Condensed', fontWeight: '700', fontSize: '46px' }}>
                        STORE
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header
