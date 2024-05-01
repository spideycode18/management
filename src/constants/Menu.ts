import { PERMISSIONS_RESOURCE } from "./Permissions";

export const MENU = {
    DASHBOARD: {
      title: "Dashboard",
      path: "/",
      isDisabled: true,
      icon: "mdi mdi-home",
    },
    PRODUCT_MANAGEMENT: {
      title: "Product management",
      path: "/product-management",
      isDisabled: true,
      icon: "mdi mdi-book-multiple",
      CATEGORIES: {
        title: "Categories",
        path: "/product-management/categories",
        icon: "mdi mdi-format-list-bulleted",
        resource: PERMISSIONS_RESOURCE.CATEGORIES
      },
      PRODUCT: {
        title: "Products",
        path: "/product-management/products",
        icon: "mdi mdi-briefcase",
        resource: PERMISSIONS_RESOURCE.PRODUCTS
      }
    },
    ICONS: {
      title: "Icons",
      path: "/icons",
      isDisabled: true,
      icon: "mdi mdi-contacts",
    },
  };
  