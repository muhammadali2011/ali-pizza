import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
       Eng yaxshi pizza.
        <br />
        <span className="text-yellow-500">
          Uydan chiqmasdan turib ovqatlaning.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Buyurtma berishda davom eting,{username}
        </Button>
      )}
    </div>
  );
}

export default Home;
