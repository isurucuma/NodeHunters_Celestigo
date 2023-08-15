"use client";
import { useRouter, usePathname } from "next/navigation";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <BottomNavigation
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        background: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <BottomNavigationAction
        label="notifications"
        icon={<NotificationsIcon />}
        sx={{
          color: pathname === "/notifications" ? "#001F3F" : "#94989B",
        }}
        onClick={() => router.push("/notifications")}
      />
      <BottomNavigationAction
        label="home"
        icon={
          <HomeIcon
            sx={{
              color: pathname === "/home" ? "#001F3F" : "#94989B",
            }}
          />
        }
        onClick={() => router.push("/home")}
      />
      <BottomNavigationAction
        label="profile"
        icon={<PersonIcon />}
        sx={{
          color: pathname === "/profile" ? "#001F3F" : "#94989B",
        }}
        onClick={() => router.push("/profile")}
      />
    </BottomNavigation>
  );
}
