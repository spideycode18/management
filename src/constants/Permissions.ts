import { DETAIL_ACTION } from "./Common";

export enum ROLE_IDS {
  ADMIN = "ADMIN",
  CATEGORY_MANAGER = "CATEGORY_MANAGER",
  PRODUCT_MANAGER = "PRODUCT_MANAGER"
}

export enum PERMISSIONS_RESOURCE {
  DASHBOARD = "dashboard",
  CATEGORIES = "product-management.categories",
  PRODUCTS = "product-management.products"
}

export const PERMISSIONS = {
  [ROLE_IDS.ADMIN]: [
    { action: ["*"], resource: PERMISSIONS_RESOURCE.DASHBOARD },
    { action: ["*"], resource: PERMISSIONS_RESOURCE.CATEGORIES },
    { action: ["*"], resource: PERMISSIONS_RESOURCE.PRODUCTS }
  ],
  [ROLE_IDS.CATEGORY_MANAGER]: [
    {
      action: [DETAIL_ACTION.VIEW],
      resource: PERMISSIONS_RESOURCE.DASHBOARD,
    },
    { action: ["*"], resource: PERMISSIONS_RESOURCE.CATEGORIES }
  ],
  [ROLE_IDS.PRODUCT_MANAGER]: [
    {
      action: [DETAIL_ACTION.VIEW],
      resource: PERMISSIONS_RESOURCE.DASHBOARD,
    },
    {
      action: ["*"],
      resource: PERMISSIONS_RESOURCE.PRODUCTS
    }
  ],
};
