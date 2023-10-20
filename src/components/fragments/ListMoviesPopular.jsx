import React from "react";
import { useNavigate } from "react-router-dom";
import { useDataQueryPopular } from "../../services/GetPopular";

export const ListMoviesPopular = () => {
  const navigate = useNavigate();

  const { data: fetchPopular } = useDataQueryPopular();

  const popular = fetchPopular?.data || [];

  const detailPage = (id) => {
    navigate("/detail", {
      state: {
        movie_id: id,
      },
    });
  };

  const renderPopular = () => {
    return popular.slice(10, 20).map((value, index) => {
      return (
        <div
          key={index}
          className="flex flex-col gap-2 cursor-pointer hover:text-secondary"
          onClick={() => detailPage(value.id)}
        >
          <img
            src={`https://image.tmdb.org/t/p/original/${value.backdrop_path}`}
            alt=""
            className="object-cover rounded hover:scale-105"
          />
          <div className="flex justify-between items-center font-semibold text-sm">
            <div>{value.title}</div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-yellow-500 "
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-yellow-500 font-semibold">
                {value.vote_average}
              </span>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="px-14 pt-6 pb-10 bg-main text-white">
      <div className="flex justify-between items-center font-bold text-2xl mb-4">
        <div>Popular</div>
        <div
          onClick={() => navigate("/popular")}
          className="flex gap-1.5 items-center text-secondary hover:text-orange-900 text-sm font-medium cursor-pointer"
        >
          <div>See all popular movies</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-8">{renderPopular()}</div>
    </div>
  );
};
