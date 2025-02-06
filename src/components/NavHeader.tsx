import Image from "next/image";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

const NavHeader = () => {
  return (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Image
              src="/images/shop.png"
              width={60}
              height={60}
              alt="shop logo"
              className=""
            />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-xl">My Shop</span>
              {/* <span className="truncate text-xs">shop plan</span> */}
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
};

export default NavHeader;
