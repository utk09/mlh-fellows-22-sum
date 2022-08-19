import React from 'react';

const MLHTeamCard = ({ id, name, role, socialMediaURL, message }) => {
  return (
    <>
      <li key={id}>
        <div >
          <div className="card card-side bg-base-200 border-2 border-accent shadow-xl">
            <div className="card-body">
              {socialMediaURL && socialMediaURL.length > 0 ? (
                <a href={socialMediaURL} className="hover:underline"
                  target="_blank" rel="noreferrer">
                  <h2 className="card-title text-neutral-content">{name}</h2>
                </a>
              ) : (<h2 className="card-title text-neutral-content">{name}</h2>)}
              <p className="text-sm text-warning tracking-wide">{role}</p>
              <p className="whitespace-pre-wrap text-sm leading-6">{message}</p>
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