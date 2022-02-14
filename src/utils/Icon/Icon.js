import React from 'react';
import Badge from '@mui/material/Badge';
import NotiIcon from '@mui/icons-material/Notifications';
import Typography from '@mui/material/Typography';

function NotificationsIcon({ props }) {
  // 알림 수를 props로 받는다.
  return (
    <div>
      <Badge badgeContent={props} color="error">
        <NotiIcon />
      </Badge>
    </div>
  );
}

function LogoIcon() {
  return (
    <div>
      <Typography variant="h6" noWrap component="div">
        NullLedge
      </Typography>
    </div>
  );
}

export { LogoIcon, NotificationsIcon };
