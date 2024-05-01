import { useContext } from "react";
import { PERMISSIONS_RESOURCE } from "../../constants/Permissions";
import { AuthContext } from "../../contexts/AuthProvider";
import { DETAIL_ACTION } from "../../constants/Common";
import { canAccess } from "../../helpers/Common";
import { Alert } from "react-bootstrap";

export const withPermission = (Component: any, props?: { resource: PERMISSIONS_RESOURCE }) => {
    return () => {
        const authData = useContext(AuthContext);
        const permissions: any = authData?.user;
        const componentProps = {
            ...props,
            authData: authData,
        };
        return (!authData.user || (props?.resource && canAccess({ permissions, action: DETAIL_ACTION.VIEW, resource: props.resource }))) ? <Component {...componentProps} /> :
            <Alert variant="info">Sorry, you are not authorized to access this page.</Alert>;
    };
};