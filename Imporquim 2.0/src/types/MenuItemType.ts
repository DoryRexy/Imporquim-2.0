type MenuItemType = {
  id: number;
  title: string;
  url: string;
  submenu?: boolean;
  childs?: MenuItemType[];
};

type SubMenuItemType = {
  id: number;
  title: string;
  url: string;
};

export default MenuItemType;
