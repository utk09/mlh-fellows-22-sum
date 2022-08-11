import React from 'react';

const MLHTeamCard = ({ id, name, role, profilePhoto, message }) => {
  return (
    <>
      <li key={id}>
        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8">
          <div className="h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
            <img className="object-cover shadow-lg rounded-lg" src={profilePhoto} alt="" />
          </div>
          <div className="sm:col-span-2">
            <div className="space-y-4">
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3 className="text-secondary-600 text-xl">{name}</h3>
                <p className="text-quinary-600 text-sm">{role}</p>
              </div>
              <div className="text-lg">
                <p className="text-light-400">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

MLHTeamCard.defaultProps = {
  id: '0',
  name: '',
  role: '',
  profilePhoto: 'https://placeimg.com/400/225/arch',
  message: '',
};

export default MLHTeamCard;