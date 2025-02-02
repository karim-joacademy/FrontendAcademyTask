import useAuth from "src/hooks/useAuth.js";

function HomeHeader() {
    const { user } = useAuth();
    return (
        <div>
            <h1>Hello {user.name}</h1>
        </div>
    );
}

export default HomeHeader;