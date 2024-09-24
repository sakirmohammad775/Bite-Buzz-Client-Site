import useAdmin from "../Hooks/useAdmin";


const AdminRoutes = () => {
    const [isAdmin,isAdminLoading]=useAdmin()
    return (
        <div>
            
        </div>
    );
};

export default AdminRoutes;