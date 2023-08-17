import Notification from "@/components/molecules/Notification/Notification";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { NotificationDataType } from "@/types/notification";
// input: list of {time, message, title, type}
// output: list of Notification components - use mui grid

const NotificationList = ({ notifications }:{
    notifications: NotificationDataType[]
}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            {notifications.map((notification, index) => (
            <Grid item xs={12} key={index}>
                <Notification 
                index={index}
                time={notification.time}
                message={notification.message}
                title={notification.title}
                type={notification.type}
                />
            </Grid>
            ))}
        </Grid>
        </Box>
    );
}

export default NotificationList;

// import Notification from "@/components/molecules/Notification/Notification";
// import Box from '@mui/material/Box';
// import { NotificationDataType } from "@/types/notification";

// // input: list of {time, message, title, type}
// // output: list of Notification components - use mui grid

// const NotificationList = ({ notifications }:{
//     notifications: NotificationDataType[]
// }) => {
//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//             {notifications.map((notification, index) => (
//                 <Notification 
//                     key={index}
//                     time={notification.time}
//                     message={notification.message}
//                     title={notification.title}
//                     type={notification.type}
//                 />
//             ))}
//         </Box>
//     );
// }

// export default NotificationList;