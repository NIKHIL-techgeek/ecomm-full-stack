import React from 'react'
import AdminMenu from '../../Components/Layout/AdminMenu'
import Layout from '../../Components/Layout/Layout.js'

const AdminOrders = () => {
  return (
    <Layout title={'All Orders Data'}>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu/>
            </div>
            <div className='col-md-9'>
                <h1 className='text-center'>All Orders</h1>
            </div>
        </div>
    </Layout>
  )
}

export default AdminOrders