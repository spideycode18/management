import { FunctionComponent } from 'react'
import { PERMISSIONS_RESOURCE } from '../../../constants/Permissions'
import { withPermission } from '../../../components/HOCs/withPermission'

const Products: FunctionComponent = () => {
  return (
    <div>
      Products
    </div>
  )
}

export default  withPermission(Products, {resource: PERMISSIONS_RESOURCE.PRODUCTS})
