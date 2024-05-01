import { PERMISSIONS, ROLE_IDS } from "../constants/Permissions";

export const canAccess = ({
  permissions,
  action,
  resource,
}: {
  permissions: ROLE_IDS | ROLE_IDS[];
  action: string;
  resource: string;
}) => {
  if (Array.isArray(permissions)) {
    const length = permissions.length;
    let canAccess = false;
    for (let index = 0; index < length; index++) {
      const curPermission = PERMISSIONS[permissions[index]];
      const permission = curPermission?.find(
        (item: { action: string[]; resource: string }) =>
          item.resource === resource || item.resource === "*"
      );
      if (
        permission &&
        (permission.action?.includes("*") ||
          permission.action?.includes(action))
      ) {
        canAccess = true;
        break;
      }
    }
    return canAccess;
  } else {
    const curPermission = PERMISSIONS[permissions];
    const permission = curPermission?.find(
      (item: { action: string[]; resource: string }) =>
        item.resource === resource || item.resource === "*"
    );
    if (
      permission &&
      (permission.action?.includes("*") || permission.action?.includes(action))
    ) {
      return true;
    } else {
      return false;
    }
  }
};
  