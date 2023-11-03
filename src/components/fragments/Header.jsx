import React from 'react';
import { Input } from '../elements/Input';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUserAction } from '../../redux/actions/auth/authLoginAction';
import { Button, Popover, PopoverContent, PopoverHandler } from '@material-tailwind/react';

export const Header = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSearch = (keyword) => {
    navigate('/search', {
      state: {
        search: keyword,
      },
    });
  };

  const dataUser = useSelector((state) => state.authGetMeStore);
  const nameUser = dataUser.dataMe.name;
  const emailUser = dataUser.dataMe.email;

  console.log('dataUser', dataUser.dataMe);
  console.log('dataUserName', nameUser);
  console.log('emailUser', emailUser);

  const handleLogout = () => {
    dispatch(LogoutUserAction());
  };

  return (
    <div className="flex justify-between items-center px-14 py-7 gap-3 bg-main text-white">
      <div
        onClick={() => navigate('/home')}
        className="px-5 py-1.5 font-bold text-2xl cursor-pointer"
      >
        <span>
          <span className="text-secondary">Griya</span> Movies
        </span>
      </div>
      <div>
        <Input handle={handleSearch} />
      </div>
      <div className="flex items-center gap-8 text-sm font-semibold">
        <div
          onClick={() => navigate('/nowplaying')}
          className="cursor-pointer hover:text-secondary"
        >
          Now Playing
        </div>
        <div onClick={() => navigate('/popular')} className="cursor-pointer hover:text-secondary">
          Popular
        </div>

        <Popover>
          <PopoverHandler>
            <Button className="capitalize text-sm border-2 border-red-500 py-1.5 px-4">
              Helo, {nameUser}.
            </Button>
          </PopoverHandler>
          <PopoverContent>
            <div className="text-md font-semibold">{nameUser}</div>
            <div className="text-md">{emailUser}</div>
          </PopoverContent>
        </Popover>

        <button
          onClick={handleLogout}
          className="py-1.5 w-[85px] text-white hover:text-red-500 text-sm font-semibold bg-red-500 border border-red-500 rounded-lg hover:bg-main hover:shadow-md hover:shadow-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};
