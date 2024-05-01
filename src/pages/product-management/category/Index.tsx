import { FunctionComponent } from 'react'
import { withPermission } from '../../../components/HOCs/withPermission'
import { PERMISSIONS_RESOURCE } from '../../../constants/Permissions'

const Categories: FunctionComponent = () => {
  return (
    <div>
      Categories
    </div>
  )
}

export default withPermission(Categories, {resource: PERMISSIONS_RESOURCE.CATEGORIES})
